'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const CodingTestimonials = [
  {
    quote:
      'Joining this coding academy transformed my understanding of software development and helped me truly discover my own coding style. The instructors are top-notch!',
    name: 'Alex Johnson',
    title: 'JavaScript Student',
  },
  {
    quote:
      "The community and support at this academy are unmatched. I've grown not just as a Python developer, but also as a problem-solver, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Python Student',
  },
  {
    quote:
      "This academy offered me the tools and confidence to take my web development skills to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'Web Development Student',
  },
  {
    quote:
      'As a data scientist, finding the right mentor can be challenging, but this academy matched me with an instructor who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Data Science Student',
  },
  {
    quote:
      'The DevOps courses here opened my eyes to the intricacies of continuous integration and deployment. Highly recommend for any aspiring DevOps engineers!',
    name: 'Chris Morales',
    title: 'DevOps Student',
  }
  ,
  ];


function CodingTestCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={CodingTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default CodingTestCards
