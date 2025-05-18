import Image from "next/image";
import React from "react";

interface Brand {
  imageSrc: string;
  lightImageSrc: string;
  altText: string;
  link: string;
}

const brandsData: Brand[] = [
  {
    imageSrc: "logo1 (1).png",
    lightImageSrc: "logo1 (1).png",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc: "logo1 (3).png",
    lightImageSrc: "logo1 (3).png",
    altText: "brand3",
    link: "#",
  },
  {
    imageSrc: "logo1 (4).png",
    lightImageSrc: "logo1 (4).png",
    altText: "brand4",
    link: "#",
  },
  {
    imageSrc: "logo1 (6).png",
    lightImageSrc: "logo1 (6).png",
    altText: "brand6",
    link: "#",
  },
  {
    imageSrc: "logo1 (7).png",
    lightImageSrc: "logo1 (7).png",
    altText: "brand7",
    link: "#",
  },
  {
    imageSrc: "logo1 (8).png",
    lightImageSrc: "logo1 (8).png",
    altText: "brand8",
    link: "#",
  },
];

export default function BrandsWeWorkWith() {
  return (
    <section className="bg-white py-4 dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">

              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SingleImageProps {
  brand: Brand;
}

const SingleImage: React.FC<SingleImageProps> = ({ brand }) => {
  const { link, imageSrc, lightImageSrc, altText } = brand;

  return (
    <a
      href={link}
      className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
      <Image src={imageSrc} width={100} height={100} alt="Best digital marketing agency | Website design"/>
    </a>
  );
};
