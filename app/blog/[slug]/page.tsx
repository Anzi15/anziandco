import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs, limit, orderBy } from "firebase/firestore"
import NewsletterSignup from "@/components/ui/FooterCta"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

interface BlogPost {
  content: string
  coverImage: string
  seo: {
    metaDescription: string
    metaTitle: string
    ogImage: string
  }
  slug: string
  title: string
  tags?: string[]
  createdAt?: string
  excerpt?: string
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const blogsRef = collection(db, "blogs")
    const q = query(blogsRef, where("slug", "==", slug))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      return null
    }

    const doc = querySnapshot.docs[0]
    return doc.data() as BlogPost
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

async function getRelevantArticles(currentSlug: string): Promise<BlogPost[]> {
  try {
    const blogsRef = collection(db, "blogs")
    const q = query(blogsRef, orderBy("createdAt", "desc"), limit(10))
    const querySnapshot = await getDocs(q)

    const articles = querySnapshot.docs
      .map((doc) => doc.data() as BlogPost)
      .filter((article) => article.slug !== currentSlug)
      .slice(0, 4)

    return articles
  } catch (error) {
    console.error("Error fetching relevant articles:", error)
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Anzi & Co",
      description: "The requested blog post could not be found.",
    }
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
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [post, relevantArticles] = await Promise.all([getBlogPost(slug), getRelevantArticles(slug)])

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/5 to-blue-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 py-16 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
              <span className="text-sm font-medium text-purple-600">Digital Marketing Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Anzi & Co Team</span>
              </div>
              <span>•</span>
              <span>
                {post.createdAt
                  ? new Date(post.createdAt.seconds * 1000).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "Recently Published"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="relative w-full h-64 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={post.coverImage || "/placeholder.svg?height=500&width=1200"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </section>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-xl prose-gray max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-16 mb-8 first:mt-0 leading-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6 leading-tight">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 leading-tight">{children}</h3>
              ),
              p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-8 text-xl font-light">{children}</p>,
              ul: ({ children }) => <ul className="list-none space-y-4 mb-8 text-gray-700">{children}</ul>,
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-700">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-xl leading-relaxed flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-3 flex-shrink-0"></span>
                  <span>{children}</span>
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gradient-to-b from-purple-600 to-pink-600 pl-8 py-4 my-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-r-2xl shadow-sm">
                  <div className="text-white italic text-2xl font-light leading-relaxed">{children}</div>
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 px-3 py-1 rounded-lg text-lg font-mono text-purple-600 font-medium">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto my-8 shadow-lg">
                  {children}
                </pre>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-purple-600 hover:text-purple-800 underline decoration-2 underline-offset-4 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <div className="relative w-full h-64 md:h-96 my-12 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={src || "/placeholder.svg?height=384&width=768"}
                    alt={alt || "Blog image"}
                    fill
                    className="object-cover"
                  />
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium hover:from-purple-200 hover:to-pink-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Relevant Articles */}
        {relevantArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4">Relevant Articles</h2>
              <p className="text-xl text-gray-600 font-light">Continue your digital marketing journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relevantArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blogs/${article.slug}`}
                  className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.coverImage || "/placeholder.svg?height=192&width=384"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed">
                      {article.excerpt || article.seo.metaDescription}
                    </p>
                    <div className="mt-4 flex items-center text-purple-600 font-medium">
                      <span>Read More</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <NewsletterSignup />
      </main>
    </div>
  )
}
