import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Globe, Instagram } from "lucide-react"
import { notFound } from "next/navigation"
import services  from "../../data/services.json"
import { FAQ } from "@/components/ui/Faqs"

type Service = {
  slug: string
  title: string
  description: string
  heroImage: string
  overview: string
  benefits: string[]
  process: { title: string; description: string }[]
  caseStudies: { title: string; client: string; description: string; image: string }[]
  faq: { question: string; answer: string }[]
  icon: React.ReactNode // <-- Add this line
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = (services as Service[]).find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const ServiceIcon = () => <>{service.icon}</>

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient"
              style={{
          background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 81%)",
        }}>
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
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm w-fit">Overview</div>
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
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Some of our Our Best Work in {service.title}</h2>
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

      <FAQ faqs={service.faq}/>

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
            {(services as Service[])
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

