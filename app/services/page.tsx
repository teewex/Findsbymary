import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Database, LineChart, PieChart, TrendingUp, Users } from "lucide-react"
import { IndustryTicker } from "@/components/industry-ticker"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen" id="services-top">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-pink-800 via-pink-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our Data <span className="text-primary">Services</span>
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Comprehensive data solutions to help your business identify root causes, address critical pain points,
                and drive efficiency through strategic insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Data Analytics</h3>
              <p className="mt-2 text-muted-foreground">
                Transform raw data into meaningful insights with our advanced analytics solutions. We help you
                understand patterns, trends, and correlations in your data to drive better business decisions.
              </p>
              <ul className="mt-4 space-y-2 flex-grow">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Descriptive and predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Customer behavior analysis</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Market trend identification</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Performance metrics and KPIs</span>
                </li>
              </ul>
              <Button
                className="mt-auto bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                asChild
              >
                <Link href="/contact?service=data-analytics">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <PieChart className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Data Visualization & BI</h3>
              <p className="mt-2 text-muted-foreground">
                Create compelling visual stories from your data and implement BI solutions that provide real-time
                insights. Our visualizations and dashboards make complex data accessible and actionable for all
                stakeholders.
              </p>
              <ul className="mt-4 space-y-2 flex-grow">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Interactive dashboards</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">BI tool implementation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Executive reporting</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data warehouse design</span>
                </li>
              </ul>
              <Button
                className="mt-auto bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                asChild
              >
                <Link href="/contact?service=data-visualization-bi">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Data Management</h3>
              <p className="mt-2 text-muted-foreground">
                Establish robust data governance frameworks and enhance data quality across your organization. We help
                you implement policies, procedures, and standards to ensure your data is accurate, consistent, and
                secure.
              </p>
              <ul className="mt-4 space-y-2 flex-grow">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data governance frameworks</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data quality assessment</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Master data management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data security and compliance</span>
                </li>
              </ul>
              <Button
                className="mt-auto bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                asChild
              >
                <Link href="/contact?service=data-management">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Data Strategy</h3>
              <p className="mt-2 text-muted-foreground">
                Develop a comprehensive data strategy aligned with your business objectives. We help you create a
                roadmap for leveraging data as a strategic asset to drive growth and competitive advantage.
              </p>
              <ul className="mt-4 space-y-2 flex-grow">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data maturity assessment</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Strategic roadmap development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data governance frameworks</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">ROI analysis for data initiatives</span>
                </li>
              </ul>
              <Button
                className="mt-auto bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                asChild
              >
                <Link href="/contact?service=data-strategy">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Process Improvement</h3>
              <p className="mt-2 text-muted-foreground">
                Identify inefficiencies and optimize your business processes using data-driven insights. We help you
                streamline operations, reduce costs, and improve quality through systematic analysis.
              </p>
              <ul className="mt-4 space-y-2 flex-grow">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Process mapping and analysis</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Bottleneck identification</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Workflow optimization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Continuous improvement frameworks</span>
                </li>
              </ul>
              <Button
                className="mt-auto bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                asChild
              >
                <Link href="/contact?service=process-improvement">Learn More</Link>
              </Button>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border shadow-sm h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-primary">Staff Augmentation</h3>
              <p className="mt-2 text-muted-foreground">
                Enhance your team with our expert data professionals who integrate seamlessly into your organization.
                Our specialists become an extension of your team, bringing specialized skills and knowledge to your
                projects.
              </p>
              <ul className="mt-4 space-y-2 flex-grow">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data analysts and scientists</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">BI developers and architects</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Data engineers and ETL specialists</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm">Project-based or long-term support</span>
                </li>
              </ul>
              <Button
                className="mt-auto bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
                asChild
              >
                <Link href="/contact?service=staff-augmentation">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Approach</h2>
              <p className="text-muted-foreground">
                At MaryFinds, we take a systematic, client-centered approach to every project. We believe in building
                long-term partnerships that deliver ongoing value to your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-3 text-primary-foreground font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Discovery</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your business objectives, challenges, and current data landscape.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-3 text-primary-foreground font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Assessment</h3>
                    <p className="text-muted-foreground">
                      We evaluate your data maturity, identify gaps, and pinpoint opportunities for improvement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-3 text-primary-foreground font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Strategy</h3>
                    <p className="text-muted-foreground">
                      We develop a tailored roadmap with clear milestones and deliverables aligned with your goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-3 text-primary-foreground font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Implementation</h3>
                    <p className="text-muted-foreground">
                      We execute the plan with a focus on quality, efficiency, and knowledge transfer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-3 text-primary-foreground font-bold shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Measurement</h3>
                    <p className="text-muted-foreground">
                      We track progress against KPIs and make adjustments to ensure optimal results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StockCake-Cybersecurity%20Network%20Protection_1742504696.jpg-Z6TsnPWuSfi6qjIpTfPte4KrCxHZJU.jpeg"
                alt="Cybersecurity network with padlock showing data protection"
                width={600}
                height={800}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Industries We Serve</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Our data expertise spans across multiple sectors
              </p>
            </div>
          </div>

          <IndustryTicker
            industries={[
              "Financial Services",
              "Healthcare",
              "Retail",
              "Manufacturing",
              "Technology",
              "Education",
              "Mortgage",
              "Transportation",
              "Logistics",
              "Insurance",
              "Pharmaceuticals",
              "Software",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-pink-900 to-background text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-[800px] mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Data?
            </h2>
            <p className="md:text-xl text-white/80">
              Schedule a free consultation to discuss how we can help you leverage your data for business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white transition-colors duration-300"
                asChild
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-colors duration-300"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

