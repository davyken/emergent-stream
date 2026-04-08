import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Aïssatou Mbaye',
    location: 'Dakar, Sénégal',
    avatar: '👩🏾',
    rating: 5,
    text: 'Incroyable ! J\'habitais les bufferings avec mon forfait. Depuis Emerging-Stream, mes séries tournent sans pause. Mes enfants adorent aussi les dessins animés.',
    plan: 'Premium',
  },
  {
    name: 'Kofi Mensah',
    location: 'Accra, Ghana',
    avatar: '👨🏿',
    rating: 5,
    text: 'Le service client WhatsApp est exceptionnel. J\'ai eu une réponse en 3 minutes à minuit. La qualité 4K sur mon TV est parfaite. Vaut chaque franc.',
    plan: 'Famille',
  },
  {
    name: 'Fatima Al-Rashid',
    location: 'Yaoundé, Cameroun',
    avatar: '👩🏽',
    rating: 5,
    text: 'J\'économise vraiment mes données mobiles. Avant je dépensais 10 000 FCFA en data par semaine pour streamer, maintenant 3 000 FCFA suffisent.',
    plan: 'Premium',
  },
  {
    name: 'Jean-Baptiste Ndong',
    location: 'Libreville, Gabon',
    avatar: '👨🏾',
    rating: 5,
    text: 'L\'essai gratuit de 24h m\'a convaincu en 10 minutes. Aucun lag, aucune coupure. J\'ai pris l\'abonnement Premium directement après.',
    plan: 'Premium',
  },
  {
    name: 'Amina Touré',
    location: 'Abidjan, Côte d\'Ivoire',
    avatar: '👩🏿',
    rating: 5,
    text: 'Je regarde les chaînes françaises et ivoiriennes en même temps sur 2 écrans différents. Parfait pour toute la famille.',
    plan: 'Famille',
  },
  {
    name: 'Emmanuel Osei',
    location: 'Lagos, Nigeria',
    avatar: '👨🏾',
    rating: 5,
    text: 'Le téléchargement offline est la fonctionnalité que j\'attendais. Je télécharge le soir en wifi et je regarde dans le bus le matin. Génial.',
    plan: 'Starter',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: 'var(--deep)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="tag"><Star size={12} /> Avis Clients</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Ils ont choisi<br /><span className="text-gold">Emerging-Stream</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Plus de 2 400 familles africaines nous font confiance chaque mois.
          </p>
        </div>

        {/* Masonry-like grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 28,
              transition: 'transform 0.2s, border-color 0.2s',
              animation: `fadeUp 0.6s ${i * 80}ms ease both`,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Quote icon */}
              <Quote size={24} color="var(--gold)" style={{ opacity: 0.4, marginBottom: 16 }} />

              <p style={{ fontSize: 15, color: '#c8c4be', lineHeight: 1.75, marginBottom: 24 }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 36, lineHeight: 1 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.location}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={11} fill="#c9a84c" color="#c9a84c" />)}
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--teal)', fontWeight: 600 }}>{t.plan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div style={{
          marginTop: 64, display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap',
        }}>
          {[
            { emoji: '⭐', val: '4.9/5', label: '2 400+ avis' },
            { emoji: '🏆', val: '#1', label: 'Streaming Afrique 2024' },
            { emoji: '🛡️', val: '100%', label: 'Satisfait ou remboursé' },
          ].map(b => (
            <div key={b.val} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>{b.emoji}</div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: 26, fontWeight: 700, color: 'var(--gold)' }}>{b.val}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
