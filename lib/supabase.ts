import { createClient } from "@supabase/supabase-js"

// Create a singleton supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create a singleton instance for client-side usage
let supabaseInstance: ReturnType<typeof createClient> | null = null

export const getSupabase = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  }
  return supabaseInstance
}

// Use this for direct access
export const supabase = getSupabase()

// Blog post functions
export async function getBlogPosts(page = 1, limit = 10) {
  try {
    const from = (page - 1) * limit
    const to = from + limit - 1

    const { data, error, count } = await supabase
      .from("blog_posts")
      .select("*", { count: "exact" })
      .eq("status", "Published")
      .order("created_at", { ascending: false })
      .range(from, to)

    if (error) {
      console.error("Error fetching blog posts:", error)
      return { posts: [], count: 0 }
    }

    return { posts: data || [], count: count || 0 }
  } catch (error) {
    console.error("Exception fetching blog posts:", error)
    return { posts: [], count: 0 }
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).single()

    if (error) {
      console.error("Error fetching blog post:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Exception fetching blog post:", error)
    return null
  }
}

export async function createBlogPost(post) {
  try {
    // Ensure created_at is set
    const postWithTimestamp = {
      ...post,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const { data, error } = await supabase.from("blog_posts").insert([postWithTimestamp]).select()

    if (error) {
      console.error("Error creating blog post:", error)
      throw error
    }

    return data?.[0]
  } catch (error) {
    console.error("Exception creating blog post:", error)
    throw error
  }
}

export async function updateBlogPost(id, post) {
  try {
    // Always update the updated_at timestamp
    const postWithTimestamp = {
      ...post,
      updated_at: new Date().toISOString(),
    }

    const { data, error } = await supabase.from("blog_posts").update(postWithTimestamp).eq("id", id).select()

    if (error) {
      console.error("Error updating blog post:", error)
      throw error
    }

    return data?.[0]
  } catch (error) {
    console.error("Exception updating blog post:", error)
    throw error
  }
}

export async function deleteBlogPost(id) {
  try {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (error) {
      console.error("Error deleting blog post:", error)
      throw error
    }

    return true
  } catch (error) {
    console.error("Exception deleting blog post:", error)
    throw error
  }
}

// Upload image to Supabase Storage
export async function uploadImage(file, path = "blog") {
  try {
    if (!file) {
      throw new Error("No file provided")
    }

    // Create a unique file name
    const fileExt = file.name.split(".").pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`
    const filePath = `${path}/${fileName}`

    // Check if the bucket exists, create it if it doesn't
    const { data: buckets } = await supabase.storage.listBuckets()
    const blogBucket = buckets?.find((bucket) => bucket.name === "blog-images")

    if (!blogBucket) {
      const { data, error } = await supabase.storage.createBucket("blog-images", {
        public: true,
        fileSizeLimit: 10485760, // 10MB
      })

      if (error) {
        console.error("Error creating bucket:", error)
        throw error
      }
    }

    // Upload the file
    const { data, error } = await supabase.storage.from("blog-images").upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    })

    if (error) {
      console.error("Error uploading image:", error)
      throw error
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("blog-images").getPublicUrl(filePath)

    return publicUrl
  } catch (error) {
    console.error("Exception uploading image:", error)
    throw error
  }
}

// Get all blog posts for admin (including drafts)
export async function getAllBlogPosts() {
  try {
    const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching all blog posts:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Exception fetching all blog posts:", error)
    return []
  }
}

// Get blog post statistics
export async function getBlogStats() {
  try {
    const { count: publishedCount, error: publishedError } = await supabase
      .from("blog_posts")
      .select("*", { count: "exact", head: true })
      .eq("status", "Published")

    const { count: draftCount, error: draftError } = await supabase
      .from("blog_posts")
      .select("*", { count: "exact", head: true })
      .eq("status", "Draft")

    if (publishedError || draftError) {
      console.error("Error fetching blog stats:", publishedError || draftError)
      return { published: 0, drafts: 0 }
    }

    return {
      published: publishedCount || 0,
      drafts: draftCount || 0,
    }
  } catch (error) {
    console.error("Exception fetching blog stats:", error)
    return { published: 0, drafts: 0 }
  }
}

