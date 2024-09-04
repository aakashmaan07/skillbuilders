"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const codingContent = [
  {
    title: 'Discover Your Code with Us: A Personal Journey in Software Mastery',
    description:
      'Embark on a coding journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and innovation. At our coding academy, your aspirations meet our dedicated support, creating a seamless path to mastery.',
  },
  {
    title: 'Discover Your Code with Us: A Personal Journey in Software Mastery',
    description:
      'Embark on a coding journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and innovation. At our coding academy, your aspirations meet our dedicated support, creating a seamless path to mastery.',
  },
  {
    title: 'Discover Your Code with Us: A Personal Journey in Software Mastery',
    description:
      'Embark on a coding journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and innovation. At our coding academy, your aspirations meet our dedicated support, creating a seamless path to mastery.',
  },
  {
    title: 'Live Feedback & Engagement',
    description:
      'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time debugging in a collaborative project. This approach enhances your understanding and mastery of coding concepts and development techniques.',
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Our curriculum is continuously updated to include the latest trends and technologies in software development, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
  },
  {
    title: 'Limitless Learning Opportunities',
    description:
      'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your coding skills are always advancing.',
  }
  ,
  ];

function ChosseUs() {
  return (
    <div>
        <StickyScroll content={codingContent}/>
    </div>
  )
}

export default ChosseUs
