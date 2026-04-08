import React from 'react';
import { Play, Mail, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--border)',
      paddingTop: 64,
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48, marginBottom: 56,
        }} className="footer-grid">

          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img 
                src="/emergentlogo.jpeg" 
                alt="EmergingStream Logo" 
                style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover' }} 
              />
              <span style={{ fontFamily: 'var(--ff-display)', fontSize: 20, fontWeight: 600 }}>
                Emerging<span style={{ color: 'var(--gold)' }}>Stream</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              La plateforme de streaming conçue pour l'Afrique. Fluide, économique et disponible partout.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { Icon: MessageCircle, label: 'WhatsApp' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'var(--card)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', transition: 'all 0.2s', textDecoration: 'none',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--muted)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Service', links: [
                { label: 'Fonctionnalités', href: '#features' },
                { label: 'Tarifs', href: '#pricing' },
                { label: 'Essai Gratuit', href: '#lead' },
                { label: 'FAQ', href: '#faq' },
              ]
            },
            {
              title: 'Légal', links: [
                { label: 'Mentions légales', href: '#' },
                { label: 'Confidentialité', href: '#' },
                { label: 'CGU', href: '#' },
                { label: 'Cookies', href: '#' },
              ]
            },
            {
              title: 'Contact', links: [
                { label: 'WhatsApp Support', href: '#' },
                { label: 'Email', href: 'mailto:support@emerging-stream.com' },
                { label: 'Partenariats', href: '#' },
                { label: 'Presse', href: '#' },
              ]
            },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>{col.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(l => (
                  <a key={l.label} href={l.href} style={{
                    fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12, padding: '24px 0',
          fontSize: 13, color: 'var(--muted)',
        }}>
          <span>© {year} Emerging-Stream. Tous droits réservés.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Mail size={13} />
            <span>support@emerging-stream.com</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
