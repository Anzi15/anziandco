// /app/api/auditer/route.ts
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
    await page.setViewport({ width: 1280, height: 800 });
    const screenshot = await page.screenshot({
      fullPage: true,
      type: "jpeg",
      encoding: "base64",
    });
    await browser.close();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PRIVATE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are a professional UX, SEO, and design auditor. Based on the website screenshot provided below, generate a **structured**, **scored**, and **objective** audit report.

Avoid personal commentary like "Here's your report." Simply present the findings clearly and concisely.

Each section must include:
- A **score out of 10**
- **Strengths** (if any)
- **Areas for improvement** (at least 2 points)
- Subtle encouragement to consider expert help if improvements are needed.

Structure:
## Design and Aesthetics
Score: X/10
Strengths:
- ...
Improvements:
- ...

## User Experience (UX)
...

## SEO & Accessibility
...

## Performance and Speed
...

## Suggestions & Recommendation
- Final thoughts
- If redesign or improvements are needed, subtly suggest seeking professional help (no hard sell)

Use proper markdown formatting with headings and bullet points and break lines to make the report easy to read.`,

                },
                {
                  inlineData: {
                    mimeType: "image/jpeg",
                    data: screenshot,
                  },
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await response.json();
    const audit = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!audit) {
      return NextResponse.json({ error: "Invalid audit response" }, { status: 500 });
    }

    return NextResponse.json({
      screenshot: `data:image/jpeg;base64,${screenshot}`,
      markdown: audit,
    });
  } catch (err) {
    console.error("Audit API error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    );
  }
}
