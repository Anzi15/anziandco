import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type BlogCardProps = {
    image: string;
    text: string;
    date: string;
    link: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, text, date, link }) => {
    return (
        <Link href={link} className="group">
        <div className=' bg-white shadow-md  max-w-sm mx-auto flex flex-col gap-4 rounded-3xl pb-8 cursor-pointer hover:shadow-lg transition-shadow duration-500 hover:bg-gray-50' >
            <Image
                src={image}
                alt="Blog image"
                width={400}
                height={250}
                className="rounded-t-3xl h-48 w-full aspect-square object-cover"
            />
            <div className="flex flex-col gap-2 p-4 group">
                <span className="text-gray-500 text-sm">{date}</span>
                <p className="text-gray-800 font-bold text-lg group-hover:text-purple-800">{text}</p>
            </div>
        </div>
            </Link>

    )
}

export default BlogCard
