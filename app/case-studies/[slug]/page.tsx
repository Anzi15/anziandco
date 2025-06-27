import { notFound } from "next/navigation";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import Image from "next/image";
import React from "react";
import StatsSection from "@/components/ui/ClientNumbers";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const q = query(
    collection(db, "case-studies"),
    where("slug", "==", params.slug)
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study does not exist.",
    };
  }

  const data = querySnapshot.docs[0].data();
  return {
    title: data.clientName || `Loved working with Anzi &. Co`,
    description:
      data.description ||
      `Anzi &. CO helped ${data.clientName} achieve their goals with ${data.servicesProvided[0]} services.`,
  };
}

const Page = async ({ params }: Props) => {
  const slug = params.slug;

  const q = query(collection(db, "case-studies"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    notFound();
  }

  const caseStudyData = querySnapshot.docs[0].data();

  return (
    <section>
      <div
        className="flex md:flex-row flex-col justify-between items-center gap-6 md:px-6 px-4 py-20 min-h-screen "
        style={{
          background: "linear-gradient(to bottom, #f5e6fc 0%, #fff 81%)",
        }}
      >
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          <h3 className="italic">{caseStudyData.title}</h3>
          <h1 className="md:text-6xl text-3xl text- font-bold ">
            {caseStudyData.growthPercentage}%+ {caseStudyData.growthType} Growth
          </h1>
          <p>{caseStudyData.problemStatement}</p>
        </div>
        <div className="flex md:w-1/2 w-full justify-center">
          <Image
            src={caseStudyData.coverImage}
            alt={caseStudyData.clientName}
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>

      <div>
        <div className="md:w-1/2 w-full mx-auto flex flex-col gap-4 px-4 py-10 pb-20">
          <h3 className="">About {caseStudyData.clientName}</h3>
          <p className="md:text-xl text-lg font-bold">
            {caseStudyData.clientIntro}
          </p>
        </div>
      </div>

      <div
        className="flex md:flex-row flex-col justify-between items-center md:px-6 px-4  pb-10 gap-6 "
      >
                <div className="flex md:w-1/2 w-full justify-center">
          <Image
            src={caseStudyData.galleryImages[0]}
            alt={caseStudyData.clientName}
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          <h3 className="md:text-3xl text-xl text- font-bold ">
            The Problem
          </h3>
          <p>{caseStudyData.problemStatement}</p>
        </div>

      </div>

      <div className="w-[90%] mx-auto flex gap-4 px-4 py-6 bg-[#f7f7fa] justify-center items-center rounded-xl">
        <h4>
            <span className="font-bold">
            Services Used: ‎ 
            </span>
            {caseStudyData.servicesProvided.map((service:string, index:number) => (
              <span key={index} className="text-[#4f4f4f]">
                {service}
                {index !== caseStudyData.servicesProvided.length - 1 && ", "}
              </span>
            ))}
            </h4>
      </div>

      <div className="py-10">


      <StatsSection 
        data={caseStudyData.impact}
/>        
        </div>
    </section>
  );
};

export default Page;
