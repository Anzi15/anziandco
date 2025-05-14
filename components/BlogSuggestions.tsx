import React from 'react'
import BlogCard from './ui/BlogCard'

const BlogSuggestions = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-10 my-6">
      <h2 className="text-5xl text-center mb-6 py-6 my-4 lg:max-w-[50%]">
        Think further with our expert insights{' '}

        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  <BlogCard
        image="https://picsum.photos/200"
        text="Check out our latest blog post on digital marketing trends for 2024!"
        date="2024-06-01"
        link="/blog/digital-marketing-trends-2024"
      />
        <BlogCard
            image="https://picsum.photos/201"
            text="Discover the secrets to effective social media marketing in our new article."
            date="2024-06-02"
            link="/blog/social-media-marketing-secrets"

        />
        <BlogCard
            image="https://picsum.photos/202"
            text="Learn how to optimize your website for better SEO performance."
            date="2024-06-03"
            link="/blog/seo-optimization-tips"
        />
        </div>
        
      
    </section>
  )
}

export default BlogSuggestions
