'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  "Website Development",
  "Social Media Marketing",
  "Graphic Designing",
  "Email Marketing",
  "SMS Marketing",
  "Search Engine Optimization (SEO)",
  "Google Ads",
];

export default function GetQuoteForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      const match = services.find((s) =>
        s.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) {
        setSelectedService(match);
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [serviceParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (id === "service") setSelectedService(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "quotes"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new",
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setSelectedService("");
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
            <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
          </div>
          <div>
            <label htmlFor="service" className="text-sm font-medium">Service</label>
            <select
              id="service"
              value={selectedService}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2"
            >
              <option value="">Select a service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project or request"
              className="min-h-[120px]"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Submitting..." : "Request Quote"}
          </Button>

          {submitted && (
            <p className="text-green-500 text-center text-sm">
              Thank you! We'll get back to you soon.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
