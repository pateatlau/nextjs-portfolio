'use client';

import { navItems } from '@/data';

import { FloatingNav } from '@/components/ui/FloatingNavbar';
import Hero from '@/components/Hero';
// import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import Experience from '@/components/Experience';
import Clients from '@/components/Clients';
// import Approach from '@/components/Approach';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        <RecentProjects />
        <Experience />
        <Clients />
        <Footer />
        {/* <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
