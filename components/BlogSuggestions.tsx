import React from 'react'
import BlogCard from './ui/BlogCard'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '@/lib/firebase/config'

  type Blog = {
    id: string;
    title: string;
    coverImage: string;
    slug: string;
    date: string;
    // add other fields as needed
  };
  
  const fetchBlogs = async (): Promise<Blog[]> => {
    // This function can be used to fetch blog data from an API or database 
    try {
      const q = query(collection(db, 'blogs'), limit(6));
      const querySnapshot = await getDocs(q);
      const blogs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Blog, 'id'>)
      }));
      console.log(blogs);
      return blogs;
    } catch (error) {
      console.error("Error fetching blogs: ", error);
      return [];
    }
  }

const BlogSuggestions = async () => {


  const blogs = await fetchBlogs()
  return (
    <section className="flex flex-col items-center justify-center w-full py-10 my-6 px-4">
      <h2 className="md:text-5xl text-4xl text-center mb-6 py-6 my-4 lg:max-w-[50%]">
        Think further with our expert insights{' '}

        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                text={blog.title}
                image={blog.coverImage}
                link={blog.slug}
                date={blog.date}
              />
            ))
          }
                
        </div>
        
      
    </section>
  )
}

export default BlogSuggestions
