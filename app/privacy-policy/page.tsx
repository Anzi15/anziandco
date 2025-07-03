"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen py-20 px-4 md:px-6"
      style={{ background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 40%)" }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            At Anzi & Co., we value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information across our digital platforms.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="prose lg:prose-lg max-w-none p-6">
            <h2>1. Information We Collect</h2>
            <p>
              We collect personal data directly from you when you:
            </p>
            <ul>
              <li>Fill out contact or inquiry forms</li>
              <li>Subscribe to our newsletters or updates</li>
              <li>Engage with us via social media or email</li>
              <li>Purchase or inquire about our services</li>
            </ul>
            <p>This may include your name, email address, phone number, business name, location, and project details.</p>

            <h2>2. How We Use Your Information</h2>
            <p>
              The data we collect is used to:
            </p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver relevant marketing and service updates</li>
              <li>Improve our website, services, and user experience</li>
              <li>Personalize interactions and service offerings</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or share your personal data with third parties for profit or unsolicited promotions.</p>

            <h2>3. Use of Cookies & Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies (like analytics scripts) to better understand how visitors interact with our website. Cookies help us:
            </p>
            <ul>
              <li>Analyze site traffic</li>
              <li>Remember preferences for a smoother experience</li>
              <li>Optimize content and design for engagement</li>
            </ul>
            <p>You may disable cookies via your browser settings, but this may affect website functionality.</p>

            <h2>4. Data Storage & Security</h2>
            <p>
              Your data is stored securely using trusted infrastructure including services like Firebase and Google Cloud. We implement best practices in data encryption and access control. However, while we take all reasonable precautions, no digital platform is completely immune from threats.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may use third-party tools (like payment processors, analytics, or marketing platforms). These services may collect data according to their own privacy policies. We recommend reviewing their policies when interacting through those channels.
            </p>

            <h2>6. Your Rights & Choices</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access, review, and correct your data</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent to marketing communications</li>
            </ul>
            <p>To exercise these rights, please email us at <strong>anziandco@gmail.com</strong> with your request.</p>

            <h2>7. International Users</h2>
            <p>
              Our services are accessible worldwide. By providing information, you consent to its transfer and storage in Pakistan or any other country where we or our partners operate.
            </p>

            <h2>8. Children’s Privacy</h2>
            <p>
              We do not knowingly collect personal data from individuals under the age of 13. If you believe your child has submitted personal data to us, please contact us so we can remove it.
            </p>

            <h2>9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or legal obligations. The latest revision date will always appear at the top or bottom of the page. Continued use of our site implies acceptance of any updates.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For questions, clarifications, or concerns about this Privacy Policy, please reach out to us at:
              <br />
              <strong>Email:</strong> anziandco@gmail.com
            </p>

            <hr className="my-4" />

            <p>
              Learn more by reviewing our{" "}
              <Link href="/terms-conditions" className="text-blue-600 underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
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
