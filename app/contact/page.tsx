"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FAQ } from "@/components/ui/Faqs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "queries"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "unanswered",
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient"         style={{
          background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 81%)",
        }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Have a question or ready to start your project? We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">We're Here to Help</h2>
                <p className="text-gray-500 md:text-xl">
                  Fill out the form or reach out to us directly using the contact information below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-secondary rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-gray-500 mt-1">(+92) 324-8226367</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-secondary rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-gray-500 mt-1">anziandco@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-secondary rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Address</h3>
                        <p className="text-gray-500 mt-1">Opp Goll Masjid, Akhuwat Society, Sukkur, Sindh, Pakistan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/anziandco/" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="http://instagram.com/anziandco" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="https://x.com/anziandco" className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                    <Twitter className="h-5 w-5 text-primary" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://linkedin.com/company/anziandco" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message" className="min-h-[120px]" required />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {submitted && <p className="text-green-500 text-center text-sm">Thank you! We'll get back to you soon.</p>}

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Location</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Visit Our Office</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              We're conveniently located in the heart of Digital City.
            </p>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=27.701899,68.857012&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anzi & Co. Location"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <h3 className="font-bold">Anzi & Co. Headquarters</h3>
                <p className="text-sm text-gray-500">Opp Goll Masjid, Akhuwat Society, Sukkur, Sindh, Pakistan</p>
                <Button asChild size="sm" className="mt-2">
                  <Link href="https://maps.app.goo.gl/u6A84LYPrVHQLxkdA" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={[
        {
          question: "What information should I prepare before contacting you?",
          answer:
            "It's helpful to have a basic understanding of your business goals, target audience, current marketing efforts, and budget. This helps us provide more tailored recommendations during our initial consultation.",
        },
        {
          question: "How quickly will you respond to my inquiry?",
          answer:
            "We typically respond to all inquiries within 24 business hours. If you need immediate assistance, please call our office directly.",
        },
        {
          question: "Do you offer free consultations?",
          answer:
            "Yes, we offer a free 30-minute consultation to discuss your business needs and how we might be able to help you achieve your goals.",
        },
        {
          question: "Can we meet in person or is everything done virtually?",
          answer:
            "We offer both in-person meetings at our office and virtual meetings via Zoom or other platforms, depending on your preference and location.",
        },
      ]} />
    </div>
  );
}
