import React from 'react';
import { Play, ChevronDown, Star } from 'lucide-react';

const MOVIES = [
  { 
    id: 1, 
    title: 'Stranger Things', 
    color: '#1a1a2e', 
    type: 'Netflix',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 2, 
    title: 'The Mandalorian', 
    color: '#1a1a2e', 
    type: 'Disney+',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop'
  },
  { 
    id: 3, 
    title: 'Squid Game', 
    color: '#e50914', 
    type: 'Netflix',
    image: 'https://images.unsplash.com/photo-1627873649417-c67f701f1949?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 4, 
    title: 'Arcane', 
    color: '#542d95', 
    type: 'Netflix',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 5, 
    title: 'Wednesday', 
    color: '#1a1a2e', 
    type: 'Netflix',
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 6, 
    title: 'The Last of Us', 
    color: '#5822b4', 
    type: 'HBO',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 7, 
    title: 'House of Dragon', 
    color: '#5822b4', 
    type: 'HBO',
    image: 'https://images.unsplash.com/photo-1599719162074-b4465ca8768d?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 8, 
    title: 'The Bear', 
    color: '#1a1a2e', 
    type: 'Hulu',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 9, 
    title: 'Avatar', 
    color: '#113ccf', 
    type: 'Disney+',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 10, 
    title: 'Spider-Man', 
    color: '#113ccf', 
    type: 'Disney+',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=2070&auto=format&fit=crop'
  },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${8 + Math.random() * 12}s`,
  drift: `${(Math.random() - 0.5) * 120}px`,
  size: `${2 + Math.random() * 3}px`,
}));

export default function Hero() {
  const duplicatedMovies = [...MOVIES, ...MOVIES, ...MOVIES];

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Movie Background Carousel */}
      <div className="movie-carousel-bg">
        <div className="carousel-track">
          {duplicatedMovies.map((movie, idx) => (
            <div key={`${movie.id}-${idx}`} className="carousel-item">
              <div className="movie-bg">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div 
                  style={{ 
                    position: 'absolute', inset: 0, 
                    background: `linear-gradient(to bottom, transparent 0%, ${movie.color} 100%)`,
                    opacity: 0.6
                  }} 
                />
              </div>
              <div className="movie-content">
                <div className="movie-title">{movie.title}</div>
                <div 
                  className="movie-badge"
                  style={{ 
                    background: movie.type === 'Netflix' ? '#E50914' : 
                               movie.type === 'Disney+' ? '#113CCF' : 
                               movie.type === 'HBO' ? '#5822B4' : '#1DB954' 
                  }}
                >
                  {movie.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background layers */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(45,212,191,0.05) 0%, transparent 50%), transparent',
        zIndex: 1, pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        zIndex: 1, pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {PARTICLES.map(p => (
        <div key={p.id} style={{
          position: 'absolute', bottom: '-10px', left: p.left,
          width: p.size, height: p.size, borderRadius: '50%',
          background: 'var(--gold)', opacity: 0,
          '--drift': p.drift,
          animation: `particle ${p.duration} ${p.delay} infinite linear`,
          zIndex: 1,
        }} />
      ))}

      {/* Big decorative circle */}
      <div style={{
        position: 'absolute', right: '-200px', top: '50%', transform: 'translateY(-50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.08)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.12)',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: 100 }}>
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
            fontSize: 19, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8,
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
            <a 
              href="https://t.me/Emergingstreambot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ fontSize: 16, padding: '16px 36px' }}
            >
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
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{s.label}</div>
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
        zIndex: 10,
      }}>
        <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Découvrir</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
