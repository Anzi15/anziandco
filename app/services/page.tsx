import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Instagram,
  PenTool,
  BarChart,
  Mail,
  MessageSquare,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Comprehensive digital marketing solutions tailored to help your business grow and succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Website Development",
                description: "Custom, responsive websites designed to convert visitors into customers.",
                features: [
                  "Responsive design for all devices",
                  "SEO-friendly architecture",
                  "Fast loading speeds",
                  "User-friendly navigation",
                  "Conversion-focused layouts",
                ],
                link: "/services/website-development",
              },
              {
                icon: <Instagram className="h-10 w-10 text-primary" />,
                title: "Social Media Marketing",
                description: "Strategic social media campaigns to build your brand and engage your audience.",
                features: [
                  "Platform-specific strategies",
                  "Content creation and curation",
                  "Community management",
                  "Paid social campaigns",
                  "Performance analytics",
                ],
                link: "/services/social-media-marketing",
              },
              {
                icon: <PenTool className="h-10 w-10 text-primary" />,
                title: "Graphic Design",
                description: "Eye-catching visuals that communicate your brand message effectively.",
                features: [
                  "Logo and brand identity design",
                  "Marketing materials",
                  "Social media graphics",
                  "Packaging design",
                  "Infographics and illustrations",
                ],
                link: "/services/graphic-design",
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Digital Marketing",
                description: "SEO, PPC, and content marketing strategies to drive qualified traffic.",
                features: [
                  "Search engine optimization (SEO)",
                  "Pay-per-click advertising (PPC)",
                  "Content marketing",
                  "Analytics and reporting",
                  "Conversion rate optimization",
                ],
                link: "/services/digital-marketing",
              },
              {
                icon: <Mail className="h-10 w-10 text-primary" />,
                title: "Email Marketing",
                description: "Targeted email campaigns that nurture leads and drive conversions.",
                features: [
                  "Email campaign strategy",
                  "List segmentation",
                  "Automated email sequences",
                  "A/B testing",
                  "Performance tracking",
                ],
                link: "/services/email-marketing",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "SMS Marketing",
                description: "Direct and effective SMS campaigns with high open and response rates.",
                features: [
                  "SMS campaign strategy",
                  "Automated text sequences",
                  "Two-way messaging",
                  "Compliance management",
                  "Response tracking",
                ],
                link: "/services/sms-marketing",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Lead Generation",
                description: "Strategies to attract and convert high-quality leads for your business.",
                features: [
                  "Lead magnet creation",
                  "Landing page optimization",
                  "Form and funnel design",
                  "Lead qualification",
                  "CRM integration",
                ],
                link: "/services/lead-generation",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Business Strategy",
                description: "Expert consultation to help you develop and implement effective business strategies.",
                features: [
                  "Market analysis",
                  "Competitive research",
                  "Growth strategy development",
                  "Business model optimization",
                  "Performance measurement",
                ],
                link: "/services/business-strategy",
              },
            ].map((service, index) => (
              <Card key={index} className="service-card border-none shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-full bg-secondary inline-flex">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Industry Solutions</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Tailored Solutions for Your Industry
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              We understand that different industries have unique challenges and requirements. That's why we offer
              specialized solutions for various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Real Estate",
                image: "/placeholder.svg?height=300&width=500&text=Real+Estate",
                description: "Specialized digital marketing solutions for realtors and property management companies.",
                link: "/industries/real-estate",
              },
              {
                title: "Automotive",
                image: "/placeholder.svg?height=300&width=500&text=Automotive",
                description: "Tailored strategies for car dealerships, auto repair shops, and car wash businesses.",
                link: "/industries/automotive",
              },
              {
                title: "Restaurants & Hospitality",
                image: "/placeholder.svg?height=300&width=500&text=Restaurants",
                description:
                  "Digital solutions to help restaurants and hospitality businesses attract and retain customers.",
                link: "/industries/restaurants",
              },
            ].map((industry, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md">
                <div className="relative aspect-[5/3]">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-gray-500 mb-4">{industry.description}</p>
                  <Button asChild variant="outline">
                    <Link href={industry.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How We Work</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Our streamlined process ensures we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, target audience, and current digital presence.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "Based on our findings, we develop a customized strategy tailored to your specific needs and objectives.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "Our team executes the strategy with precision, focusing on quality and attention to detail.",
              },
              {
                number: "04",
                title: "Optimization",
                description:
                  "We continuously monitor performance and make data-driven adjustments to maximize results.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to see results from digital marketing?",
                answer:
                  "Results vary depending on the service and your starting point. SEO typically takes 3-6 months to show significant results, while PPC and social media advertising can generate results more quickly.",
              },
              {
                question: "Do you offer customized packages?",
                answer:
                  "Yes, we create tailored packages based on your specific business needs and goals. We believe in personalized solutions rather than one-size-fits-all approaches.",
              },
              {
                question: "How do you measure success?",
                answer:
                  "We establish clear KPIs at the beginning of our engagement and provide regular reports tracking these metrics. Success metrics might include website traffic, conversion rates, lead generation, or revenue growth.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "We work with businesses of all sizes, from startups to established enterprises. We'll create a strategy that fits your budget and goals.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "While we work with clients across various industries, we have particular expertise in real estate, automotive, restaurants, healthcare, and e-commerce.",
              },
              {
                question: "How often will I receive reports on my campaigns?",
                answer:
                  "We provide monthly comprehensive reports, but you'll have access to real-time dashboards to monitor performance at any time. We also schedule regular check-in calls to discuss progress and strategy.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-500">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Elevate Your Digital Marketing?
            </h2>
            <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
              Contact us today to discuss how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

