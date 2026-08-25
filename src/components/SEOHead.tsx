import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEOHead({
  title,
  description = 'KONVERXA - BPO, Contact Center, Customer Experience y Transformación Operativa. Soluciones de alto impacto para corporaciones líderes.',
  keywords = 'BPO, Contact Center, Customer Experience, Transformación Operativa, OneX, IntegralX, Omnicanalidad, Atencion al Cliente, Ventas',
  ogImage = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
}: SEOProps) {
  useEffect(() => {
    document.title = `${title} | KONVERXA Corporate`;

    // Update meta tags dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Schema.org Structured Data
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'KONVERXA',
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      description: description,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+52-55-8900-5000',
        contactType: 'customer service',
        areaServed: ['LATAM', 'ES'],
        availableLanguage: ['Spanish', 'English']
      }
    };

    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, ogImage]);

  return null;
}
