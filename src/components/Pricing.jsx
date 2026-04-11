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

                <a 
                  href="https://t.me/Emergingstreambot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={p.highlight ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}
                >
                  {p.cta} <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #pricing .section-title { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
