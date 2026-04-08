import React, { useEffect, useRef } from 'react';
import { Play, ChevronDown, Star } from 'lucide-react';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${8 + Math.random() * 12}s`,
  drift: `${(Math.random() - 0.5) * 120}px`,
  size: `${2 + Math.random() * 3}px`,
}));

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Background layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(45,212,191,0.05) 0%, transparent 50%), var(--black)',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating particles */}
      {PARTICLES.map(p => (
        <div key={p.id} style={{
          position: 'absolute', bottom: '-10px', left: p.left,
          width: p.size, height: p.size, borderRadius: '50%',
          background: 'var(--gold)', opacity: 0,
          '--drift': p.drift,
          animation: `particle ${p.duration} ${p.delay} infinite linear`,
        }} />
      ))}

      {/* Big decorative circle */}
      <div style={{
        position: 'absolute', right: '-200px', top: '50%', transform: 'translateY(-50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.08)',
      }} />
      <div style={{
        position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.12)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 100 }}>
        <div style={{ maxWidth: 760 }}>
          {/* Trust badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.2)',
            borderRadius: 100, padding: '6px 16px',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#c9a84c" color="#c9a84c" />)}
            </div>
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--teal)' }}>+2 400 abonnés satisfaits</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(46px, 7vw, 88px)',
            fontWeight: 700, lineHeight: 1.05,
            letterSpacing: '-0.02em', marginBottom: 28,
            animation: 'fadeUp 0.7s 0.1s ease both', opacity: 0,
          }}>
            Le Streaming qui<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 40%, var(--gold) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s linear infinite',
            }}>s'adapte à vous</span>
          </h1>

          <p style={{
            fontSize: 19, color: 'var(--muted)', lineHeight: 1.8,
            maxWidth: 560, marginBottom: 40,
            animation: 'fadeUp 0.7s 0.2s ease both', opacity: 0,
          }}>
            Profitez d'un accès illimité à des milliers de contenus, fluide même sur connexion lente.
            Économisez vos données mobiles et regardez partout, tout le temps.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            animation: 'fadeUp 0.7s 0.3s ease both', opacity: 0,
          }}>
            <a href="#lead" className="btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
              <Play size={18} fill="currentColor" /> Essai Gratuit 24h
            </a>
            <a href="#features" className="btn-secondary" style={{ fontSize: 16 }}>
              Voir les offres
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap',
            animation: 'fadeUp 0.7s 0.4s ease both', opacity: 0,
          }}>
            {[
              { val: '10 000+', label: 'Chaînes & VOD' },
              { val: '24h', label: 'Essai Gratuit' },
              { val: '99.9%', label: 'Disponibilité' },
              { val: '4K', label: 'Ultra HD' },
            ].map(s => (
              <div key={s.val}>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: 32, fontWeight: 700,
                  color: 'var(--gold)', lineHeight: 1,
                }}>{s.val}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'var(--muted)', animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Découvrir</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
