import React, { useState } from 'react';
import { Check, Zap, Crown, Star, ArrowRight } from 'lucide-react';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    badge: null,
    icon: Zap,
    color: '#7a8694',
    price: 2500,
    period: '/mois',
    currency: 'FCFA',
    desc: 'Idéal pour commencer',
    features: [
      'Accès à 5 000+ chaînes',
      'Qualité HD (720p)',
      '1 écran simultané',
      'Support Email',
      'Mise à jour mensuelle',
    ],
    cta: 'Commencer',
    highlight: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Le Plus Populaire',
    icon: Star,
    color: '#c9a84c',
    price: 4500,
    period: '/mois',
    currency: 'FCFA',
    desc: 'La meilleure valeur',
    features: [
      'Accès à 10 000+ chaînes & VOD',
      'Qualité Full HD & 4K',
      '3 écrans simultanés',
      'Support WhatsApp 24/7',
      'Téléchargement offline',
      'Économie données mobiles',
      'Mise à jour hebdomadaire',
    ],
    cta: 'Choisir Premium',
    highlight: true,
  },
  {
    id: 'family',
    name: 'Famille',
    badge: null,
    icon: Crown,
    color: '#a78bfa',
    price: 7500,
    period: '/mois',
    currency: 'FCFA',
    desc: 'Pour toute la famille',
    features: [
      'Tout du plan Premium',
      '6 écrans simultanés',
      'Profils enfants sécurisés',
      'Contrôle parental avancé',
      'Support prioritaire VIP',
      'Accès anticipé nouveautés',
      'Espace stockage 200 Go',
    ],
    cta: 'Choisir Famille',
    highlight: false,
  },
];

const ORDER_BUMP = {
  title: '+ Anti-Coupure Premium',
  desc: 'Serveur de secours automatique — gardez le signal même lors des maintenances.',
  price: 800,
};

