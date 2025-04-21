import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Target, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About <span className="gradient-text">Anzi & Co.</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                We're a team of digital marketing experts passionate about helping businesses grow and succeed in the
                digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Our+Story"
                  alt="Our Story"
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg shadow-lg p-6 max-w-[200px] text-white">
                <div className="text-3xl font-bold">5+</div>
                <p className="text-sm mt-1">Years of excellence</p>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                From Humble Beginnings to Industry Leaders
              </h2>
              <p className="text-gray-500">
                Anzi & Co. was founded in 2018 with a simple mission: to help businesses navigate the complex digital
                landscape and achieve measurable results. What started as a small team of passionate marketers has grown
                into a full-service digital marketing agency serving clients across various industries.
              </p>
              <p className="text-gray-500">
                Our journey has been defined by our commitment to innovation, excellence, and client success. We've
                evolved our services and approaches to stay ahead of industry trends, but our core values remain the
                same: integrity, transparency, and results-driven strategies.
              </p>
              <p className="text-gray-500">
                Today, we're proud to be trusted by businesses of all sizes, from startups to established enterprises,
                helping them achieve their digital marketing goals and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Purpose</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mission, Vision & Values</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              The principles that guide everything we do at Anzi & Co.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-secondary">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-500">
                    To empower businesses with innovative digital marketing solutions that drive growth, enhance brand
                    visibility, and deliver measurable results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-secondary">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-500">
                    To be the most trusted digital marketing partner for businesses seeking sustainable growth and
                    digital excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-secondary">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <p className="text-gray-500">
                    Integrity, innovation, excellence, transparency, and client-centricity form the foundation of
                    everything we do.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Core Values</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">The Principles That Guide Us</h2>
              <p className="text-gray-500 md:text-xl">
                At Anzi & Co., our values aren't just words on a wall—they're the principles that guide our decisions,
                actions, and interactions every day.
              </p>

              <ul className="space-y-4 mt-4">
                {[
                  {
                    title: "Integrity",
                    description: "We operate with honesty and transparency in all our dealings.",
                  },
                  {
                    title: "Innovation",
                    description: "We constantly seek new and better ways to serve our clients.",
                  },
                  {
                    title: "Excellence",
                    description: "We strive for the highest standards in everything we do.",
                  },
                  {
                    title: "Client-Centricity",
                    description: "Our clients' success is our success.",
                  },
                  {
                    title: "Collaboration",
                    description: "We believe in the power of teamwork and partnership.",
                  },
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">{value.title}</h3>
                      <p className="text-gray-500">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Our+Values"
                  alt="Our Values"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Meet the Experts Behind Anzi & Co.
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Our talented team of digital marketing professionals is dedicated to helping your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "John Smith",
                position: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300&text=JS",
                bio: "With over 15 years of experience in digital marketing, John leads our team with vision and expertise.",
              },
              {
                name: "Emily Johnson",
                position: "Creative Director",
                image: "/placeholder.svg?height=300&width=300&text=EJ",
                bio: "Emily brings creative solutions to life with her innovative design approach and attention to detail.",
              },
              {
                name: "Michael Chen",
                position: "Head of SEO",
                image: "/placeholder.svg?height=300&width=300&text=MC",
                bio: "Michael's data-driven strategies have helped countless businesses improve their search rankings.",
              },
              {
                name: "Sarah Rodriguez",
                position: "Social Media Manager",
                image: "/placeholder.svg?height=300&width=300&text=SR",
                bio: "Sarah crafts engaging social media campaigns that connect brands with their target audiences.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Journey</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Milestones & Achievements</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              A look at our journey from inception to becoming a leading digital marketing agency.
            </p>
          </div>

          <div className="relative border-l border-gray-200 ml-3 md:ml-6 pl-6 md:pl-10 space-y-10">
            {[
              {
                year: "2018",
                title: "Founding of Anzi & Co.",
                description:
                  "Anzi & Co. was established with a focus on providing quality digital marketing services to small businesses.",
              },
              {
                year: "2019",
                title: "Expanded Service Offerings",
                description:
                  "Added web development and graphic design to our core services to provide more comprehensive solutions.",
              },
              {
                year: "2020",
                title: "First Major Client",
                description: "Secured our first enterprise client and expanded our team to meet growing demand.",
              },
              {
                year: "2021",
                title: "Industry Recognition",
                description: "Received our first industry award for excellence in digital marketing campaigns.",
              },
              {
                year: "2022",
                title: "Office Expansion",
                description:
                  "Moved to a larger office space and doubled our team size to better serve our growing client base.",
              },
              {
                year: "2023",
                title: "International Clients",
                description: "Started working with international clients, expanding our reach beyond local markets.",
              },
              {
                year: "Present",
                title: "Continued Growth & Innovation",
                description:
                  "Continuing to innovate and expand our services while maintaining our commitment to client success.",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 md:-left-14 mt-1.5">
                  <div className="h-6 w-6 rounded-full bg-primary border-4 border-white"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-500">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
              Partner with Anzi & Co. and take your business to new heights with our expert digital marketing solutions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

