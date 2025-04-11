"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getBlogPostBySlug } from "@/lib/supabase"

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      try {
        if (!params.slug) {
          router.push("/blog")
          return
        }

        const fetchedPost = await getBlogPostBySlug(params.slug)

        if (fetchedPost) {
          setPost(fetchedPost)
        } else {
          // If post not found, try to fetch from mock data
          // This is just for demo purposes
          const mockPosts = [
            {
              id: 1,
              title: "5 Data Visualization Trends for 2023",
              excerpt:
                "Explore the latest trends in data visualization and how they can enhance your business reporting.",
              content: `
              <p>Data visualization continues to evolve rapidly, with new techniques and tools emerging to help businesses make sense of their data. In 2023, we're seeing several exciting trends that are transforming how organizations present and interact with their data.</p>
              
              <h2>1. Interactive Storytelling</h2>
              <p>Static charts and graphs are giving way to interactive narratives that guide users through data insights. These interactive stories allow users to explore data points, drill down into details, and understand the context behind the numbers.</p>
              
              <h2>2. Real-time Visualization</h2>
              <p>With the increasing need for up-to-the-minute information, real-time data visualization is becoming essential. Dashboards that update automatically as new data comes in help businesses respond quickly to changing conditions.</p>
              
              <h2>3. AI-Enhanced Visualizations</h2>
              <p>Artificial intelligence is playing a growing role in data visualization, from suggesting the most appropriate chart types to automatically identifying and highlighting anomalies or trends that might otherwise go unnoticed.</p>
              
              <h2>4. Immersive 3D Visualizations</h2>
              <p>As virtual and augmented reality technologies mature, we're seeing more immersive 3D visualizations that allow users to literally step inside their data and interact with it in three-dimensional space.</p>
              
              <h2>5. Accessibility-Focused Design</h2>
              <p>There's a growing emphasis on making data visualizations accessible to all users, including those with visual impairments or color blindness. This includes using appropriate color contrasts, providing alternative text descriptions, and designing with inclusivity in mind.</p>
              
              <p>By embracing these trends, businesses can create more engaging, informative, and actionable data visualizations that drive better decision-making across their organizations.</p>
            `,
              slug: "data-visualization-trends",
              featured_image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
              created_at: "2023-06-12T00:00:00Z",
              author: "Mary Irondi",
            },
            {
              id: 2,
              title: "Comparing Top Business Intelligence Tools",
              excerpt:
                "An in-depth comparison of leading BI tools to help you choose the right one for your business needs.",
              content: `
              <p>Selecting the right Business Intelligence (BI) tool is crucial for organizations looking to leverage their data effectively. With numerous options available in the market, it can be challenging to determine which solution best fits your specific needs.</p>
              
              <h2>Power BI</h2>
              <p><strong>Strengths:</strong> Microsoft's Power BI excels in its integration with other Microsoft products, making it a natural choice for organizations already invested in the Microsoft ecosystem. It offers robust data visualization capabilities, an intuitive interface, and competitive pricing.</p>
              <p><strong>Limitations:</strong> Some advanced analytics features require coding knowledge, and very large datasets can sometimes impact performance.</p>
              
              <h2>Tableau</h2>
              <p><strong>Strengths:</strong> Tableau is renowned for its powerful visualization capabilities and user-friendly drag-and-drop interface. It handles large datasets well and offers excellent data exploration features.</p>
              <p><strong>Limitations:</strong> It can be more expensive than some competitors, and some users find the learning curve steeper than expected.</p>
              
              <h2>Looker</h2>
              <p><strong>Strengths:</strong> Looker's unique approach centers around its LookML modeling language, which provides a consistent way to define metrics and relationships. It excels in creating a single source of truth for organizations.</p>
              <p><strong>Limitations:</strong> Requires more technical expertise to set up and maintain, and pricing can be on the higher end.</p>
              
              <h2>Qlik Sense</h2>
              <p><strong>Strengths:</strong> Qlik's associative engine allows users to explore data relationships in ways that other tools don't support. It offers strong data governance features and handles complex data models well.</p>
              <p><strong>Limitations:</strong> The interface can feel less intuitive to new users, and customization sometimes requires specialized knowledge.</p>
              
              <h2>Domo</h2>
              <p><strong>Strengths:</strong> Domo is a cloud-native platform with excellent collaboration features and a wide range of pre-built connectors. Its mobile experience is among the best in the industry.</p>
              <p><strong>Limitations:</strong> Some users report limitations in customization options, and costs can escalate with additional features.</p>
              
              <p>When choosing a BI tool, consider factors such as your existing technology stack, the technical expertise of your team, specific visualization needs, scalability requirements, and budget constraints. Many vendors offer free trials, which can be invaluable in assessing how well a tool meets your organization's unique needs.</p>
            `,
              slug: "bi-tools-comparison",
              featured_image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
              created_at: "2023-05-28T00:00:00Z",
              author: "Mary Irondi",
            },
            {
              id: 3,
              title: "The Art of Data-Driven Decision Making",
              excerpt: "Learn how to build a culture of data-driven decision making in your organization.",
              content: `
              <p>In today's business landscape, data-driven decision making has evolved from a competitive advantage to a fundamental necessity. Organizations that effectively leverage data consistently outperform their peers in productivity, profitability, and innovation.</p>
              
              <h2>What is Data-Driven Decision Making?</h2>
              <p>Data-driven decision making is the process of making organizational decisions based on actual data rather than intuition or observation alone. It involves collecting data, extracting patterns and facts from that data, and utilizing those facts to make inferences that influence decision-making.</p>
              
              <h2>Building a Data-Driven Culture</h2>
              <p>Creating a truly data-driven organization requires more than just tools and technologies—it demands a cultural shift. Here are key strategies for fostering this culture:</p>
              
              <h3>1. Lead by Example</h3>
              <p>Leadership must demonstrate commitment to data-driven approaches by consistently using data in their own decision-making processes and communicating the value of this approach throughout the organization.</p>
              
              <h3>2. Democratize Data Access</h3>
              <p>Make relevant data accessible to employees at all levels, not just analysts or executives. This might involve implementing self-service analytics tools that allow non-technical users to explore data independently.</p>
              
              <h3>3. Invest in Data Literacy</h3>
              <p>Provide training and resources to help employees understand how to interpret and use data effectively. This includes basic statistical concepts, data visualization principles, and critical thinking skills for evaluating data quality.</p>
              
              <h3>4. Establish Clear Metrics</h3>
              <p>Define key performance indicators (KPIs) that align with strategic objectives, and ensure these metrics are consistently tracked and reported. This creates a common language for discussing performance and progress.</p>
              
              <h3>5. Embrace Experimentation</h3>
              <p>Encourage a test-and-learn approach where hypotheses are formulated, tested with data, and used to inform decisions. This includes being comfortable with "failing fast" when the data doesn't support initial assumptions.</p>
            `,
              slug: "data-driven-decision-making",
              featured_image:
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
              created_at: "2023-04-15T00:00:00Z",
              author: "Mary Irondi",
            },
          ]

          const foundPost = mockPosts.find((p) => p.slug === params.slug)
          if (foundPost) {
            setPost(foundPost)
          } else {
            // If not found in mock data either, redirect to blog listing
            router.push("/blog")
          }
        }
      } catch (error) {
        console.error("Error fetching blog post:", error)
        router.push("/blog")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [params.slug, router])

  if (isLoading) {
    return (
      <div className="container py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/#blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Featured Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src={post.featured_image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container px-4 md:px-6 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2">{post.title}</h1>
            <div className="flex items-center text-white/80 text-sm">
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" className="mb-8 flex items-center gap-2" asChild>
            <Link href="/#blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Share this post</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

