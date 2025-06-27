import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

interface BlogPost {
  content: string;
  coverImage: string;
  seo: {
    metaDescription: string;
    metaTitle: string;
    ogImage: string;
  };
  slug: string;
  title: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return doc.data() as BlogPost;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Anzi & Co",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription,
    openGraph: {
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription,
      images: [
        {
          url: post.seo.ogImage || post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription,
      images: [post.seo.ogImage || post.coverImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <article className="space-y-8 py-10">
          <header className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Published by Anzi & Co</span>
                <span>•</span>
                <span>Digital Marketing Insights</span>
              </div>
            </div>

            {/* Cover Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-lg leading-relaxed">{children}</li>
                ),
                blockquote: ({ children, ...props }) => (
                  <blockquote
                    className="border-l-4 border-purple-500 pl-6 py-2 my-8 bg-gray-50 rounded-r-lg"
                    {...props}
                  >
                    <div className="text-gray-800 italic text-lg">
                      {children}
                    </div>
                  </blockquote>
                ),
                code: (props: React.HTMLAttributes<HTMLElement>) => (
                  <code
                    className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-purple-600"
                    {...props}
                  >
                    {props.children}
                  </code>
                ),
                pre: (props: React.HTMLAttributes<HTMLElement>) => (
                  <pre
                    className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"
                    {...props}
                  >
                    {props.children}
                  </pre>
                ),
                a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                  <a
                    {...props}
                    className="text-purple-600 hover:text-purple-800 underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.children}
                  </a>
                ),
                img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
                  <div className="relative w-full h-64 md:h-80 my-8 rounded-lg overflow-hidden">
                    <Image
                      src={props.src || "/placeholder.svg?height=320&width=640"}
                      alt={props.alt || "Blog image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Grow Your Business?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let our digital marketing experts help you achieve your business
              goals. Get in touch for a free consultation and discover how we
              can elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
