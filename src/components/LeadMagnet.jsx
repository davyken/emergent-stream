import React, { useState } from 'react';
import { Send, Gift, Clock, Shield } from 'lucide-react';

export default function LeadMagnet() {
  const [form, setForm] = useState({ name: '', contact: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.contact) setSent(true);
  };

  return (
    <section id="lead" className="section" style={{
      background: 'linear-gradient(180deg, var(--black) 0%, var(--deep) 100%)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        }} className="lead-grid">
          {/* Left */}
          <div>
            <div className="tag"><Gift size={12} /> Offre de bienvenue</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              24h d'accès<br /><span className="text-gold">100% gratuit</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              Testez notre catalogue complet pendant 24 heures sans engagement et sans carte bancaire.
              Votre code d'accès vous est envoyé instantanément.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: Clock, text: 'Accès immédiat dès réception du code' },
                { icon: Shield, text: 'Aucun prélèvement automatique' },
                { icon: Gift, text: 'Catalogue complet débloqué pendant 24h' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'var(--gold-dim)', border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={16} color="var(--gold)" />
                  </div>
                  <span style={{ fontSize: 15, color: 'var(--muted)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Telegram CTA */}
          <div className="glass-card" style={{
            background: 'var(--surface)',
            border: '1px solid rgba(201,168,76,0.15)',
            boxShadow: 'var(--shadow-gold)',
            position: 'relative', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '60px 40px'
          }}>
            {/* Decorative corner */}
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 120, height: 120, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
            }} />

            <div style={{ fontSize: 64, marginBottom: 24 }}>📱</div>
            <h3 style={{
              fontFamily: 'var(--ff-display)', fontSize: 32,
              fontWeight: 600, marginBottom: 16,
            }}>Accès Instantané via Telegram</h3>
            <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 32, lineHeight: 1.6 }}>
              Cliquez sur le bouton ci-dessous pour démarrer votre essai gratuit de 24h directement sur notre bot Telegram.
              Aucune attente, code envoyé immédiatement !
            </p>

            <a 
              href="https://t.me/Emergingstreambot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ fontSize: 18, padding: '20px 48px', width: '100%', justifyContent: 'center' }}
            >
              <Send size={20} /> Démarrer mon essai sur Telegram
            </a>
            
            <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 20 }}>
              🔒 Activation 100% sécurisée et gratuite
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .lead-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
