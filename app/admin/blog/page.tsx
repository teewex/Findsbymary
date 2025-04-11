"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Edit, Trash2, Eye, Upload, Save } from "lucide-react"
import { getAllBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost, uploadImage } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

export default function BlogManagementPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("all-posts")
  const editorRef = useRef(null)

  // Form state for new/edit post
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: null,
    author: "Mary Irondi",
    status: "Draft",
  })

  const [previewImage, setPreviewImage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imageFile, setImageFile] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      const fetchedPosts = await getAllBlogPosts()

      if (fetchedPosts.length > 0) {
        setPosts(fetchedPosts)
      } else {
        // If no posts in Supabase, use mock data
        // This is just for demo purposes
        const mockPosts = [
          {
            id: 1,
            title: "5 Data Visualization Trends for 2023",
            excerpt:
              "Explore the latest trends in data visualization and how they can enhance your business reporting.",
            slug: "data-visualization-trends",
            featured_image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            created_at: "2023-06-12T00:00:00Z",
            status: "Published",
            author: "Mary Irondi",
          },
          {
            id: 2,
            title: "Comparing Top Business Intelligence Tools",
            excerpt:
              "An in-depth comparison of leading BI tools to help you choose the right one for your business needs.",
            slug: "bi-tools-comparison",
            featured_image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            created_at: "2023-05-28T00:00:00Z",
            status: "Published",
            author: "Mary Irondi",
          },
          {
            id: 3,
            title: "The Art of Data-Driven Decision Making",
            excerpt: "Learn how to build a culture of data-driven decision making in your organization.",
            slug: "data-driven-decision-making",
            featured_image:
              "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
            created_at: "2023-04-15T00:00:00Z",
            status: "Published",
            author: "Mary Irondi",
          },
        ]
        setPosts(mockPosts)
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-")
      setFormData((prev) => ({
        ...prev,
        slug,
      }))
    }
  }

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a JPEG, PNG, GIF, or WebP image.",
          variant: "destructive",
        })
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB.",
          variant: "destructive",
        })
        return
      }

      setImageFile(file)
      const imageUrl = URL.createObjectURL(file)
      setPreviewImage(imageUrl)
      setFormData((prev) => ({
        ...prev,
        featured_image: imageUrl,
      }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate required fields
      if (!formData.title || !formData.slug || !formData.excerpt || !formData.content) {
        toast({
          title: "Missing required fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      // Validate slug format
      const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
      if (!slugRegex.test(formData.slug)) {
        toast({
          title: "Invalid slug format",
          description: "Slug should contain only lowercase letters, numbers, and hyphens.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      let imageUrl = formData.featured_image

      // Upload image if a new one was selected
      if (imageFile) {
        try {
          imageUrl = await uploadImage(imageFile, "blog")
        } catch (error) {
          console.error("Error uploading image:", error)
          toast({
            title: "Image upload failed",
            description: "Failed to upload image. Please try again.",
            variant: "destructive",
          })
          setIsSubmitting(false)
          return
        }
      }

      const postData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        featured_image: imageUrl,
        author: formData.author || "Mary Irondi",
        status: formData.status,
      }

      let result

      if (formData.id) {
        // Update existing post
        result = await updateBlogPost(formData.id, postData)
        toast({
          title: "Success",
          description: "Blog post updated successfully",
        })
      } else {
        // Add new post
        result = await createBlogPost(postData)
        toast({
          title: "Success",
          description: "Blog post created successfully",
        })
      }

      // Refresh posts list
      await fetchPosts()

      // Reset form
      setFormData({
        id: null,
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        featured_image: null,
        author: "Mary Irondi",
        status: "Draft",
      })
      setPreviewImage(null)
      setImageFile(null)
      setActiveTab("all-posts")
    } catch (error) {
      console.error("Error saving blog post:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to save blog post",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Edit post
  const handleEditPost = (post) => {
    setFormData({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content || "",
      featured_image: post.featured_image,
      author: post.author || "Mary Irondi",
      status: post.status,
    })
    setPreviewImage(post.featured_image)
    setActiveTab("new-post")
  }

  // Delete post
  const handleDeletePost = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteBlogPost(postId)
        toast({
          title: "Success",
          description: "Blog post deleted successfully",
        })
        // Refresh posts list
        await fetchPosts()
      } catch (error) {
        console.error("Error deleting blog post:", error)
        toast({
          title: "Error",
          description: "Failed to delete blog post",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <Button
            onClick={() => {
              setFormData({
                id: null,
                title: "",
                slug: "",
                excerpt: "",
                content: "",
                featured_image: null,
                author: "Mary Irondi",
                status: "Draft",
              })
              setPreviewImage(null)
              setImageFile(null)
              setActiveTab("new-post")
            }}
            className="bg-primary hover:bg-primary/90"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all-posts">All Posts</TabsTrigger>
            <TabsTrigger value="new-post">{formData.id ? "Edit Post" : "New Post"}</TabsTrigger>
          </TabsList>

          <TabsContent value="all-posts">
            <Card>
              <CardHeader>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>
                  Manage your blog posts here. You can edit, delete, or view published posts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.slug}</TableCell>
                        <TableCell>
                          {new Date(post.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              post.status === "Published"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {post.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" onClick={() => router.push(`/blog/${post.slug}`)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDeletePost(post.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-post">
            <Card>
              <CardHeader>
                <CardTitle>{formData.id ? "Edit Post" : "Create New Post"}</CardTitle>
                <CardDescription>Fill in the details below to create a new blog post.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      This will be used for the URL: /blog/{formData.slug || "your-post-slug"}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      rows={3}
                    />
                    <p className="text-sm text-muted-foreground">
                      A short summary that appears on the blog listing page.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featuredImage">Featured Image</Label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("image-upload").click()}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                      </Button>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      {previewImage && (
                        <div className="relative h-20 w-32 rounded overflow-hidden">
                          <Image src={previewImage || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-[300px]"
                      rows={12}
                      ref={editorRef}
                    />
                    <p className="text-sm text-muted-foreground">You can use HTML tags for formatting.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("all-posts")}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                          Saving...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Save className="mr-2 h-4 w-4" />
                          {formData.id ? "Update Post" : "Create Post"}
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

