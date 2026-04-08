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

          {/* Right — Form */}
          <div className="glass-card" style={{
            background: 'var(--surface)',
            border: '1px solid rgba(201,168,76,0.15)',
            boxShadow: 'var(--shadow-gold)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative corner */}
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 120, height: 120, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
            }} />

            {!sent ? (
              <>
                <h3 style={{
                  fontFamily: 'var(--ff-display)', fontSize: 28,
                  fontWeight: 600, marginBottom: 8,
                }}>Démarrez votre essai</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 28 }}>
                  Remplissez le formulaire, votre code arrive en moins de 2 minutes.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Votre Prénom</label>
                    <input
                      type="text" placeholder="ex : Jean-Pierre"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                      style={{
                        width: '100%', background: 'var(--card)',
                        border: '1px solid var(--border)', borderRadius: 10,
                        padding: '13px 16px', color: 'var(--white)', fontSize: 15,
                        fontFamily: 'var(--ff-body)', outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email ou WhatsApp</label>
                    <input
                      type="text" placeholder="ex : jean@email.com ou +237 6xx xxx xxx"
                      value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })}
                      required
                      style={{
                        width: '100%', background: 'var(--card)',
                        border: '1px solid var(--border)', borderRadius: 10,
                        padding: '13px 16px', color: 'var(--white)', fontSize: 15,
                        fontFamily: 'var(--ff-body)', outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ marginTop: 8, justifyContent: 'center', fontSize: 16 }}>
                    <Send size={16} /> Recevoir mon code gratuit
                  </button>
                  <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6 }}>
                    🔒 Vos données sont sécurisées et ne seront jamais partagées.
                  </p>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 26, fontWeight: 600, marginBottom: 12 }}>
                  Bienvenue, {form.name} !
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                  Votre code d'accès gratuit a été envoyé à <strong style={{ color: 'var(--gold)' }}>{form.contact}</strong>.
                  Vérifiez vos messages dans les 2 prochaines minutes.
                </p>
                <div style={{ marginTop: 24 }}>
                  <a href="#pricing" className="btn-primary">
                    Voir nos offres Premium →
                  </a>
                </div>
              </div>
            )}
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
