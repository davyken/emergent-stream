import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadMagnet from './components/LeadMagnet';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import TelegramButton from './components/TelegramButton';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LeadMagnet />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
      <TelegramButton />
    </>
  );
}
