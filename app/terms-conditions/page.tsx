"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <div
      className="min-h-screen py-20 px-4 md:px-6"
      style={{
        background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 40%)",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Please read these Terms and Conditions ("Terms", "Terms and
            Conditions") carefully before using the Anzi & Co. website and our
            services. These terms outline your legal rights, responsibilities,
            and obligations as a visitor, user, or customer.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="prose lg:prose-lg max-w-none p-6">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website, interacting with our content, or using
              any of our services, you signify your acceptance of these Terms &
              Conditions and agree to comply with all applicable local and
              international laws. If you disagree with any part of these terms,
              you must discontinue the use of our services immediately.
            </p>

            <h2>2. Our Services</h2>
            <p>
              Anzi & Co. is a global digital agency offering services including
              but not limited to web design & development, branding, digital
              marketing, SEO, content creation, and e-commerce solutions. Learn
              more on our{" "}
              <Link href="/services" className="text-blue-600 underline">
                Services
              </Link>{" "}
              page.
            </p>

            <h2>3. Global User Responsibilities</h2>
            <p>
              Whether you’re a client from North America, Europe, Asia, or any
              other region, you agree to provide true, current, and complete
              information. You are responsible for maintaining the
              confidentiality of your data and for all activities that occur
              under your usage.
            </p>

            <h2>4. Intellectual Property Rights</h2>
            <p>
              All content on this website—including text, graphics, logos,
              images, code, and branding—is the exclusive property of Anzi & Co.
              or its partners and is protected by international copyright,
              trademark, and other laws. Unauthorized use or reproduction is
              strictly prohibited.
            </p>

            <h2>5. Payments & Billing</h2>
            <p>
              Payment terms will be defined in individual contracts or invoices.
              Unless otherwise agreed upon, all services require an upfront
              deposit. We accept local and international payments via
              authorized payment gateways. Delayed or incomplete payments may
              result in service suspension or legal proceedings.
            </p>

            <h2>6. Third-Party Tools & Integrations</h2>
            <p>
              Some features may include tools or APIs from third-party services.
              You acknowledge that your use of those tools is subject to their
              respective terms and privacy policies.
            </p>

            <h2>7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our
              services immediately, without prior notice or liability, for any
              breach of these Terms.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              Under no circumstances shall Anzi & Co. be liable for any indirect,
              incidental, special, or consequential damages, including but not
              limited to loss of profits, data, or business opportunities,
              arising from the use or inability to use our services.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              We reserve the right to update or revise these Terms & Conditions
              at any time. Changes become effective immediately upon being
              posted. Your continued use of the website or services after such
              changes implies acceptance.
            </p>

            <h2>10. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of Pakistan, without regard to its conflict of law
              principles. Any disputes will be subject to the jurisdiction of
              the courts located in Sukkur, Sindh.
            </p>

            <hr className="my-4" />

            <p>
              For details on how we handle your data, please read our{" "}
              <Link href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </Link>
              . To learn about our cancellation and refund procedures, view our{" "}
              <Link href="/refund-policy" className="text-blue-600 underline">
                Refund Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
