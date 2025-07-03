import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full md:px-8">
      {/* Top CTA Section */}
      <div className="bg-[#f0ebff] px-6 py-12 md:py-16 lg:px-12 rounded-3xl">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                See how we can help your business grow with <span className="italic">
                   digital solutions
                  </span>
              </h2>
            </div>
            <div className="flex flex-col items-end gap-4">
              <p className="text-sm text-right lg:max-w-[70%]">Ready to speak with a specialized expert? Give us a ring</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <FaWhatsapp />
                <Link href="https://api.whatsapp.com/send/?phone=923248226367&text=Hey%2C+just+got+your+number+from+your+website+can+you+help+with+me...&type=phone_number&app_absent=0" className="flex items-center gap-2 text-lg font-medium animated-underline justify-end">
                +92-324-8226367
                </Link>
              </div>
              <Button className="bg-black text-white hover:bg-black/90 rounded-md px-6 h-auto hover:bg-purple-700 py-3">
                GET A FREE AUDIT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Custom divider with curve */}
          <div className="mt-16 relative">
            <div className="w-full h-px bg-gray-300/50"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-[#f0ebff] rounded-b-full -mt-4"></div>
          </div>

          {/* Partners Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-12">
            <div>
              <p className="text-sm font-bold mb-6">A PARTNER, NOT A VENDOR</p>
              <div className="flex flex-wrap gap-8">
                <img
                  src="/google-cloud-partner.svg"
                  alt="Google Cloud Partner"
                  className="h-8 w-auto"
                />
                <img
                  src="/google-partner-1.svg"
                  alt="Google Partner"
                  className="h-8 w-auto"
                />
                <img
                  src="/meta-partner-1.svg"
                  alt="Meta Partner"
                  className="h-8 w-auto"
                />
                <img
                  src="/shopify-partner.svg"
                  alt="Shopify Partner"
                  className="h-8 w-auto"
                />
                <img
                  src="/tiktok-partner.svg"
                  alt="TikTok Partner"
                  className="h-8 w-auto"
                />
                {/* ... leave unchanged */}
              </div>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold">6.7</p>
              <p className="text-sm">/ Average ROAS</p>
              <p className="text-sm mt-2">across our 33+ Global Clients</p>
              <p className="text-sm">on SEO, PPC & Social</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-gray-50 px-6 py-12 lg:px-12 rounded-3xl mt-[-2rem]">
        <div className="container mx-auto">
          <h3 className="text-sm font-bold mb-8">SOLUTIONS</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6">
            <Link href="#" className="text-sm font-medium animated-underline w-fit ">
              UI/UX Design
            </Link>
            <Link href="#" className="text-sm font-medium animated-underline w-fit">
              Web Development
            </Link>
            <Link href="#" className="text-sm font-medium animated-underline w-fit">
              Social Media Marketing
            </Link>
            <Link href="#" className="text-sm font-medium animated-underline w-fit">
              Search Engine Optimization
            </Link>
            <Link href="#" className="text-sm font-medium animated-underline w-fit">
              Brand Guideline
            </Link>
            <Link href="#" className="text-sm font-medium animated-underline w-fit">
              Mobile App Development
            </Link>
            <Link href="#" className="text-sm font-medium animated-underline w-fit">
              Google Business Profile
            </Link>
            <Link href="#" className="text-sm font-medium animated-underline w-fit">
              Conversion Rate Optimization
            </Link>
          </div>

          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex flex-wrap justify-center gap-12 mb-12">
              <Link href="#" className="text-sm animated-underline">
                About
              </Link>
              <Link href="#" className="text-sm animated-underline">
                Blog
              </Link>
              <Link href="#" className="text-sm animated-underline">
                Careers
              </Link>
              <Link href="#" className="text-sm animated-underline">
                Team
              </Link>
              <Link href="#" className="text-sm animated-underline">
                Success Stories
              </Link>
              <Link href="#" className="text-sm animated-underline">
                Awards
              </Link>
              <Link href="#" className="text-sm animated-underline">
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm">
                © 2025 Anzi &. CO
                <span className="mx-3">|</span>
                <Link href="/terms-conditions" className="animated-underline">
                  Terms & Conditions
                </Link>
                <span className="mx-3">|</span>
                <Link href="/privacy-policy" className="animated-underline">
                  Privacy Policy
                </Link>
                <span className="mx-3">|</span>
                <Link href="/refund-policy" className="animated-underline">
                  Refund Policy
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <Link href="http://instagram.com/anziandco" target="_blank" aria-label="Instagram" className="text-2xl hover:text-purple-500 transition-colors">
                  <RiInstagramFill />
                </Link>
                <Link href="https://x.com/anziandco" aria-label="X" target="_blank" className="text-2xl hover:text-purple-500 transition-colors">
                 <BsTwitterX/>
                </Link>
                <Link href="https://www.facebook.com/anziandco/" target="_blank" aria-label="Facebook" className="text-2xl hover:text-purple-500 transition-colors">
                 <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
