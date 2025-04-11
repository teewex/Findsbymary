"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, PieChart } from "@/components/ui/charts"
import { FileText, PenTool, Eye, Users, ArrowRight, PlusCircle } from "lucide-react"
import { getBlogStats, getAllBlogPosts } from "@/lib/supabase"

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    published: 0,
    drafts: 0,
  })
  const [recentPosts, setRecentPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Fetch blog stats
        const blogStats = await getBlogStats()
        setStats(blogStats)

        // Fetch recent posts
        const posts = await getAllBlogPosts()
        setRecentPosts(posts.slice(0, 5))
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Sample data for charts
  const viewsData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 280 },
    { name: "May", value: 590 },
    { name: "Jun", value: 320 },
  ]

  const categoryData = [
    { name: "Data Visualization", value: 35 },
    { name: "Business Intelligence", value: 25 },
    { name: "Data Strategy", value: 20 },
    { name: "Analytics", value: 15 },
    { name: "Other", value: 5 },
  ]

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button asChild>
            <Link href="/admin/blog">
              Manage Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Published Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? <span className="animate-pulse">...</span> : stats.published}
              </div>
              <p className="text-xs text-muted-foreground">Live on your website</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Draft Posts</CardTitle>
              <PenTool className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? <span className="animate-pulse">...</span> : stats.drafts}
              </div>
              <p className="text-xs text-muted-foreground">Waiting to be published</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+21% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+10% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Views</CardTitle>
              <CardDescription>Monthly view statistics for your blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={viewsData}
                index="name"
                categories={["value"]}
                colors={["primary"]}
                valueFormatter={(value) => `${value} views`}
                className="h-[300px]"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Post Categories</CardTitle>
              <CardDescription>Distribution of posts by category</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart
                data={categoryData}
                index="name"
                categories={["value"]}
                colors={["primary", "secondary", "accent", "muted", "destructive"]}
                valueFormatter={(value) => `${value}%`}
                className="h-[300px]"
              />
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>Your most recently created blog posts</CardDescription>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/admin/blog">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Post
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : recentPosts.length > 0 ? (
                recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {" • "}
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            post.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {post.status}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/blog?edit=${post.id}`}>
                          <PenTool className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No posts found</p>
                  <Button className="mt-4" asChild>
                    <Link href="/admin/blog">Create your first post</Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/admin/blog">View All Posts</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

