import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="text-primary">MaryFinds</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                We're a data consulting firm focused on helping businesses unlock their full potential through data
                analytics, strategic solutions, and in-depth analysis to address critical pain points.
              </p>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team working on data analysis"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Image and placeholder completely removed */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our Story</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                MaryFinds was founded with a clear mission: to empower growing businesses with actionable insights
                derived from their data. What began as a career coaching service has evolved into a comprehensive data
                consulting firm focused on driving efficiency and informed decision-making.
              </p>
              <p className="text-muted-foreground">
                Our founder, Mary Irondi, brings extensive experience as data Consultant with expertise in data
                analytics, business intelligence, and process improvement. With her various industry experience, Mary
                recognized that many businesses were struggling to leverage their data effectively. Drawing on her
                background working with large, small, as well as global organizations, she assembled a team of experts
                dedicated to providing strategic data-driven solutions.
              </p>
              <p className="text-muted-foreground">
                Today, we work with clients across industries to optimize operations, reduce costs, and transform raw
                data into strategic assets that drive growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                The principles that guide our work and relationships
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Data Integrity</h3>
              <p className="mt-2 text-muted-foreground">
                We believe in the highest standards of data accuracy and reliability. Our solutions are built on a
                foundation of trustworthy data.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Client Partnership</h3>
              <p className="mt-2 text-muted-foreground">
                We work as an extension of your team, collaborating closely to understand your unique challenges and
                goals.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Continuous Innovation</h3>
              <p className="mt-2 text-muted-foreground">
                We stay at the forefront of data science and visualization techniques to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Knowledge Sharing</h3>
              <p className="mt-2 text-muted-foreground">
                We believe in empowering our clients through education and skill development, not just delivering
                solutions.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Actionable Insights</h3>
              <p className="mt-2 text-muted-foreground">
                We focus on delivering insights that can be translated into concrete actions and measurable results.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Ethical Data Use</h3>
              <p className="mt-2 text-muted-foreground">
                We are committed to responsible data practices that respect privacy and promote transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
              <p className="md:text-lg">
                We're always looking for talented individuals who are passionate about data and helping businesses
                succeed.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="h-12 w-12 text-green-400" />
                <div>
                  <h3 className="font-bold text-xl">Current Openings</h3>
                  <p>Data Analyst | Business Intelligence Developer | Data Visualization Specialist</p>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Maturity Assessment */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Where Do You Stand in Data For Your Business?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Assess your enterprise's data maturity level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-6xl font-light text-gray-300 mb-4">1</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Unaware</h3>
              <p className="text-muted-foreground flex-grow">
                I know I have data but I am still trying to figure out what to do with it.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-6xl font-light text-gray-300 mb-4">2</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Data Fanatic</h3>
              <p className="text-muted-foreground flex-grow">
                I am already using my data to transform my business and want to know how it can be improved.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-6xl font-light text-gray-300 mb-4">3</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Curious</h3>
              <p className="text-muted-foreground flex-grow">
                I understand my data has potential, but I don't know how to tap into the potential.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-6xl font-light text-gray-300 mb-4">4</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Aware</h3>
              <p className="text-muted-foreground flex-grow">
                I love data and I am ready to leverage it for deep insights.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/contact">Consult Data Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

