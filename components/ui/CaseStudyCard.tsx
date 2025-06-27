import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export interface CaseStudyCardProps {
  brandName: string
  growthPercentage?: number
  growthType?: string
  engagementRate?: number
  tags: string[]
  backgroundColor?: string
  backgroundImage?: string
  slug: string
}

export default function CaseStudyCard({
  brandName,
  growthPercentage,
  growthType,
  tags,
  backgroundColor,
  backgroundImage,
  slug
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`}>
      <div
        className="relative h-80 w-full rounded-[30px] overflow-hidden aspect-[1/1] max-w-[30rem] my-4"
        style={{
          backgroundColor: backgroundColor || "#000",
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-6">
          <div>
            <h3 className="text-white text-lg font-semibold">{brandName}</h3>
          </div>

          <div className="space-y-4">
            {growthPercentage && (
              <div>
                <p className="text-white text-4xl font-bold">+{growthPercentage}%</p>
                <p className="text-white uppercase tracking-wide text-xs font-medium">
                  {growthType}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-4 py-1 text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
