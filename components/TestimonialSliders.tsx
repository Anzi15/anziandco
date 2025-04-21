"use client"

import { Card, Carousel } from "flowbite-react";

export function TestimonialSliders() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Testimonials</div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl">
          Don't just take our word for it. Here's what our clients have to say about working with Anzi & Co.
        </p>
      </div>
      <Carousel>
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
          <div key={index} className="flex flex-col items-center justify-center p-4">
            <Card className="p-4 text-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className="w-20 h-20 mx-auto rounded-full"
              />
              <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
              <p className="mt-4 text-lg italic">"{testimonial.quote}"</p>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
