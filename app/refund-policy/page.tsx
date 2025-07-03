"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div
      className="min-h-screen py-20 px-4 md:px-6"
      style={{
        background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 40%)",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Refund Policy</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            At Anzi & Co., client satisfaction is our top priority. While we aim to deliver exceptional service, we understand there may be instances where a refund or cancellation is requested. Please read the following policy carefully to understand how we handle such requests.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="prose lg:prose-lg max-w-none p-6">
            <h2>1. Eligibility for Refund</h2>
            <p>
              Clients may request a refund within <strong>3 working days</strong> of project initiation—defined as the date on which work officially begins or payment is received—only if no substantial work has been started (such as strategy calls, branding drafts, or content architecture). After this window, partial or full refunds will be reviewed case-by-case.
            </p>

            <h2>2. Non-Refundable Services</h2>
            <p>Refunds will not be issued for services where substantial custom work or deliverables have already been provided, including but not limited to:</p>
            <ul>
              <li>Completed or in-progress website design and development</li>
              <li>Delivered graphic design, branding, or logo assets</li>
              <li>Executed marketing campaigns or consultations</li>
              <li>Third-party software, plugins, domain registrations, or paid tools acquired on your behalf</li>
            </ul>

            <h2>3. Cancellation Policy</h2>
            <p>
              You may cancel a service <strong>prior to the official kickoff</strong> (e.g., before briefing sessions or payment). In such cases, you’re eligible for a full refund minus any transaction fees. Once a project is underway, cancellation requests will be evaluated for eligibility, considering the scope and progress of work completed.
            </p>

            <h2>4. How to Request a Refund</h2>
            <p>
              To request a refund, please email us at{" "}
              <strong>anziandco@gmail.com</strong> with the following details:
            </p>
            <ul>
              <li>Full Name and Contact Information</li>
              <li>Order/Invoice Number</li>
              <li>Reason for Refund Request</li>
              <li>Any supporting documents or screenshots (if applicable)</li>
            </ul>
            <p>Our support team will acknowledge your request within 1–2 business days and initiate a review process.</p>

            <h2>5. Approval & Processing Time</h2>
            <p>
              All refund requests are reviewed by our accounts team and decisions are made at our discretion. If your refund is approved, it will be processed via the original payment method within <strong>7–10 business days</strong>. Processing times may vary depending on your bank or payment provider.
            </p>

            <h2>6. Chargebacks</h2>
            <p>
              We kindly request clients to reach out to us before initiating any chargebacks or disputes through their bank. We are happy to resolve most concerns amicably and transparently.
            </p>

            <h2>7. International Clients</h2>
            <p>
              We work with clients across different regions and currencies. Refunds will be issued in the same currency as paid, minus applicable transaction or exchange fees charged by the payment processor (Stripe, PayPal, etc.).
            </p>

            <h2>8. Contact & Escalation</h2>
            <p>
              If you have additional questions or would like to escalate a refund concern, you can contact our client success team directly at{" "}
              <strong>anziandco@gmail.com</strong>. Please include "Refund Inquiry" in the subject line for faster response.
            </p>

            <hr className="my-4" />

            <p>
              For more information, please review our{" "}
              <Link href="/terms-conditions" className="text-blue-600 underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
