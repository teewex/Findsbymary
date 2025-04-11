"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BarChart2, Database, GraduationCap, PieChart, Users, Heart, CheckCircle } from "lucide-react"
import { useState } from "react"
import { FloatingElements } from "@/components/floating-elements"
// Import the AnimatedValueCard at the top of the file
import { AnimatedValueCard } from "@/components/animated-value-card"

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced dark gradient */}
      <section id="home" className="py-20 md:py-28 bg-gradient-to-b from-pink-800 via-pink-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <FloatingElements />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6">
              Unlock Your Business Potential with Data-Driven Strategies
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              At MaryFinds, we specialize in helping businesses uncover root causes, tackle critical challenges, and
              enhance efficiency through strategic, data-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#contact">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced visual balance */}
      <section id="about" className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-center mb-16">
            <div className="lg:col-span-3 space-y-5">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-white/80">
                Founded with a mission to empower growing businesses to reach their full potential. We transform data
                into actionable insights. Originally a career coaching service, we've evolved into a comprehensive data
                consulting firm dedicated to enhancing efficiency and informed decision-making.
              </p>
              <p className="text-lg md:text-xl text-white/80">
                Our founder, Mary Irondi, is a seasoned data consultant with expertise in data analytics, business
                intelligence, and process improvement. Her diverse industry experience revealed a common challenge: many
                businesses struggle to harness their data's full potential.
              </p>
              <p className="text-lg md:text-xl text-white/80">
                Today, we collaborate with clients across various industries to optimize operations, reduce costs, and
                transform raw data into strategic assets that fuel growth and innovation.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <Image
                src="/images/mary-profile-new.png"
                alt="Mary Irondi - Founder of MaryFinds LLC"
                width={400}
                height={400}
                className="shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Our Values Section (moved from About page) */}
          <div className="mb-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Values</h2>
                <p className="max-w-[700px] text-white/80 md:text-lg">
                  The principles that guide our work and relationships
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedValueCard
                icon={<CheckCircle className="h-6 w-6 text-green-400" />}
                title="Data Integrity"
                description="We believe in the highest standards of data accuracy and reliability. Our solutions are built on a foundation of trustworthy data."
                delay={0}
              />
              <AnimatedValueCard
                icon={<CheckCircle className="h-6 w-6 text-green-400" />}
                title="Client Partnership"
                description="We work as an extension of your team, collaborating closely to understand your unique challenges and goals."
                delay={1}
              />
              <AnimatedValueCard
                icon={<CheckCircle className="h-6 w-6 text-green-400" />}
                title="Continuous Innovation"
                description="We stay at the forefront of data science and visualization techniques to deliver cutting-edge solutions."
                delay={2}
              />
              <AnimatedValueCard
                icon={<CheckCircle className="h-6 w-6 text-green-400" />}
                title="Knowledge Sharing"
                description="We believe in empowering our clients through education and skill development, not just delivering solutions."
                delay={3}
              />
              <AnimatedValueCard
                icon={<CheckCircle className="h-6 w-6 text-green-400" />}
                title="Actionable Insights"
                description="We focus on delivering insights that can be translated into concrete actions and measurable results."
                delay={4}
              />
              <AnimatedValueCard
                icon={<CheckCircle className="h-6 w-6 text-green-400" />}
                title="Ethical Data Use"
                description="We are committed to responsible data practices that respect privacy and promote transparency."
                delay={5}
              />
            </div>
          </div>

          {/* Assessment Section integrated into About */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Understanding Our Clients</h3>
              <p className="text-white/80">
                Our data analytics consulting services are rooted in a deep understanding of our clients' unique needs.
                Over the years, we've identified four distinct client categories:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-pink-900/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-light text-primary mb-4">1</div>
              <h3 className="text-xl font-bold text-primary mb-3">Unaware</h3>
              <p className="text-white/70 flex-grow">
                Businesses that recognize they have data but are uncertain how to leverage it effectively. They're at
                the beginning of their data journey.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-pink-900/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-light text-primary mb-4">2</div>
              <h3 className="text-xl font-bold text-primary mb-3">Data Fanatic</h3>
              <p className="text-white/70 flex-grow">
                Organizations already using data to transform their business operations and seeking to refine and
                enhance their existing data strategies.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-pink-900/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-light text-primary mb-4">3</div>
              <h3 className="text-xl font-bold text-primary mb-3">Curious</h3>
              <p className="text-white/70 flex-grow">
                Businesses that recognize their data's potential value but need guidance on how to extract meaningful
                insights and implement data-driven strategies.
              </p>
            </div>

            <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-pink-900/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-light text-primary mb-4">4</div>
              <h3 className="text-xl font-bold text-primary mb-3">Aware</h3>
              <p className="text-white/70 flex-grow">
                Forward-thinking organizations enthusiastic about data and ready to invest in advanced analytics for
                comprehensive business insights and strategic advantage.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/80 max-w-3xl mx-auto">
              No matter which category you identify with, MaryFinds has tailored solutions to meet you where you are and
              help you advance your data journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Services</h2>
            <p className="max-w-[700px] text-white/80 md:text-lg">
              Comprehensive Data Solutions Tailored to Your Business Needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-sm hover:shadow-lg transition-shadow float-animation service-card-glow">
              <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Data Analytics Strategy</h3>
              <p className="mt-2 text-white/70">
                Develop a comprehensive data analytics roadmap aligned with your business objectives. We help you create
                strategic frameworks to leverage data as a competitive advantage and drive informed decision-making
                across your organization.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-sm hover:shadow-lg transition-shadow float-animation float-animation-delay-1 service-card-glow">
              <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Data Management</h3>
              <p className="mt-2 text-white/70">
                Establish robust data governance frameworks and enhance data quality across your organization. We help
                you implement policies, procedures, and standards to ensure your data is accurate, consistent, secure,
                and compliant with regulations.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-sm hover:shadow-lg transition-shadow float-animation float-animation-delay-2 service-card-glow">
              <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Business Intelligence</h3>
              <p className="mt-2 text-white/70">
                Transform complex data into actionable insights through powerful data visualization and reporting
                solutions. We design intuitive dashboards and interactive reports that enable stakeholders at all levels
                to understand trends, identify opportunities, and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentorship" className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Growth Through Mentorship
              </h2>
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-green-400" />
              </div>
              <p className="text-white/80 md:text-lg">
                At MaryFinds, we are passionate about fostering growth and development through mentorship and
                collaborations with partners and vendors.
              </p>
              <p className="text-white/80 md:text-lg">
                "I believe in the adage, 'We rise by lifting others.' I welcome opportunities for both giving and
                receiving one-on-one or corporate coaching in career guidance."
              </p>
              <p className="text-white/80 md:text-lg italic">- Mary Irondi, Founder</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-pink-900/20 shadow-sm hover:shadow-lg transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-primary">Individual Mentorship</h3>
                <p className="mt-2 text-white/70 flex-grow">
                  One-on-one guidance for professionals at all career stages looking to advance their skills in data
                  analytics, business intelligence, and strategic decision-making.
                </p>
                <Button
                  className="mt-4 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                  asChild
                >
                  <a href="#contact">Learn More</a>
                </Button>
              </div>

              <div className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-pink-900/20 shadow-sm hover:shadow-lg transition-shadow h-full">
                <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-primary">Corporate Partnerships</h3>
                <p className="mt-2 text-white/70 flex-grow">
                  Collaborative relationships with organizations to develop data-driven cultures, implement best
                  practices, and foster innovation through knowledge sharing.
                </p>
                <Button
                  className="mt-4 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                  asChild
                >
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 bg-secondary/30">
        <div className="container max-w-[800px] px-4 mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Contact Us</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Does your company have a project that requires data analytics expertise? We'd love to hear from you.
                Let's discuss how we can help drive your business forward with data-driven insights.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-pink-900/20 shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You!</h3>
                  <p className="text-white/80">Your message has been received. We'll get back to you shortly.</p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="bg-background/20 border-pink-800/30 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/20 border-pink-800/30 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      required
                      className="bg-background/20 border-pink-800/30 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

