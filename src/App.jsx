import Navbar from './components/Navbar';
import Hero from './components/Introduction';
import About from './components/Project_docuemnt';
import Main from './components/Main';
import Technologies from './components/Technologies';

import Contact  from './components/Footer';
import ContactUS  from './components/ContactUs';
import Projectmilestones  from './components/Projectmilestones';
import Project_domain  from './components/Project_domain';
import Gallery  from './components/Gallery';
import React from 'react';
import bgImg from './assets/justice-bg.jpg'; // Import your image

function App() {
  return (
    <div
  className="overflow-x-hidden text-neutral-100 antialiased selection:text-cyan-900 min-h-screen"
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}
>
      <div className="absolute inset-0 " />
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="container mx-auto mt-24 px-4  bg-opacity-70 min-h-screen">
        <section id="home">
        <Main />
        </section>
        <section id="about">
        <Hero />
        </section>
        <section id="document">
        <About /></section>
        <section id="milestones">
        <Projectmilestones /></section>
        <section id="domain">
        <Project_domain /></section>
        <section id="Technologies">
        <Technologies /></section>
       
        <section id="team">
        <Gallery/></section>
        <section id="contact">
        <ContactUS /></section>
       
      </div>
       <Contact />
    </div>
  );
}

export default App;