import React, { useState, useEffect } from 'react';
import About from "./About";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Heros from "./Heros";
import MyService from "./MyService";
import MyEducation from "./MyEducation";
import MySkills from "./MySkills";
import Navbar from "./Navbar";
import Project from "./Project";
import LoadingScreen from "./LoadingScreen";




const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl">
        <Heros />
        <About />
        <MyService />
        <MySkills />
        <MyEducation />
        <Project/>
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default Home;