import React from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import BrandsWeWorkWith from "@/components/BrandsWeWorkWith";
import CaseStudiesGroup from "@/components/CaseStudiesGroup";

const page = () => {
  return (
    <main>
      <section>
        <div className="w-full pt-20 lg:pt-40">
          <div className="container mx-auto py-0">
            <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">$2M in revenue last year</Badge>
                </div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-6xl max-w-lg tracking-tighter text-left font-regular">
                    See How Businesses Like Yours Are Growing with Us
                  </h1>
                  <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                    See how businesses like yours turned ambition into results
                    with Anzi & Co. From more leads to better branding, these
                    success stories show what happens when you choose a team
                    that puts you first. Ready to write your own?
                  </p>
                </div>
                {/* <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Link>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
              </Link>
            </div> */}
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-muted rounded-md aspect-square">
                  <Image
                    src={
                      "Premium Vector _ Businessman hand holding a book and light bulb.jpg"
                    }
                    alt="Custom Website Design"
                    width={500}
                    height={500}
                    className="rounded-md object-cover h-full object-left"
                  />
                </div>
                <div className="bg-muted rounded-md row-span-2">
                  <Image
                    src={"What Is a Digital Marketing Strategy_.jpg"}
                    alt="Digital Marketing"
                    width={500}
                    height={100}
                    className="rounded-md object-cover h-full"
                  />
                </div>
                <div className="bg-muted rounded-md aspect-square">
                  <Image
                    src={"blue website.png"}
                    alt="Custom Website Design"
                    width={500}
                    height={500}
                    className="rounded-md object-cover h-full object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-20">
        <BrandsWeWorkWith />
      </section>

<section className="container mx-auto py-20 flex justify-center items-center w-full text-center">
  <div className="max-w-3xl">
    <h2 className="text-2xl font-bold mb-8">
      No matter what service you’re looking for — SEO, PPC, web design, social media, email marketing, or anything else — we’ve got you covered. Check out our portfolio to learn how our digital marketing solutions drive results for clients!
    </h2>
  </div>
</section>

<CaseStudiesGroup />
    </main>
  );
};

export default page;
