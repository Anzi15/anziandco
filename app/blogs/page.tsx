"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { Search, Filter, Calendar, ArrowRight, Sparkles } from "lucide-react"
import { db } from "@/lib/firebase/config"
import NewsletterSignup from "@/components/ui/FooterCta"

// Firebase configuration



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
  featured?: boolean
  readTime?: string
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")
  const [loading, setLoading] = useState(true)
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    fetchBlogs()
  }, [])

  useEffect(() => {
    filterBlogs()
  }, [blogs, searchTerm, selectedTag])

  const fetchBlogs = async () => {
    try {
      const blogsRef = collection(db, "blogs")
      const q = query(blogsRef, orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      console.log("Fetched blogs:", querySnapshot.docs.length)

      const blogData = querySnapshot.docs.map((doc) => {
        const data = doc.data() as BlogPost & { createdAt?: any }
        let createdAt: string | undefined = undefined
        if (data.createdAt && typeof data.createdAt === "object" && typeof data.createdAt.toDate === "function") {
          createdAt = data.createdAt.toDate().toLocaleDateString()
        } else if (typeof data.createdAt === "string") {
          createdAt = data.createdAt
        }
        return {
          ...data,
          createdAt,
        }
      })
      setBlogs(blogData)
      
      // Extract all unique tags
      const tags = new Set<string>()
      blogData.forEach((blog) => {
        blog.tags?.forEach((tag) => tags.add(tag))
      })
      setAllTags(Array.from(tags))
      
      setLoading(false)
    } catch (error) {
      console.error("Error fetching blogs:", error)
      setLoading(false)
    }
  }

  const filterBlogs = () => {
    let filtered = blogs

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.seo.metaDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedTag) {
      filtered = filtered.filter((blog) => blog.tags?.includes(selectedTag))
    }

    setFilteredBlogs(filtered)
  }

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured).slice(0, 2)
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured)

  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">


      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/5 to-blue-600/10"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-600">Digital Marketing Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent leading-tight mb-6">
            Our Blogs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge strategies, industry insights, and actionable tips to dominate the digital landscape
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Tag Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="pl-12 pr-8 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer min-w-[200px]"
              >
                <option value="">All Categories</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedTag) && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")} className="ml-2 text-purple-500 hover:text-purple-700">
                    ×
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="inline-flex items-center px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                  Tag: {selectedTag}
                  <button onClick={() => setSelectedTag("")} className="ml-2 text-pink-500 hover:text-pink-700">
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Featured Articles */}
      {/* {featuredBlogs.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="flex items-center mb-8">
            <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <FeaturedBlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </section>
      )} */}

      {/* All Articles */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {featuredBlogs.length > 0 ? "Latest Articles" : "All Articles"}
        </h2>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )}
      </section>
        <NewsletterSignup/>


    </div>
  )
}

// Featured Blog Card Component
function FeaturedBlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:scale-[1.02]"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={blog.coverImage || "/placeholder.svg?height=256&width=512"}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">
            FEATURED
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{blog.createdAt || "Recent"}</span>
          </div>
          {blog.readTime && (
            <>
              <span>•</span>
              <span>{blog.readTime}</span>
            </>
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 line-clamp-3 leading-relaxed mb-6">{blog.excerpt || blog.seo.metaDescription}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {blog.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-purple-600 font-medium">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

// Regular Blog Card Component
function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:scale-[1.02]"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.coverImage || "/placeholder.svg?height=192&width=384"}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{blog.createdAt || "Recent"}</span>
          </div>
          {blog.readTime && (
            <>
              <span>•</span>
              <span>{blog.readTime}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4">{blog.excerpt || blog.seo.metaDescription}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {blog.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-purple-600 font-medium text-sm">
            <span>Read</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

// Loading Skeleton Component
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="w-32 h-8 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div className="w-96 h-16 bg-gray-200 rounded-2xl mx-auto mb-4 animate-pulse"></div>
          <div className="w-80 h-6 bg-gray-200 rounded-xl mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-6 space-y-4">
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-5/6 h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
