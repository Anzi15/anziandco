import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Globe, Instagram } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const services = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "Custom, responsive websites designed to convert visitors into customers.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    heroImage: "/placeholder.svg?height=600&width=1200&text=Website+Development",
    overview:
      "Our website development services focus on creating custom, responsive websites that not only look great but are also optimized for conversions. We combine stunning design with strategic user experience to ensure your website effectively communicates your brand message and drives business results.",
    benefits: [
      "Increased online visibility and brand awareness",
      "Improved user experience leading to higher conversion rates",
      "Mobile-responsive design for all devices",
      "SEO-friendly architecture for better search rankings",
      "Fast loading speeds for reduced bounce rates",
      "Secure and reliable hosting solutions",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We start by understanding your business, goals, target audience, and competitors to create a strategic plan for your website.",
      },
      {
        title: "Design",
        description:
          "Our designers create wireframes and mockups that align with your brand identity and business objectives.",
      },
      {
        title: "Development",
        description:
          "Our developers build your website using the latest technologies and best practices for performance and security.",
      },
      {
        title: "Testing",
        description:
          "We thoroughly test your website across different devices and browsers to ensure a seamless user experience.",
      },
      {
        title: "Launch",
        description:
          "Once approved, we launch your website and provide training on how to manage and update your content.",
      },
      {
        title: "Maintenance",
        description:
          "We offer ongoing maintenance and support to ensure your website remains secure, up-to-date, and performing optimally.",
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Website Redesign",
        client: "Fashion Boutique",
        description:
          "Redesigned an outdated e-commerce website, resulting in a 75% increase in online sales and a 40% reduction in cart abandonment.",
        image: "/placeholder.svg?height=300&width=500&text=Case+Study+1",
      },
      {
        title: "Corporate Website Development",
        client: "Financial Services Firm",
        description:
          "Developed a professional corporate website with advanced functionality, improving lead generation by 60% and reducing bounce rate by 35%.",
        image: "/placeholder.svg?height=300&width=500&text=Case+Study+2",
      },
    ],
    faq: [
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline varies depending on the complexity of the project. A simple website might take 4-6 weeks, while a more complex e-commerce site could take 8-12 weeks or more.",
      },
      {
        question: "Do you provide website hosting?",
        answer: "Yes, we offer secure and reliable hosting solutions as part of our website development packages.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "All our websites are built with responsive design, ensuring they look and function perfectly on all devices.",
      },
      {
        question: "Can I update the website content myself?",
        answer:
          "Yes, we build our websites on user-friendly content management systems (CMS) that allow you to easily update content without technical knowledge.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Strategic social media campaigns to build your brand and engage your audience.",
    icon: <Instagram className="h-10 w-10 text-primary" />,
    heroImage: "/placeholder.svg?height=600&width=1200&text=Social+Media+Marketing",
    overview:
      "Our social media marketing services help businesses build a strong online presence, engage with their target audience, and drive meaningful results through strategic campaigns. We create and manage content that resonates with your audience, builds brand awareness, and generates leads.",
    benefits: [
      "Increased brand awareness and recognition",
      "Enhanced customer engagement and loyalty",
      "Targeted advertising to reach your ideal customers",
      "Valuable insights into customer preferences and behavior",
      "Improved website traffic and lead generation",
      "Competitive advantage in your industry",
    ],
    process: [
      {
        title: "Strategy Development",
        description:
          "We create a customized social media strategy based on your business goals, target audience, and industry.",
      },
      {
        title: "Content Creation",
        description:
          "Our creative team develops engaging content that resonates with your audience and reflects your brand voice.",
      },
      {
        title: "Platform Management",
        description:
          "We manage your social media platforms, posting content consistently and responding to audience interactions.",
      },
      {
        title: "Community Building",
        description: "We focus on growing your follower base and fostering meaningful connections with your audience.",
      },
      {
        title: "Paid Advertising",
        description:
          "We create and manage targeted ad campaigns to reach specific audience segments and achieve your goals.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "We track performance metrics and provide regular reports with insights and recommendations for optimization.",
      },
    ],
    caseStudies: [
      {
        title: "Brand Awareness Campaign",
        client: "Startup Tech Company",
        description:
          "Developed and executed a social media strategy that increased followers by 200% and engagement by 150% within three months.",
        image: "/placeholder.svg?height=300&width=500&text=Case+Study+1",
      },
      {
        title: "Lead Generation Campaign",
        client: "Professional Services Firm",
        description:
          "Created targeted social media ads that generated 120+ qualified leads and resulted in 15 new clients within two months.",
        image: "/placeholder.svg?height=300&width=500&text=Case+Study+2",
      },
    ],
    faq: [
      {
        question: "Which social media platforms should my business be on?",
        answer:
          "It depends on your target audience and business goals. We'll help you identify the platforms where your audience is most active and focus our efforts there.",
      },
      {
        question: "How often should we post on social media?",
        answer:
          "Posting frequency varies by platform, but consistency is key. We'll develop a content calendar that ensures regular posting without overwhelming your audience.",
      },
      {
        question: "How do you measure the success of social media marketing?",
        answer:
          "We track key metrics such as engagement rate, follower growth, website traffic, lead generation, and conversion rate, aligning these with your specific business goals.",
      },
      {
        question: "Do you handle social media advertising?",
        answer:
          "Yes, we create and manage targeted social media ad campaigns to help you reach specific audience segments and achieve your marketing objectives.",
      },
    ],
  },
  // Additional services would be defined here
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const ServiceIcon = () => service.icon

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-secondary p-2">
              <ServiceIcon />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {service.title}
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">{service.description}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button size="lg" className="font-medium">
                Get a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-xl">
                <Image
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Overview</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What We Offer</h2>
              <p className="text-gray-500 md:text-xl">{service.overview}</p>

              <ul className="space-y-4 mt-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Our streamlined process ensures we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Success Stories</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Case Studies</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              See how we've helped businesses like yours achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.caseStudies.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md">
                <div className="relative aspect-[5/3]">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{caseStudy.title}</h3>
                  <p className="text-primary font-medium mb-2">Client: {caseStudy.client}</p>
                  <p className="text-gray-500 mb-4">{caseStudy.description}</p>
                  <Button asChild variant="outline">
                    <Link href="/portfolio">View Full Case Study</Link>
                  </Button>
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
              Find answers to common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.faq.map((item, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                  <p className="text-gray-500">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Explore More</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Related Services</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Discover other ways we can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== params.slug)
              .slice(0, 3)
              .map((relatedService, index) => (
                <Card key={index} className="service-card border-none shadow-md hover:shadow-xl transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-secondary">{relatedService.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-gray-500 mb-4">{relatedService.description}</p>
                    <Link
                      href={`/services/${relatedService.slug}`}
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

      {/* CTA */}
      <section className="py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Discuss Your Project?</h2>
            <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
              Contact us today to learn how our {service.title.toLowerCase()} services can help you achieve your
              business goals.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Let's Discuss Your Project</Link>
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

