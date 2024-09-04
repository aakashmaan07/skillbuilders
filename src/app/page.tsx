import CodingTestCards from '@/components/TestCards';
import ChosseUs from './../components/ChosseUs';
import FeaturedCourses from './../components/FeaturedCourses';
import HeroSection from './../components/HeroSection';
import UpcomingWebinars from './../components/UpcomingWebinars';
import Instructors from './../components/Instructors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      {/* <h1 className="text-2xl text-center">Hello World</h1> */}
      <HeroSection/>
      <FeaturedCourses/>
      <ChosseUs/>
      <CodingTestCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
