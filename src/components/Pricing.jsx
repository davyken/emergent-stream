import React, { useState } from 'react';
import { Check, Zap, Crown, Star, ArrowRight, X, Copy, CheckCircle } from 'lucide-react';

function CopyButton({ command }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div 
      onClick={handleCopy}
      style={{ 
        background: 'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%)',
        border: '1px solid rgba(201,168,76,0.3)',
        borderRadius: 10, padding: '10px 14px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.2s',
        minWidth: 160,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <code style={{ color: 'var(--gold)', fontSize: 14, fontWeight: 700 }}>{command}</code>
      <span style={{ fontSize: 12, color: copied ? '#34d399' : 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
        {copied ? <CheckCircle size={12} /> : <Copy size={12} />}
        {copied ? 'Copié!' : 'Copier'}
      </span>
    </div>
  );
}

function StepCard({ step, title, desc, children }) {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 14, padding: 16,
      display: 'flex', alignItems: 'flex-start', gap: 14,
      transition: 'all 0.2s',
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 10,
        background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
        color: '#0a0800', fontSize: 14, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>{step}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--white)', marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 10 }}>{desc}</div>
        {children}
      </div>
    </div>
  );
}

const PLANS = [
  {
    id: 'trial',
    name: 'Dernière offre gratuite 24h',
    badge: null,
    icon: Zap,
    color: '#2dd4bf',
    price: 0,
    period: '/24h',
    currency: 'FCFA',
    desc: 'Accès à toutes les fonctionnalités du pass Basic',
    features: [
      'Accès à toutes les fonctionnalités du pass Basic',
    ],
    cta: 'Commencer l\'essai',
    highlight: false,
  },
  {
    id: 'standard',
    name: 'Pass Basic',
    badge: null,
    icon: Star,
    color: '#c9a84c',
    price: 1000,
    period: '/mois',
    currency: 'FCFA',
    desc: 'Idéal pour commencer',
    features: [
      'Accès à tout le contenu',
      'Téléchargement de contenus compressés (sans perte de qualité)',
      'Streaming en qualité standard',
    ],
    cta: 'Choisir Basic',
    highlight: false,
  },
  {
    id: 'premium',
    name: 'Pass Premium',
    badge: 'Le Plus Populaire',
    icon: Crown,
    color: '#c9a84c',
    price: 2500,
    period: '/mois',
    currency: 'FCFA',
    desc: 'La meilleure valeur',
    features: [
      'Tout ce que le Basic offre',
      '2 connexions simultanées',
      'Streaming en haute qualité',
      'Suggère des contenus à ajouter à la plateforme',
      'Priorité pour l\'assistance',
    ],
    cta: 'Choisir Premium',
    highlight: true,
  },
];

export default function Pricing() {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowModal(true);
  };

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
            return (
              <div key={p.id} style={{
                position: 'relative',
                background: p.highlight ? 'linear-gradient(145deg, #1a1e28, #161d26)' : 'var(--card)',
                border: `1px solid ${p.highlight ? 'rgba(201,168,76,0.3)' : 'var(--border)'}`,
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

                <button 
                  onClick={() => handlePlanClick(p)}
                  className={p.highlight ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}
                >
                  {p.cta} <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)',
        }}>
          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 32, width: '90%', maxWidth: 420,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--white)' }}>
                {selectedPlan?.name}
              </h3>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 14, color: 'var(--muted)', marginBottom: 8 }}>Nom complet</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 8,
                    border: '1px solid var(--border)', background: 'var(--deep)',
                    color: 'var(--white)', fontSize: 15, outline: 'none',
                  }}
                  placeholder="Votre nom"
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 14, color: 'var(--muted)', marginBottom: 8 }}>Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 8,
                    border: '1px solid var(--border)', background: 'var(--deep)',
                    color: 'var(--white)', fontSize: 15, outline: 'none',
                  }}
                  placeholder="votre@email.com"
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 14, color: 'var(--muted)', marginBottom: 8 }}>Téléphone</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 8,
                    border: '1px solid var(--border)', background: 'var(--deep)',
                    color: 'var(--white)', fontSize: 15, outline: 'none',
                  }}
                  placeholder="+237 6XX XXX XXX"
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: 16 }}>
                Confirmer
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Instructions Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
        }}>
          <div style={{
            background: 'linear-gradient(145deg, #1a1e28 0%, #12151c 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 24, padding: 32, width: '90%', maxWidth: 520,
            boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.05)',
            maxHeight: '90vh', overflowY: 'auto',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
                  🎬 Activation du abonnement
                </h3>
                <p style={{ fontSize: 13, color: 'var(--muted)' }}>Suivez ces étapes pour accéder à votre plan</p>
              </div>
              <button onClick={() => setShowModal(false)} style={{ 
                background: 'rgba(255,255,255,0.05)', border: 'none', 
                color: 'var(--muted)', cursor: 'pointer', borderRadius: 8, padding: 8 
              }}>
                <X size={20} />
              </button>
            </div>

            {/* Order Summary - Elegant Card */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.05) 100%)',
              borderRadius: 16, padding: 20, marginBottom: 24, 
              border: '1px solid rgba(201,168,76,0.3)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, 
                background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)' }} />
              <div style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.1em', 
                textTransform: 'uppercase', marginBottom: 16 }}>Résumé de votre commande</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Plan</div>
                  <div style={{ fontSize: 15, color: 'var(--white)', fontWeight: 600 }}>{selectedPlan?.name}</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Montant</div>
                  <div style={{ fontSize: 15, color: 'var(--gold)', fontWeight: 700 }}>{selectedPlan?.price === 0 ? 'Gratuit' : `${selectedPlan?.price.toLocaleString()} FCAF`}</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Nom</div>
                  <div style={{ fontSize: 13, color: 'var(--white)' }}>{formData.name}</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Téléphone</div>
                  <div style={{ fontSize: 13, color: 'var(--white)' }}>{formData.phone}</div>
                </div>
              </div>
              <div style={{ marginTop: 12, background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Email</div>
                <div style={{ fontSize: 13, color: 'var(--white)' }}>{formData.email}</div>
              </div>
            </div>

            {/* Steps with beautiful styling */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <StepCard step={1} title="Démarrer le bot" desc="Ouvrez Telegram et appuyez sur le bouton ci-dessous pour démarrer">
                <CopyButton command="/start" />
              </StepCard>
              
              <StepCard step={2} title="Fournir vos informations" desc="Le bot vous demandera votre nom, téléphone et email — répondez simplement">
                <span style={{ fontSize: 24 }}>📝</span>
              </StepCard>
              
              <StepCard step={3} title="Voir les abonnements" desc="Cliquez sur le lien du canal OU copiez cette commande">
                <CopyButton command="/abonnements" />
              </StepCard>
              
              <StepCard step={4} title="Choisir votre forfait" desc="Sélectionnez le plan souhaité — le bot vous enverra le numéro de paiement">
                <span style={{ fontSize: 24 }}>💳</span>
              </StepCard>
              
              <StepCard step={5} title="Effectuer le paiement" desc="Faites le paiement via le numéro reçu et envoyez la capture d'écran au bot">
                <span style={{ fontSize: 24 }}>📸</span>
              </StepCard>
              
              <StepCard step={6} title="Recevoir vos accès" desc="En moins de 2 minutes, recevez le lien de la plateforme et votre code d'activation">
                <span style={{ fontSize: 24 }}>🎉</span>
              </StepCard>
            </div>

            <a 
              href="https://t.me/Emergingstreambot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ 
                width: '100%', marginTop: 24, justifyContent: 'center', fontSize: 16,
                padding: '16px 32px', fontWeight: 600,
                background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                color: '#0a0800',
              }}
            >
              🚀 Ouvrir Telegram maintenant
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          #pricing .section-title { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}