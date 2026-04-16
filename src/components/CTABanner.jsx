import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, #0d1117 0%, #1a1508 50%, #0d1117 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
      }} />

      {/* Horizontal lines decoration */}
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute', left: 0, right: 0,
          top: `${10 + i * 20}%`, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.05), transparent)',
        }} />
      ))}

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>🎬</div>
        <h2 style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700, lineHeight: 1.1,
          marginBottom: 20, letterSpacing: '-0.02em',
        }}>
          Prêt à vivre une expérience<br />
          <span style={{
            background: 'linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            animation: 'shimmer 3s linear infinite',
          }}>streaming sans limites ?</span>
        </h2>
        <p style={{ fontSize: 18, color: 'var(--muted)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
          Rejoignez +2 400 familles africaines qui profitent d'Emerging-Stream chaque jour.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/pricing" className="btn-primary" style={{ fontSize: 17, padding: '18px 44px' }}>
            <Play size={20} fill="currentColor" /> Démarrer — Gratuit 24h
          </Link>
          <Link to="/pricing" className="btn-secondary" style={{ fontSize: 17 }}>
            Voir les tarifs <ArrowRight size={16} />
          </Link>
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: 'var(--muted)' }}>
          ✓ Sans carte bancaire &nbsp;•&nbsp; ✓ Sans engagement &nbsp;•&nbsp; ✓ Remboursement 7 jours
        </p>
      </div>
    </section>
  );
}
