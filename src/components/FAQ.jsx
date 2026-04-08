import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'Comment fonctionne l\'essai gratuit 24h ?', a: 'Après votre inscription avec votre nom et contact, vous recevez automatiquement un code d\'accès en moins de 2 minutes. Ce code vous donne un accès complet à tout notre catalogue pendant 24 heures, sans carte bancaire requise.' },
  { q: 'Quels sont les moyens de paiement acceptés ?', a: 'Nous acceptons Stripe (cartes Visa/Mastercard), Orange Money, MTN Mobile Money et d\'autres solutions de paiement mobile locales. Tous les paiements sont sécurisés et chiffrés.' },
  { q: 'Est-ce que ça fonctionne sur connexion lente ?', a: 'Absolument ! Notre technologie d\'optimisation adapte la qualité vidéo à votre connexion. Même avec 1 Mbps, vous pouvez regarder sans coupures. Notre algorithme de compression réduit aussi jusqu\'à 60% la consommation de données.' },
  { q: 'Sur combien d\'appareils puis-je regarder ?', a: 'Cela dépend de votre plan : Starter (1 écran), Premium (3 écrans simultanés), Famille (6 écrans simultanés). Compatible avec smartphones, tablettes, smart TV, ordinateurs et Fire Stick.' },
  { q: 'Puis-je annuler mon abonnement ?', a: 'Oui, sans engagement et sans frais. Vous pouvez annuler à tout moment depuis votre espace client. Votre accès reste actif jusqu\'à la fin de la période payée.' },
  { q: 'Que se passe-t-il après mes 30 jours ?', a: 'Vous recevez un rappel automatique 5 jours avant l\'expiration. Si vous ne renouvelez pas, votre accès est automatiquement désactivé. Vous pouvez vous réabonner à tout moment.' },
  { q: 'Y a-t-il une garantie de remboursement ?', a: 'Oui ! Si vous n\'êtes pas satisfait dans les 7 jours suivant votre abonnement payant, nous vous remboursons intégralement, sans question.' },
  { q: 'Comment contacter le support ?', a: 'Notre équipe est disponible 24h/7j via WhatsApp, email et chat en direct sur le site. Temps de réponse moyen : moins de 10 minutes.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section" style={{ background: 'var(--deep)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="tag">FAQ</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Questions<br /><span className="text-gold">fréquentes</span>
          </h2>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: `1px solid ${open === i ? 'rgba(201,168,76,0.3)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)', overflow: 'hidden', transition: 'border-color 0.2s',
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--white)', fontFamily: 'var(--ff-body)', fontSize: 15, fontWeight: 500,
                textAlign: 'left', gap: 16,
              }}>
                <span>{faq.q}</span>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: open === i ? 'var(--gold-dim)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${open === i ? 'rgba(201,168,76,0.3)' : 'var(--border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  transition: 'all 0.2s',
                }}>
                  {open === i
                    ? <Minus size={14} color="var(--gold)" />
                    : <Plus size={14} color="var(--muted)" />
                  }
                </div>
              </button>

              <div style={{
                maxHeight: open === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}>
                <p style={{ padding: '0 24px 20px', color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48, color: 'var(--muted)', fontSize: 15 }}>
          Vous avez une autre question ?{' '}
          <a href="#" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500 }}>
            Contactez-nous sur WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
