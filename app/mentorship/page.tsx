import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, GraduationCap } from "lucide-react"

export default function MentorshipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Professional <span className="text-primary">Mentorship</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Advance your career with personalized guidance from industry experts with real-world experience in data
                analytics, business intelligence, and project management.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Apply for Mentorship</Link>
              </Button>
            </div>
            <div className="relative lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mentorship Session"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Mentor */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mary Irondi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Your Mentor</h2>
              <p className="text-muted-foreground">
                Mary Irondi is a seasoned professional with over 10 years of experience in business analysis, project
                management, and data consulting. With an MBA and certifications including PMP, CSPO, and CSM, Mary has
                worked with leading organizations like Fannie Mae and Capital One.
              </p>
              <p className="text-muted-foreground">
                As a Senior Business Analyst and Project Manager, Mary has led numerous successful projects in data
                analytics, business intelligence implementation, and process improvement. Her expertise spans multiple
                industries, giving her a unique perspective on how data can drive business success.
              </p>
              <p className="text-muted-foreground">
                Mary is passionate about helping professionals advance their careers through practical, hands-on
                mentorship that focuses on real-world applications of data skills and business acumen.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Data Analytics</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Project Management</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Business Analysis</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Agile Methodologies</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Process Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mentorship Programs</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Tailored guidance to help you achieve your career goals
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Career Starter</h3>
              <p className="mt-2 text-muted-foreground flex-grow">
                For early-career professionals looking to build a strong foundation in data analytics and business
                intelligence. Learn essential skills and best practices to launch your career.
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Monthly 1:1 coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Resume and portfolio review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Interview preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Skill development roadmap</span>
                </li>
              </ul>
              <Button className="mt-auto" asChild>
                <Link href="/contact?program=career-starter">Apply Now</Link>
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full border-primary">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Professional Growth</h3>
              <div className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full w-fit mb-2">
                Most Popular
              </div>
              <p className="mt-2 text-muted-foreground flex-grow">
                For mid-career professionals seeking to advance to senior roles. Develop advanced data analysis skills,
                project management expertise, and leadership capabilities.
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Bi-weekly 1:1 coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Personalized career strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Leadership skill development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Project-based learning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Certification guidance</span>
                </li>
              </ul>
              <Button className="mt-auto" asChild>
                <Link href="/contact?program=professional-growth">Apply Now</Link>
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Executive Coaching</h3>
              <p className="mt-2 text-muted-foreground flex-grow">
                For senior professionals and executives looking to leverage data for strategic decision-making. Develop
                a data-driven leadership approach and organizational strategy.
              </p>
              <ul className="space-y-2 my-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Weekly 1:1 executive coaching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Strategic data leadership</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Organizational transformation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Executive presence development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Board preparation</span>
                </li>
              </ul>
              <Button className="mt-auto" asChild>
                <Link href="/contact?program=executive-coaching">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Hear from professionals who have advanced their careers through our mentorship programs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Mentee"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">James Wilson</h3>
                  <p className="text-sm text-muted-foreground">Data Analyst → Senior Data Scientist</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Mary's mentorship was transformative for my career. Her guidance helped me develop advanced analytics
                skills and the confidence to pursue a senior role. Within 6 months of working with her, I secured a
                promotion with a 30% salary increase."
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Mentee"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Sophia Chen</h3>
                  <p className="text-sm text-muted-foreground">Business Analyst → Project Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Working with Mary helped me bridge the gap between business analysis and project management. Her
                practical advice and PMP certification guidance were invaluable. I'm now leading major data
                implementation projects at my company."
              </p>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Mentee"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Marcus Johnson</h3>
                  <p className="text-sm text-muted-foreground">Recent Graduate → Data Analyst</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a recent graduate, I was struggling to break into the data field. Mary's Career Starter program gave
                me the practical skills and portfolio projects I needed. With her help, I landed my first data analyst
                role at a Fortune 500 company."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mentorship Process</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                A structured approach to help you achieve your career goals
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-primary-foreground font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Initial Assessment</h3>
              <p className="mt-2 text-muted-foreground">
                We begin with a comprehensive assessment of your current skills, experience, and career goals to create
                a personalized development plan.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-primary-foreground font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Goal Setting</h3>
              <p className="mt-2 text-muted-foreground">
                Together, we establish clear, measurable goals and milestones for your professional development and
                career advancement.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-primary-foreground font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Regular Coaching</h3>
              <p className="mt-2 text-muted-foreground">
                Scheduled one-on-one sessions provide guidance, feedback, and practical advice tailored to your specific
                challenges and opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-primary-foreground font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Ongoing Support</h3>
              <p className="mt-2 text-muted-foreground">
                Between sessions, you'll have access to resources, assignments, and email support to help you implement
                what you've learned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-[800px] mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Advance Your Career?
            </h2>
            <p className="md:text-xl">
              Take the first step toward achieving your professional goals with personalized mentorship from industry
              experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Apply for Mentorship</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/contact">Schedule a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

