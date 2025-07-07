"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const parseAudit = (markdown: string) => {
  const sectionRegex = /## (.*?)\n+Score: (\d+)\/10[\s\S]*?\*\*Strengths\*\*[\s\S]*?- (.*?)\n+\*\*Improvements\*\*[\s\S]*?- (.*?)\n*/g;
  const sections = [];
  let match;

  while ((match = sectionRegex.exec(markdown))) {
    const [_, title, scoreStr, strengthsRaw, improvementsRaw] = match;
    sections.push({
      title,
      score: parseInt(scoreStr),
      strengths: strengthsRaw.split("- ").filter(Boolean),
      improvements: improvementsRaw.split("- ").filter(Boolean),
    });
  }

  return sections;
};

function ProgressBar({ score }: { score: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
      <div
        className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full"
        style={{ width: `${score * 10}%` }}
      ></div>
    </div>
  );
}

function AuditCard({
  title,
  score,
  strengths,
  improvements,
}: {
  title: string;
  score: number;
  strengths: string[];
  improvements: string[];
}) {
  return (
    <div className="p-5 bg-white rounded-xl shadow border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">{title}</h3>
      <ProgressBar score={score} />
      <p className="text-sm mb-2 text-gray-600">Score: {score}/10</p>

      <p className="font-medium text-green-600">Strengths</p>
      <ul className="list-disc pl-5 text-sm text-gray-800 mb-3">
        {strengths.map((s, i) => (
          <li key={i}>✅ {s.trim()}</li>
        ))}
      </ul>

      <p className="font-medium text-red-600">Improvements</p>
      <ul className="list-disc pl-5 text-sm text-gray-800">
        {improvements.map((s, i) => (
          <li key={i}>⚠️ {s.trim()}</li>
        ))}
      </ul>

      <button className="mt-4 text-sm text-indigo-600 underline hover:text-indigo-800">
        Need help improving this?
      </button>
    </div>
  );
}

export default function WebsiteAuditPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [auditData, setAuditData] = useState<{
    screenshot: string;
    markdown: string;
    sections: {
      title: string;
      score: number;
      strengths: string[];
      improvements: string[];
    }[];
  } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuditData(null);
    setError("");

    try {
      const res = await fetch("/api/auditer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (data.markdown && data.screenshot) {
        const parsed = parseAudit(data.markdown);
        setAuditData({
          screenshot: data.screenshot,
          markdown: data.markdown,
          sections: parsed,
        });
      } else {
        setError(data.error || "Unknown error occurred.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          🚀 Free Website Audit
        </h1>

        <form onSubmit={handleSubmit} className="mb-10 flex gap-4">
          <input
            type="url"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-3 border rounded shadow"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? "Auditing..." : "Audit"}
          </button>
        </form>

        {error && <p className="text-red-600 mb-6">{error}</p>}

        {auditData && (
          <div className="space-y-10">
            {/* Screenshot inside laptop */}
            <div className="bg-gray-800 rounded-2xl p-4 shadow-xl">
              <div className="w-full h-[28px] bg-gray-700 rounded-t-lg flex items-center justify-center mb-2">
                <div className="w-16 h-1.5 bg-gray-400 rounded-full" />
              </div>
              <div className="bg-black h-[400px] overflow-y-scroll rounded-b-lg">
                <img
                  src={auditData.screenshot}
                  alt="Website Screenshot"
                  className="w-full object-top object-cover"
                />
              </div>
            </div>

            {/* Parsed sections visually */}
            <div className="grid grid-cols-1 gap-6">
              {auditData.sections.map((sec, idx) => (
                <AuditCard key={idx} {...sec} />
              ))}
            </div>

            {/* Fallback full markdown if needed */}
            <details className="bg-white mt-6 rounded-lg p-4 border border-gray-200">
              <summary className="cursor-pointer font-semibold text-gray-700">Full Markdown View</summary>
              <div className="prose mt-4 max-w-none text-gray-700">
                <ReactMarkdown>{auditData.markdown}</ReactMarkdown>
              </div>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}