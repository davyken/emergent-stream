import React from 'react';
import { UserPlus, CreditCard, Mail, Play } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    icon: UserPlus,
    color: '#c9a84c',
    bg: 'var(--gold-dim)',
    title: 'Inscrivez-vous',
    desc: 'Entrez votre prénom et votre email ou WhatsApp. C\'est tout. Pas de carte bancaire requise.',
  },
  {
    n: '02',
    icon: Mail,
    color: '#2dd4bf',
    bg: 'var(--teal-dim)',
    title: 'Recevez votre code',
    desc: 'Votre code d\'accès gratuit 24h arrive automatiquement dans les 2 minutes qui suivent.',
  },
  {
    n: '03',
    icon: CreditCard,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
    title: 'Choisissez un plan',
    desc: 'Après votre essai, sélectionnez la formule qui vous convient et payez en toute sécurité.',
  },
  {
    n: '04',
    icon: Play,
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
    title: 'Profitez sans limite',
    desc: 'Accès immédiat. Regardez vos contenus préférés sur tous vos appareils, partout et tout le temps.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: 'var(--black)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="tag">Simple & Rapide</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            En 4 étapes vers<br /><span className="text-gold">votre divertissement</span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 0, position: 'relative',
        }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: 52, left: '12.5%', right: '12.5%', height: 1,
            background: 'linear-gradient(90deg, var(--gold-dim), var(--teal-dim), rgba(167,139,250,0.15), rgba(244,114,182,0.15))',
          }} className="connector-line" />

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} style={{ textAlign: 'center', padding: '0 16px', position: 'relative' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: s.bg, border: `2px solid ${s.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: `0 0 0 8px var(--black)`,
                  position: 'relative', zIndex: 1,
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Icon size={28} color={s.color} />
                  <div style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 22, height: 22, borderRadius: '50%',
                    background: s.color, color: '#000',
                    fontSize: 10, fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{i + 1}</div>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="#lead" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
            <Play size={18} fill="currentColor" /> Commencer maintenant
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
}
