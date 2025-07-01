import React from "react";
import { ContainerScroll } from "@/components/container-scroll-animation";
import projects from "../../../data/website-projects.json";
import Image from "next/image";

const Page = ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
         <div className="flex flex-col overflow-hidden pb-[500px]"
         >
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {project.headingLine1} <br />
              <span
                className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none bg-gradient-to-r from-purple-800 via-pink-500 to-indigo-600 text-transparent bg-clip-text"
              >
                {project.headingLine2}
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    );
};

export default Page;
