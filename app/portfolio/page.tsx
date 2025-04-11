"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, LineChart, TrendingUp, Database } from "lucide-react"
import { PortfolioDetailModal, type PortfolioItem } from "@/components/portfolio-detail-modal"

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Portfolio items data
  const executiveDashboards: PortfolioItem[] = [
    {
      id: "exec-1",
      title: "Executive KPI Dashboard",
      description: "Real-time performance tracking for C-suite executives",
      fullDescription:
        "This Power BI executive dashboard delivers a high-level overview of business performance, combining financial metrics with operational efficiency indicators. It was designed to help senior leadership quickly assess profitability, job execution, and issue resolution across multiple operational sites.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "executive",
      technologies: ["Power BI", "SQL Server", "Azure", "DAX"],
      challenges: [
        "Multiple disconnected data sources across departments",
        "Need for real-time updates without impacting system performance",
        "Complex security requirements for sensitive financial data",
        "Mobile accessibility requirements for executives on the go",
      ],
      solutions: [
        "Implemented a centralized data warehouse with automated ETL processes",
        "Created a responsive dashboard with role-based access controls",
        "Developed custom KPI visualizations with drill-down capabilities",
        "Integrated predictive analytics for forecasting key metrics",
      ],
      results: [
        "Reduced executive reporting time by 75%",
        "Enabled data-driven decision making at leadership meetings",
        "Improved cross-departmental visibility and accountability",
        "Identified $1.2M in cost-saving opportunities in the first quarter",
      ],
    },
    {
      id: "exec-2",
      title: "Sales Performance Dashboard",
      description: "Comprehensive sales analytics and customer insights",
      fullDescription:
        "This Power BI Sales Dashboard provides a comprehensive view of revenue trends, customer profitability, product category performance, and geographic sales distribution. Designed for executive and sales leadership, it supports strategic decision-making by visualizing key insights such as margin performance, top customers, and product demand over time.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "executive",
      technologies: ["Power BI", "SQL Server", "R Integration", "Advanced DAX"],
      challenges: [
        "Complex sales data from multiple channels and regions",
        "Need for real-time sales performance monitoring",
        "Disparate data sources including CRM and ERP systems",
        "Requirements for both high-level KPIs and detailed drill-downs",
      ],
      solutions: [
        "Developed a unified data model for sales analytics",
        "Created interactive visualizations with filtering capabilities",
        "Implemented automated data refresh with incremental loading",
        "Designed mobile-optimized views for on-the-go access",
      ],
      results: [
        "Increased sales team productivity by 22%",
        "Improved forecast accuracy by 35%",
        "Enabled identification of cross-selling opportunities",
        "Supported geographic expansion decisions with data-driven insights",
      ],
    },
    {
      id: "exec-3",
      title: "Customer Attrition Dashboard",
      description: "Customer retention and risk analysis",
      fullDescription:
        "This dashboard provides a detailed analysis of customer attrition patterns, contract renewals, and at-risk accounts. It helps executives and account managers identify regions and customer segments with high attrition rates, understand the financial impact of customer churn, and implement targeted retention strategies.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      category: "executive",
      technologies: ["Power BI", "Predictive Analytics", "CRM Integration", "Statistical Modeling"],
      challenges: [
        "Identifying early warning signs of customer attrition",
        "Quantifying the financial impact of customer churn",
        "Analyzing complex contract and renewal data",
        "Developing actionable insights for retention strategies",
      ],
      solutions: [
        "Implemented predictive models for attrition risk scoring",
        "Created interactive visualizations for regional and category analysis",
        "Developed automated alerts for high-risk customers",
        "Designed financial impact calculators for retention planning",
      ],
      results: [
        "Reduced customer attrition by 18%",
        "Increased contract renewal rates by 15%",
        "Improved account team responsiveness to at-risk customers",
        "Generated $3.2M in preserved revenue through targeted retention efforts",
      ],
    },
  ]

  const financialAnalysis: PortfolioItem[] = [
    {
      id: "fin-1",
      title: "Financial Performance",
      description: "Comprehensive financial analytics for executives",
      fullDescription:
        "This Power BI dashboard provides a comprehensive view of financial performance for XYZ Store during the year 2021. It tracks sales trends, product group performance, cost analysis, and profitability across supervisors and suppliers. Built with executives and category managers in mind, it highlights key revenue drivers and cost contributors using dynamic visualizations and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "financial",
      technologies: ["Power BI", "SQL Server", "Azure Analysis Services", "AI Insights"],
      challenges: [
        "Complex financial data from multiple systems",
        "Need for both high-level KPIs and detailed analysis",
        "Requirements for supplier performance tracking",
        "Integration of AI-powered insights for trend identification",
      ],
      solutions: [
        "Developed a comprehensive financial data model",
        "Created interactive visualizations with drill-down capabilities",
        "Implemented AI algorithms for anomaly detection and trend analysis",
        "Designed supplier impact analysis tools",
      ],
      results: [
        "Improved financial decision-making speed by 40%",
        "Identified key revenue drivers and cost-saving opportunities",
        "Enhanced supplier negotiations with data-driven insights",
        "Provided clear visibility into profitability by product and region",
      ],
    },
    {
      id: "fin-2",
      title: "Revenue Analysis",
      description: "Multi-dimensional revenue tracking",
      fullDescription:
        "A comprehensive analysis of revenue streams by product, region, customer segment, and time period with trend analysis and forecasting. This solution enables finance teams to identify growth opportunities and optimize pricing strategies.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      category: "financial",
      technologies: ["Microsoft Power BI", "SQL Server", "Azure Analysis Services", "DAX"],
      challenges: [
        "Complex revenue attribution across multiple channels",
        "Need for real-time revenue tracking with historical comparisons",
        "Integration of data from CRM, ERP, and billing systems",
        "Currency conversion and regional reporting requirements",
      ],
      solutions: [
        "Developed a unified data model for revenue attribution",
        "Created interactive visualizations with drill-down capabilities",
        "Implemented automated data integration with validation checks",
        "Designed customizable reporting for different stakeholder needs",
      ],
      results: [
        "Identified 15% revenue leakage that was subsequently recovered",
        "Improved forecast accuracy by 28%",
        "Reduced monthly close reporting time by 3 days",
        "Enabled data-driven pricing decisions that increased margins by 5%",
      ],
    },
    {
      id: "fin-3",
      title: "Expense Management",
      description: "Cost tracking and optimization",
      fullDescription:
        "This dashboard provides a detailed analysis of expense patterns, budget variances, and cost optimization opportunities across departments and expense categories. It helps finance teams and department managers monitor spending, identify cost-saving opportunities, and improve budget adherence.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
      category: "financial",
      technologies: ["Power BI", "ERP Integration", "Forecasting Models", "Budget Analysis"],
      challenges: [
        "Disparate expense data from multiple systems",
        "Complex approval workflows and budget structures",
        "Need for real-time spending alerts and notifications",
        "Requirements for trend analysis and forecasting",
      ],
      solutions: [
        "Developed a unified expense data model",
        "Created interactive visualizations for budget vs. actual analysis",
        "Implemented automated alerts for budget exceptions",
        "Designed trend analysis and forecasting tools",
      ],
      results: [
        "Reduced operational expenses by 12%",
        "Improved budget adherence across departments",
        "Identified recurring cost-saving opportunities",
        "Enhanced expense approval efficiency by 30%",
      ],
    },
  ]

  const mortgageAnalysis: PortfolioItem[] = [
    {
      id: "mort-1",
      title: "Mortgage Pipeline Analysis",
      description: "End-to-end mortgage application tracking",
      fullDescription:
        "This Power BI Mortgage Dashboard provides real-time insights into the mortgage application pipeline, financial milestones, processing timelines, and loan product trends. Built for lenders, operations teams, and executives, this tool tracks end-to-end application performance while surfacing critical bottlenecks in the loan lifecycle.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      category: "mortgage",
      technologies: ["Power BI", "SQL Server", "Pipeline Analytics", "Process Mining"],
      challenges: [
        "Complex multi-stage mortgage application process",
        "Need for real-time pipeline visibility and bottleneck identification",
        "Integration with loan origination systems and financial platforms",
        "Requirements for both operational and executive views",
      ],
      solutions: [
        "Developed a comprehensive pipeline tracking system",
        "Created interactive visualizations for application status monitoring",
        "Implemented automated alerts for stalled applications",
        "Designed executive summaries with drill-down capabilities",
      ],
      results: [
        "Reduced loan processing time by 35%",
        "Improved application completion rates by 28%",
        "Enhanced team accountability with agent-level metrics",
        "Provided clear visibility into pipeline health and forecasting",
      ],
    },
    {
      id: "mort-2",
      title: "Mortgage Portfolio Performance",
      description: "Loan performance and risk analysis",
      fullDescription:
        "A comprehensive analysis of mortgage portfolio performance, including delinquency rates, prepayment speeds, and risk factors across different loan segments. This solution helps mortgage servicers identify at-risk loans and optimize portfolio management strategies.",
      image: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=2071&auto=format&fit=crop",
      category: "mortgage",
      technologies: ["Power BI", "SQL Server", "Python", "Statistical Modeling"],
      challenges: [
        "Large portfolio with diverse loan characteristics",
        "Need for early warning indicators of delinquency",
        "Complex risk factors affecting loan performance",
        "Regulatory reporting requirements",
      ],
      solutions: [
        "Developed predictive models for delinquency risk",
        "Created interactive dashboards for portfolio monitoring",
        "Implemented loan segmentation for targeted interventions",
        "Designed automated reporting for regulatory compliance",
      ],
      results: [
        "Reduced delinquency rates by 15% through early intervention",
        "Improved loss mitigation effectiveness by 22%",
        "Enhanced portfolio valuation accuracy",
        "Streamlined regulatory reporting process",
      ],
    },
    {
      id: "mort-3",
      title: "Mortgage Market Analysis",
      description: "Housing market and interest rate trends",
      fullDescription:
        "This dashboard provides comprehensive analysis of housing market trends, interest rate movements, and competitive landscape for mortgage lenders. It helps executives and product teams make informed decisions about product offerings, pricing strategies, and market expansion opportunities.",
      image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=2073&auto=format&fit=crop",
      category: "mortgage",
      technologies: ["Power BI", "Market Data APIs", "Predictive Analytics", "Geospatial Analysis"],
      challenges: [
        "Integration of multiple external market data sources",
        "Complex relationships between economic indicators and mortgage activity",
        "Need for regional market analysis and comparison",
        "Requirements for trend forecasting and scenario planning",
      ],
      solutions: [
        "Developed automated data pipelines for market data integration",
        "Created interactive visualizations for regional market analysis",
        "Implemented predictive models for market trend forecasting",
        "Designed competitive analysis tools for product positioning",
      ],
      results: [
        "Improved market timing for product launches",
        "Enhanced pricing strategy based on competitive analysis",
        "Supported successful expansion into high-opportunity markets",
        "Increased market share by 3.5% through data-driven strategies",
      ],
    },
  ]

  const supplyChain: PortfolioItem[] = [
    {
      id: "supply-1",
      title: "Inventory Optimization",
      description: "Comprehensive inventory management and analysis",
      fullDescription:
        "This interactive Power BI dashboard was designed to help supply chain and inventory teams monitor inventory performance, control costs, and optimize stock levels across product categories. The dashboard provides a real-time snapshot of critical metrics, aging inventory, and turnover rates to support timely decision-making.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      category: "supply",
      technologies: ["Power BI", "Inventory Management Systems", "Statistical Analysis", "Forecasting Models"],
      challenges: [
        "Large product catalog with varying demand patterns",
        "Multiple warehouses and distribution centers",
        "Seasonal demand fluctuations",
        "Need for real-time inventory visibility and cost control",
      ],
      solutions: [
        "Developed comprehensive inventory analytics framework",
        "Created interactive visualizations for inventory monitoring",
        "Implemented ABC analysis for inventory segmentation",
        "Designed automated alerts for stock issues and aging inventory",
      ],
      results: [
        "Reduced inventory carrying costs by 18%",
        "Improved inventory turnover by 25%",
        "Decreased stockouts by 30%",
        "Enhanced cash flow through optimized inventory levels",
      ],
    },
    {
      id: "supply-2",
      title: "Operations Performance",
      description: "Call center and agent productivity tracking",
      fullDescription:
        "This Power BI dashboard was developed to provide operational leaders with a detailed view of call center performance, focusing on agent productivity, handling times, and service efficiency. The dashboard tracks both individual agent activity and overall call center metrics to improve performance monitoring, workforce planning, and customer satisfaction.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
      category: "supply",
      technologies: ["Power BI", "Call Center Systems", "Workforce Management", "Process Analytics"],
      challenges: [
        "Complex call center data from multiple systems",
        "Need for real-time agent performance monitoring",
        "Requirements for both individual and team-level metrics",
        "Integration with workforce management systems",
      ],
      solutions: [
        "Developed a comprehensive call center analytics framework",
        "Created interactive visualizations for agent performance monitoring",
        "Implemented automated alerts for service level issues",
        "Designed workforce optimization tools for scheduling and staffing",
      ],
      results: [
        "Improved agent productivity by 22%",
        "Reduced average handling time by 15%",
        "Enhanced customer satisfaction scores by 18%",
        "Optimized staffing levels resulting in 12% cost savings",
      ],
    },
    {
      id: "supply-3",
      title: "Logistics Network Analysis",
      description: "Route optimization and cost analysis",
      fullDescription:
        "A data-driven analysis of transportation routes, delivery times, and logistics costs with recommendations for network optimization and cost reduction. This solution helps organizations streamline their logistics operations and improve delivery performance.",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
      category: "supply",
      technologies: ["GIS Mapping", "Route Optimization Algorithms", "Tableau", "Python"],
      challenges: [
        "Complex network with multiple origins and destinations",
        "Varying transportation modes and costs",
        "Delivery time constraints",
        "Fuel price volatility",
      ],
      solutions: [
        "Implemented network optimization models",
        "Created interactive maps for route visualization",
        "Developed cost models for transportation mode selection",
        "Designed scenario analysis tools for network planning",
      ],
      results: [
        "Reduced transportation costs by 15%",
        "Improved on-time delivery performance by 20%",
        "Decreased carbon emissions through optimized routing",
        "Enhanced network resilience to disruptions",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-pink-800 via-pink-900 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Explore our data visualization and analytics projects across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="executive" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
                <TabsTrigger value="executive" className="text-xs md:text-sm">
                  Executive Dashboards
                </TabsTrigger>
                <TabsTrigger value="financial" className="text-xs md:text-sm">
                  Financial Analysis
                </TabsTrigger>
                <TabsTrigger value="mortgage" className="text-xs md:text-sm">
                  Mortgage Analysis
                </TabsTrigger>
                <TabsTrigger value="supply" className="text-xs md:text-sm">
                  Supply Chain
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Executive Dashboard */}
            <TabsContent value="executive">
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BarChart2 className="h-8 w-8 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Executive Dashboards</h2>
                  <p className="text-muted-foreground max-w-3xl">
                    Comprehensive executive dashboards that provide a high-level overview of key performance indicators,
                    business metrics, and strategic insights for leadership teams.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {executiveDashboards.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.fullDescription
                            ? item.fullDescription.substring(0, 120) + "..."
                            : "A comprehensive dashboard providing real-time insights into company-wide KPIs, financial performance, and strategic goal progress."}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                          onClick={() => handleViewDetails(item)}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Financial Analysis */}
            <TabsContent value="financial">
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <TrendingUp className="h-8 w-8 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Financial Analysis</h2>
                  <p className="text-muted-foreground max-w-3xl">
                    Detailed financial analytics and visualizations that help organizations understand their financial
                    health, identify trends, and make data-driven financial decisions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {financialAnalysis.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.fullDescription
                            ? item.fullDescription.substring(0, 120) + "..."
                            : "A comprehensive analysis of financial data providing insights into performance, trends, and opportunities for optimization."}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                          onClick={() => handleViewDetails(item)}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Mortgage Analysis */}
            <TabsContent value="mortgage">
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <LineChart className="h-8 w-8 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Mortgage Analysis</h2>
                  <p className="text-muted-foreground max-w-3xl">
                    Specialized analytics for mortgage lenders, servicers, and real estate professionals to optimize
                    lending operations, risk management, and portfolio performance.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mortgageAnalysis.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.fullDescription
                            ? item.fullDescription.substring(0, 120) + "..."
                            : "A detailed analysis providing insights into mortgage performance, market trends, and optimization opportunities."}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                          onClick={() => handleViewDetails(item)}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Supply Chain & Logistics */}
            <TabsContent value="supply">
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Database className="h-8 w-8 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Supply Chain & Operations</h2>
                  <p className="text-muted-foreground max-w-3xl">
                    Advanced analytics solutions for optimizing supply chain operations, inventory management,
                    logistics, and operational efficiency.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {supplyChain.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-60">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.fullDescription
                            ? item.fullDescription.substring(0, 120) + "..."
                            : "A comprehensive solution for optimizing supply chain operations and improving efficiency across the logistics network."}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                          onClick={() => handleViewDetails(item)}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-pink-900 to-background text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-[800px] mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Data?
            </h2>
            <p className="md:text-xl text-white/80">
              Let's discuss how we can create custom data visualizations and analytics solutions for your specific
              business needs.
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

      {/* Portfolio Detail Modal */}
      <PortfolioDetailModal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
    </div>
  )
}

