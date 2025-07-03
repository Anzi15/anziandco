import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FooterCta from "@/components/ui/FooterCta"
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
import { FAQ } from "@/components/ui/Faqs"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-24"
        style={{
          background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 81%)",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our <span className="italic">Services</span>
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
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "SEO | Search Engine Optimization",
                description: "Improve your website's visibility and ranking on search engines.",
                features: [
                  "Keyword research and analysis",
                  "On-page optimization",
                  "Technical SEO audits",
                  "Link building strategies",
                  "Local SEO services",
                ],
                link: "/services/seo",
              }
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
              image: "/realtor.jpg",
              description: "Specialized digital marketing solutions for realtors and property management companies.",
              link: "/industries/real-estate",
              },
              {
              title: "Interior Designer",
              image: "/interior designer.jpg",
              description: "Tailored strategies for interior designers, furniture brands, and home decor businesses.",
              link: "/industries/interior-designer",
              },
              {
              title: "Restaurants & Hospitality",
              image: "/restaurant.jpg",
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
                className="object-cover object-center"
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

      <FAQ faqs={[
  {
    question: "Can Anzi & Co help with social media account management?",
    answer: "Yes, Anzi & Co specializes in managing social media accounts to help increase your brand presence, engage your audience, and drive sales."
  },
  {
    question: "Do you offer custom website development?",
    answer: "Absolutely! We create custom websites tailored to your business needs, ensuring they are user-friendly, responsive, and optimized for SEO."
  },
  {
    question: "How can Anzi & Co help improve my email marketing campaigns?",
    answer: "We design and manage targeted email marketing campaigns to engage your audience effectively, increase conversions, and build customer loyalty."
  },
  {
    question: "What industries do you serve?",
    answer: "Anzi & Co works with a variety of industries including retail, real estate, education, e-commerce, and more. We tailor our services to meet the unique needs of each sector."
  },
  {
    question: "Is there a minimum contract period to work with Anzi & Co?",
    answer: "We offer flexible service packages with options for both short-term projects and long-term partnerships, depending on your business requirements."
  },
  {
    question: "How do I get started with Anzi & Co?",
    answer: "Simply contact us via our website or phone number to discuss your business needs, and we’ll guide you through the process of creating a customized digital marketing plan."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer continuous support and maintenance to ensure your digital marketing efforts stay effective and up to date."
  }
]} />

      {/* CTA */}
<FooterCta />
    </div>
  )
}

