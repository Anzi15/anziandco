import { Suspense } from "react";
// import GetQuoteForm from "../../components/GetQuoteForm";
// import GetQuoteForm from "../components/GetQuoteForm";
import GetQuoteForm from "./../../components/quote-form";
import StatsSection from "@/components/ui/Stats";

export default function GetQuotePage() {
  return (
    <div
      className="min-h-screen py-20 px-4 md:px-6"
      style={{
        background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 40%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center">
            Get a <span className="italic">Quote</span>
          </h1>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400 text-center py-2">
            Fill out the form below to request a quote for our services. We will get back to you as soon as possible.
          </p>
        </div>

        <Suspense fallback={<div>Loading form...</div>}>
          <GetQuoteForm />
        </Suspense>
      </div>

      <StatsSection />
    </div>
  );
}
