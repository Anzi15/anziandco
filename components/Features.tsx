import { cn } from "@/lib/utils";
import {
  IconWorld,
  IconPaint,
  IconBrandFacebook,
  IconMail,
  IconMessages,
  IconDeviceAnalytics,
  IconBrandCashapp,
  IconRocket,
} from "@tabler/icons-react";
import { ReactNode } from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

export function FeaturesSectionWithHoverEffects() {
  const features: Omit<FeatureProps, "index">[] = [
    {
      title: "Website Development",
      description:
        "Struggling with a slow or outdated website that drives visitors away? We create fast, modern sites that impress and convert.",
      icon: <IconWorld />,
    },
    {
      title: "Graphic Designing",
      description:
        "Is your brand failing to stand out? Our bold, memorable designs make sure you leave a lasting impression.",
      icon: <IconPaint />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Wasting time posting with no results? We craft content and campaigns that grow your audience and boost engagement.",
      icon: <IconBrandFacebook />,
    },
    {
      title: "Email & SMS Marketing",
      description:
        "Can't reach your customers effectively? Our targeted messaging gets your offers in front of the right people—at the right time.",
      icon: <IconMail />,
    },
    {
      title: "Customer Support",
      description:
        "Feel abandoned after paying for a service? We provide reliable, ongoing support so you're never left in the dark.",
      icon: <IconMessages />,
    },
    {
      title: "Performance Analytics",
      description:
        "Not sure if your marketing is working? We track everything and show you exactly what’s driving results (and what’s not).",
      icon: <IconDeviceAnalytics />,
    },
    {
      title: "Affordable Packages",
      description:
        "Tired of overpriced agencies with underwhelming results? We deliver real value without breaking your budget.",
      icon: <IconBrandCashapp />,
    },
    {
      title: "One-Stop Digital Partner",
      description:
        "Juggling multiple freelancers for one project? We handle everything—so you can focus on growing your business.",
      icon: <IconRocket />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {/* Gradient Hover Overlay */}
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:text-purple-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
