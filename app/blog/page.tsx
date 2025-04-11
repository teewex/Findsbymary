"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { getBlogPosts } from "@/lib/supabase"

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const postsPerPage = 6

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const { posts: fetchedPosts, count } = await getBlogPosts(page)

        if (fetchedPosts && fetchedPosts.length > 0) {
          if (page === 1) {
            setPosts(fetchedPosts)
          } else {
            setPosts((prev) => [...prev, ...fetchedPosts])
          }
          setHasMore(count > page * postsPerPage)
        } else {
          // If no posts in Supabase, use mock data only for the first page
          if (page === 1) {
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
              },
              {
                id: 3,
                title: "The Art of Data-Driven Decision Making",
                excerpt: "Learn how to build a culture of data-driven decision making in your organization.",
                slug: "data-driven-decision-making",
                featured_image:
                  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
                created_at: "2023-04-15T00:00:00Z",
              },
            ]
            setPosts(mockPosts)
            setHasMore(false)
          } else {
            setHasMore(false)
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        // Use mock data as fallback
        if (page === 1) {
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
            },
            {
              id: 3,
              title: "The Art of Data-Driven Decision Making",
              excerpt: "Learn how to build a culture of data-driven decision making in your organization.",
              slug: "data-driven-decision-making",
              featured_image:
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
              created_at: "2023-04-15T00:00:00Z",
            },
          ]
          setPosts(mockPosts)
        }
        setHasMore(false)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [page])

  const loadMorePosts = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  // Animation variants for the typing effect
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // Create an array of letters for the typing animation
  const titleText = "Insights & Perspectives"
  const titleLetters = titleText.split("")

  // Calculate which posts to show based on pagination
  const displayedPosts = posts.slice(0, page * postsPerPage)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary/30 to-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-primary"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            {titleLetters.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Explore our latest thoughts on data analytics, business intelligence, and industry trends
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col h-full bg-background rounded-lg border shadow-sm overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.featured_image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-primary hover:bg-primary/80 text-white" asChild>
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination / Load More */}
          {hasMore && (
            <div className="mt-12 flex justify-center">
              <Button onClick={loadMorePosts} disabled={isLoading} variant="outline" className="min-w-[150px]">
                {isLoading ? "Loading..." : "Load More Posts"}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

