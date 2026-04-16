import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import TelegramButton from './components/TelegramButton';

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}

function FeaturesPage() {
  return (
    <>
      <div style={{ paddingTop: 100 }}>
        <Features />
        <HowItWorks />
      </div>
      <CTABanner />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <div style={{ paddingTop: 100 }}>
        <Pricing />
      </div>
      <CTABanner />
    </>
  );
}

function TestimonialsPage() {
  return (
    <>
      <div style={{ paddingTop: 100 }}>
        <Testimonials />
      </div>
    </>
  );
}

function FAQPage() {
  return (
    <>
      <div style={{ paddingTop: 100 }}>
        <FAQ />
      </div>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: 16 }}>Contactez-nous</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: 48, maxWidth: 500 }}>
            Vous avez des questions ? Notre équipe est disponible pour vous aider.
          </p>
          <div style={{ display: 'grid', gap: 24, maxWidth: 500 }}>
            <a href="https://t.me/Emergingstreambot" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '16px 24px', fontSize: 16, textAlign: 'center', textDecoration: 'none' }}>
              📱 Nous contacter sur Telegram
            </a>
            <a href="mailto:contact@emergingstream.com" className="btn-secondary" style={{ padding: '16px 24px', fontSize: 16, textAlign: 'center', textDecoration: 'none', display: 'block' }}>
              ✉️ Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <TelegramButton />
      </>
    </BrowserRouter>
  );
}