import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Fonctionnalités', to: '/features' },
    { label: 'Tarifs', to: '/pricing' },
    { label: 'Témoignages', to: '/testimonials' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(8,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img 
            src="/emergentlogo.jpeg" 
            alt="EmergingStream Logo" 
            style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover' }} 
          />
          <span style={{
            fontFamily: 'var(--ff-display)', fontSize: 22, fontWeight: 600,
            color: 'var(--white)', letterSpacing: '-0.01em',
          }}>
            Emerging<span style={{ color: 'var(--gold)' }}>Stream</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              color: 'var(--muted)', textDecoration: 'none', fontSize: 14,
              fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l.label}</Link>
          ))}
          <Link to="/pricing" className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>
            Essai Gratuit 24h
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer',
          display: 'none',
        }} className="mobile-menu-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(8,10,15,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)', padding: '20px 24px 28px',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
              color: 'var(--white)', textDecoration: 'none', fontSize: 16, fontWeight: 500,
            }}>{l.label}</Link>
          ))}
          <Link to="/pricing" className="btn-primary" style={{ alignSelf: 'flex-start' }} onClick={() => setOpen(false)}>
            Essai Gratuit 24h
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
