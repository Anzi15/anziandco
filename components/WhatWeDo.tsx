import React from "react";
import { FaUsers, FaChartLine, FaBullhorn, FaHeart, FaRocket, FaDollarSign } from "react-icons/fa";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4 hover:shadow-lg transition duration-300">
    <div className="bg-purple-100 p-3 rounded-full w-fit">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhatWeDo: React.FC = () => {
  const services = [
    {
      icon: <FaUsers size={24} color="#7C3AED" />,
      title: "Better audiences",
      description:
        "Our proprietary solution leverages an in-house strategy that focuses on driving sales, resulting in generating more revenue. We target audiences that need the particular service or product.",
    },
    {
      icon: <FaChartLine size={24} color="#7C3AED" />,
      title: "Better analytics",
      description:
        "Our analytics solution leverages real-time data from the website to analyze customers and custom variables to build predictive models to drive growth — from the very first day.",
    },
    {
      icon: <FaBullhorn size={24} color="#7C3AED" />,
      title: "Better marketing",
      description:
        "Our marketing solution promises positive flow in revenue generation. We make a buzz in the market so that you succeed with your products or services.",
    },
    {
      icon: <FaHeart size={24} color="#7C3AED" />,
      title: "Better engagement",
      description:
        "We help you connect emotionally with your audience through tailored, impactful campaigns that build long-term loyalty.",
    },
    {
      icon: <FaRocket size={24} color="#7C3AED" />,
      title: "Better innovation",
      description:
        "Our cutting-edge solutions ensure your business remains ahead of the curve, adapting quickly to market trends and customer needs.",
    },
    {
      icon: <FaDollarSign size={24} color="#7C3AED" />,
      title: "Better returns",
      description:
        "Maximize your ROI with data-driven strategies and focused execution, ensuring every dollar you spend brings measurable results.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-lg text-gray-600 font-semibold uppercase">What We Do</h2>
        <h1 className="text-4xl font-bold mt-2">We solve digital challenges</h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Together, we help our clients achieve tangible, measurable results.
          Focused on business outcomes — we bring a unique set of expertise and skills to the party.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