export default function Pricing() {
  const [selected, setSelected] = useState(null);
  const [bump, setBump] = useState(false);
  const [step, setStep] = useState('plans'); // plans | pay | upsell | downsell | done

  const plan = PLANS.find(p => p.id === selected);

  const handleSelect = (id) => {
    setSelected(id);
    setStep('pay');
    setTimeout(() => document.getElementById('payment-box')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  };

  const handlePay = () => setStep('upsell');
  const handleUpsellAccept = () => setStep('done');
  const handleUpsellDecline = () => setStep('downsell');
  const handleDownsellAccept = () => setStep('done');
  const handleDownsellDecline = () => setStep('done');

  return (
    <section id="pricing" className="section" style={{ background: 'var(--black)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="tag"><Crown size={12} /> Nos Tarifs</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Choisissez votre<br /><span className="text-gold">formule idéale</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Sans engagement. Annulez quand vous voulez. Remboursement garanti 7 jours.
          </p>
        </div>

        {/* Plans grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 48 }}>
          {PLANS.map(p => {
            const Icon = p.icon;
            const isActive = selected === p.id;
            return (
              <div key={p.id} style={{
                position: 'relative',
                background: p.highlight ? 'linear-gradient(145deg, #1a1e28, #161d26)' : 'var(--card)',
                border: `1px solid ${isActive ? p.color : p.highlight ? 'rgba(201,168,76,0.3)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)', padding: '32px 28px',
                transform: p.highlight ? 'scale(1.03)' : 'scale(1)',
                boxShadow: p.highlight ? '0 20px 60px rgba(201,168,76,0.1)' : 'none',
                transition: 'all 0.2s',
              }}>
                {p.badge && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                    color: '#0a0800', fontSize: 11, fontWeight: 700,
                    padding: '4px 16px', borderRadius: 100, whiteSpace: 'nowrap',
                    letterSpacing: '0.05em',
                  }}>{p.badge}</div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${p.color}18`, border: `1px solid ${p.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color={p.color} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 17 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{p.desc}</div>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontFamily: 'var(--ff-display)', fontSize: 42, fontWeight: 700, color: p.highlight ? 'var(--gold)' : 'var(--white)' }}>
                    {p.price.toLocaleString()}
                  </span>
                  <span style={{ color: 'var(--muted)', fontSize: 14 }}> {p.currency}{p.period}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14 }}>
                      <Check size={15} color={p.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: 'var(--muted)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button className={p.highlight ? 'btn-primary' : 'btn-secondary'} onClick={() => handleSelect(p.id)}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}>
                  {p.cta} <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Payment box / funnel steps */}
        {step !== 'plans' && (
          <div id="payment-box" style={{
            maxWidth: 560, margin: '0 auto',
            background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 'var(--radius-lg)', padding: 36,
            animation: 'fadeUp 0.5s ease both',
          }}>

            {step === 'pay' && plan && (
              <>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 24, marginBottom: 6 }}>
                  Finaliser votre commande
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 28 }}>
                  Plan sélectionné : <strong style={{ color: 'var(--gold)' }}>{plan.name}</strong> — {plan.price.toLocaleString()} FCFA/mois
                </p>

                {/* Order bump */}
                <div style={{
                  background: 'var(--card)', border: '1px dashed rgba(201,168,76,0.4)',
                  borderRadius: 12, padding: '16px 20px', marginBottom: 24,
                  display: 'flex', alignItems: 'flex-start', gap: 14, cursor: 'pointer',
                }} onClick={() => setBump(!bump)}>
                  <input type="checkbox" checked={bump} onChange={() => setBump(!bump)}
                    style={{ width: 18, height: 18, accentColor: 'var(--gold)', marginTop: 2, cursor: 'pointer', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: 'var(--gold)' }}>
                      ➕ {ORDER_BUMP.title} — +{ORDER_BUMP.price.toLocaleString()} FCFA/mois
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{ORDER_BUMP.desc}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, fontSize: 16, fontWeight: 600 }}>
                  <span>Total</span>
                  <span style={{ color: 'var(--gold)' }}>{(plan.price + (bump ? ORDER_BUMP.price : 0)).toLocaleString()} FCFA/mois</span>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
                  {['💳 Stripe', '📱 Orange Money', '📲 MTN MoMo'].map(m => (
                    <div key={m} style={{
                      flex: 1, minWidth: 120, background: 'var(--card)',
                      border: '1px solid var(--border)', borderRadius: 10,
                      padding: '10px 14px', textAlign: 'center', fontSize: 13, color: 'var(--muted)',
                      cursor: 'pointer', transition: 'border-color 0.2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                    >{m}</div>
                  ))}
                </div>

                <button className="btn-primary" onClick={handlePay} style={{ width: '100%', justifyContent: 'center', fontSize: 16 }}>
                  🔒 Payer maintenant — Accès instantané
                </button>
                <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 12 }}>
                  Paiement sécurisé • Remboursement garanti 7 jours
                </p>
              </>
            )}

            {step === 'upsell' && (
              <>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🎁</div>
                  <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 26, marginBottom: 10 }}>
                    Offre Spéciale — Une seule fois !
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                    Passez au plan <strong style={{ color: '#a78bfa' }}>Famille</strong> maintenant et économisez <strong style={{ color: 'var(--gold)' }}>3 mois gratuits</strong>.
                    Partagez avec jusqu'à 6 membres de votre famille.
                  </p>
                </div>
                <div style={{ background: 'var(--card)', borderRadius: 12, padding: 20, marginBottom: 20, textAlign: 'center' }}>
                  <span style={{ fontFamily: 'var(--ff-display)', fontSize: 36, fontWeight: 700, color: '#a78bfa' }}>7 500</span>
                  <span style={{ color: 'var(--muted)' }}> FCFA/mois • 6 écrans</span>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn-secondary" onClick={handleUpsellDecline} style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>
                    Non merci
                  </button>
                  <button className="btn-primary" onClick={handleUpsellAccept} style={{ flex: 2, justifyContent: 'center', fontSize: 14 }}>
                    Oui, je passe au Famille !
                  </button>
                </div>
              </>
            )}

            {step === 'downsell' && (
              <>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>⚡</div>
                  <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 26, marginBottom: 10 }}>
                    Attendez ! Voici une alternative
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                    Ajoutez simplement <strong style={{ color: 'var(--teal)' }}>1 écran supplémentaire</strong> à votre plan actuel pour seulement <strong style={{ color: 'var(--gold)' }}>+1 000 FCFA/mois</strong>.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn-secondary" onClick={handleDownsellDecline} style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>
                    Non, continuer
                  </button>
                  <button className="btn-primary" onClick={handleDownsellAccept} style={{ flex: 2, justifyContent: 'center', fontSize: 14 }}>
                    Oui, ajouter 1 écran
                  </button>
                </div>
              </>
            )}

            {step === 'done' && (
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 28, marginBottom: 12 }}>
                  Commande confirmée !
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                  Vos identifiants d'accès vous ont été envoyés automatiquement.
                  Bon streaming ! 🎬
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #pricing .section-title { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
