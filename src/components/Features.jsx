import React, { useRef, useEffect, useState } from 'react';
import { Wifi, Smartphone, Tv2, Globe, Zap, Shield, Download, Headphones } from 'lucide-react';

const FEATURES = [
  {
    icon: Wifi,
    color: '#c9a84c',
    bg: 'var(--gold-dim)',
    title: 'Connexion Lente ? Aucun Problème',
    desc: 'Notre technologie d\'optimisation garantit un streaming fluide même avec 1 Mbps. Fini les coupures et les bufferings.',
  },
  {
    icon: Smartphone,
    color: '#2dd4bf',
    bg: 'var(--teal-dim)',
    title: 'Économie de Données Mobiles',
    desc: 'Algorithme de compression intelligent : profitez de plus de contenu en consommant jusqu\'à 60% moins de données.',
  },
  {
    icon: Tv2,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
    title: '10 000+ Chaînes & Films',
    desc: 'Un catalogue immense : séries, films, sport, documentaires, chaînes locales et internationales.',
  },
  {
    icon: Globe,
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
    title: 'Accès Mondial',
    desc: 'Contenus de 150+ pays disponibles. Chaînes africaines, françaises, arabes, anglaises et bien plus.',
  },
  {
    icon: Zap,
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.1)',
    title: 'Démarrage Instantané',
    desc: 'Votre accès est livré automatiquement après paiement. Commencez à regarder en moins de 2 minutes.',
  },
  {
    icon: Shield,
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    title: 'Paiement 100% Sécurisé',
    desc: 'Stripe, Orange Money, MTN Mobile Money. Transactions chiffrées et protégées. Remboursement garanti 7 jours.',
  },
  {
    icon: Download,
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.1)',
    title: 'Téléchargement Offline',
    desc: 'Téléchargez vos contenus favoris et regardez-les hors ligne, sans internet.',
  },
  {
    icon: Headphones,
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
    title: 'Support 24h/7j',
    desc: 'Notre équipe est disponible à tout moment via WhatsApp, email ou chat pour vous aider.',
  },
];

function FeatureCard({ icon: Icon, color, bg, title, desc, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', padding: '28px',
      transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color + '40';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 12px 40px ${color}20`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        width: 50, height: 50, borderRadius: 14,
        background: bg, border: `1px solid ${color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20,
        transition: 'transform 0.2s',
      }}>
        <Icon size={22} color={color} />
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: 'var(--deep)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="tag">Pourquoi Emerging-Stream</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Tout ce dont vous avez<br />
            <span className="text-gold">besoin pour streamer</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Une plateforme conçue pour les connexions africaines et le confort mobile.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
