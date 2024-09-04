'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {
    const featuredWebinars = [
        {
          title: 'JavaScript for Beginners',
          description:
            'Learn the basics of JavaScript, the most popular programming language for web development.',
          slug: 'javaScript-for-beginners',
          isFeatured: true,
        },
        {
          title: 'Advanced Python Programming',
          description:
            'Deep dive into advanced Python topics including data structures, algorithms, and web scraping.',
          slug: 'advanced-python-programming',
          isFeatured: true,
        },
        {
          title: 'Introduction to Machine Learning',
          description:
            'Understand the basics of machine learning and build your first machine learning model.',
          slug: 'introduction-to-machine-learning',
          isFeatured: true,
        },
        {
          title: 'Web Development with React',
          description:
            'Learn how to build dynamic web applications using React.js.',
          slug: 'web-development-with-react',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Cybersecurity Fundamentals',
          description:
            'Get introduced to the basics of cybersecurity and how to protect systems against threats.',
          slug: 'cybersecurity-fundamentals',
          isFeatured: true,
        },
        {
          title: 'Introduction to Cloud Computing',
          description:
            'Learn the fundamentals of cloud computing and gain hands-on experience with leading cloud platforms.',
          slug: 'introduction-to-cloud-computing',
          isFeatured: true,
        },
      ];
      
    return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
