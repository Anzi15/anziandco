import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import { FiHeart, FiStar, FiSmile, FiSun } from "react-icons/fi";
import { LuSparkles, LuCloud } from "react-icons/lu";
import { BsFlower1, BsStars } from "react-icons/bs";

import services from "./data/services.json";
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
  Star,
  Facebook,
  Phone,
  MapPin,
} from "lucide-react";
import TiltWrapper from "@/components/TiltWrapper";
import AnimatedTextHeroSection from "@/components/AnimatedTextHeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import ScrollingStarSection from "@/components/WorldClassDeveloper";
import InfoTabs from "@/components/InfoTabs";
import VideoTestimonial from "@/components/VideoTestimonial";
import BrandsWeWorkWith from "@/components/BrandsWeWorkWith";
import { FeaturesSectionWithHoverEffects } from "@/components/Features";
import { GradientButton } from "@/components/ui/GradeintButton";
import ScrollVelocity from "@/components/ui/MovingTextScript";
import BlogCard from "@/components/ui/BlogCard";
import BlogSuggestions from "@/components/BlogSuggestions";
import StatsSection from "@/components/ui/Stats";

export default function Home() {
  const iconsMap = {
    Globe,
    Instagram,
    PenTool,
    BarChart,
    Mail,
    MessageSquare,
    Users,
    Lightbulb,
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Elevate Your Digital <span className="gradient-text">Presence</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We help brands, businesses and everything in between, <b>
                  grow digitally</b> through strategic digital marketing, stunning web design, and results-driven
                  campaigns.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={"/consultation"} passHref>
                <Button size="lg" className="font-medium">
                  Get a Free Consultation
                </Button>
                </Link>

                <Link href={"/portfolio"} passHref>
                <Button size="lg" variant="outline" className="font-medium">
                  View Our Work
                </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex -space-x-2">
                  {["https://i.ibb.co/gL25X3Lv/image.png", "https://i.ibb.co/Y48PpN30/image.png", "https://i.ibb.co/FLTFM22p/image.png", "https://i.ibb.co/0VBXTTpS/image.png"].map((img, i) => (
                    <div key={i} className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-background">
                      <Image
                        src={img}
                        alt="Client"
                        width={32}
                        height={32}
                        className="object-cover w-full aspect-square "
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">100+</span> satisfied clients
                </div>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">

              <div className="relative w-full  overflow-hidden rounded-xl select-none">
                <Image
                  src="/cover resized.png"
                  alt="Digital Marketing"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>

              {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">"...I wish i met you guys before"</p>
              </div> 
            </div>
          </div>
        </div>
      </section> */}

      <AnimatedTextHeroSection />

      <ScrollVelocity
        texts={["Grow your", "Business digitally"]}
        velocity={50}
        className="custom-scroll-text"
      />

      <WhatWeDo />

      {/* Why Choose Us */}

      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/annie-spratt-QckxruozjRg-unsplash-min.jpg"
                  alt="Why Choose Anzi & Co."
                  width={600}
                  height={600}
                  className="object-cover w-full aspect-square"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm w-fit">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Your Success Is Our Priority
              </h2>
              <p className="text-gray-500 md:text-xl">
                At Anzi & Co., you're more than a client, you're our partner.
                your success is our success. We are committed to delivering
                results that exceed your expectations.
              </p>

              <ul className="space-y-4 mt-4">
                {[
                  "Customized strategies tailored to your specific business goals",
                  "Transparent reporting and communication throughout the process",
                  "Dedicated team of experts with years of industry experience",
                  "Data-driven approach to maximize your ROI",
                  "Continuous optimization to stay ahead of industry trends",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4 py-4">
                <GradientButton>Learn More</GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Comprehensive Digital Solutions
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              We offer a full range of digital marketing services to help your
              business grow and succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Website Development",
                description:
                  "Custom, responsive websites designed to convert visitors into customers.",
                link: "/services/website-development",
              },
              {
                icon: <Instagram className="h-10 w-10 text-primary" />,
                title: "Social Media Marketing",
                description:
                  "Strategic social media campaigns to build your brand and engage your audience.",
                link: "/services/social-media-marketing",
              },
              {
                icon: <PenTool className="h-10 w-10 text-primary" />,
                title: "Graphic Design",
                description:
                  "Eye-catching visuals that communicate your brand message effectively.",
                link: "/services/graphic-design",
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Digital Marketing",
                description:
                  "SEO, PPC, and content marketing strategies to drive qualified traffic.",
                link: "/services/digital-marketing",
              },
              {
                icon: <Mail className="h-10 w-10 text-primary" />,
                title: "Email Marketing",
                description:
                  "Targeted email campaigns that nurture leads and drive conversions.",
                link: "/services/email-marketing",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "SMS Marketing",
                description:
                  "Direct and effective SMS campaigns with high open and response rates.",
                link: "/services/sms-marketing",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Lead Generation",
                description:
                  "Strategies to attract and convert high-quality leads for your business.",
                link: "/services/lead-generation",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Business Strategy",
                description:
                  "Expert consultation to help you develop and implement effective business strategies.",
                link: "/services/business-strategy",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="service-card border-none shadow-md hover:shadow-xl transition-all"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-secondary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>
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

          <div className="flex justify-center mt-12">
            <Link href="/services">
              <GradientButton>View All Services</GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Don't just take our word for it. Here's what our clients have to say about working with Anzi & Co.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                company: "Retail Solutions Inc.",
                image: "/placeholder.svg?height=80&width=80&text=SJ",
                quote:
                  "Anzi & Co. transformed our online presence completely. Our website traffic has increased by 200% and our leads have doubled since working with them.",
              },
              {
                name: "Michael Chen",
                company: "Tech Innovations",
                image: "/placeholder.svg?height=80&width=80&text=MC",
                quote:
                  "The team at Anzi & Co. is incredibly knowledgeable and responsive. They've helped us navigate the complex world of digital marketing with ease.",
              },
              {
                name: "Emily Rodriguez",
                company: "Sunshine Realty",
                image: "/placeholder.svg?height=80&width=80&text=ER",
                quote:
                  "As a realtor, my online presence is crucial. Anzi & Co. has helped me stand out in a competitive market with their tailored marketing strategies.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 overflow-hidden rounded-full mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section> */}
      {/* <TestimonialSliders /> */}

      {/* Social Media Showcase */}
      {/* <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Social Media</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Follow Us on Social Media</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Stay updated with our latest projects, tips, and industry insights.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Social+${i}`}
                  alt={`Social Media Post ${i}`}
                  width={300}
                  height={300}
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">View Post</span>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center mt-12 space-x-4">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="https://instagram.com">
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="https://facebook.com">
                <Facebook className="h-5 w-5" />
                Follow on Facebook
              </Link>
            </Button>
          </div> */}
      {/* </div>
      </section>  */}

      <ScrollingStarSection />

      <section className="relative py-12 md:py-24 bg-white px-4 overflow-hidden">




  <div className="relative z-10 container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
        Testimonials
      </div>
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        What Our Clients Say
      </h2>
      <p className="max-w-[700px] text-gray-500 md:text-xl">
        Don't just take our word for it. Here's what our clients have to say about working with Anzi & Co.
      </p>
    </div>
  </div>

  <VideoTestimonial
    videos={[
  {
    id: "1",
    url: "https://www.youtube.com/watch?v=POogqVherBQ",
    thumbnail: "/mehran thumbnail.png",
    client: {
      name: "Mehran Dadbeh",
      company: "Mindthatseekstruth",
      position: "Founder",
    },
    quote: "I wish I met you guys before",
  }]}
    className="my-10"
  />
</section>

      <FeaturesSectionWithHoverEffects />
      {/* <BrandsWeWorkWith /> */}
      <BlogSuggestions />

      <StatsSection  />

      {/* <InfoTabs /> */}

      {/* Contact Form & CTA */}
      {/* <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm w-fit">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Grow Your Business?
              </h2>
              <p className="text-gray-500 md:text-xl">
                Fill out the form to get a free consultation and discover how
                Anzi & Co. can help you achieve your business goals.
              </p>

              <ul className="space-y-4 mt-4">
                {[
                  {
                    icon: <Phone className="h-5 w-5 text-primary" />,
                    text: "(123) 456-7890",
                    label: "Call us",
                  },
                  {
                    icon: <Mail className="h-5 w-5 text-primary" />,
                    text: "info@anziandco.com",
                    label: "Email us",
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-primary" />,
                    text: "123 Marketing St, Digital City, 10001",
                    label: "Visit us",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 p-2 bg-secondary rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className=" rounded-xl shadow-lg p-6 md:p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-medium">
                    Business Type
                  </label>
                  <Input id="business" placeholder="Your business type" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Get a Quote
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/terms-conditions"
                    className="text-primary hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
