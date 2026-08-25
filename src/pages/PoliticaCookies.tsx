import SEOHead from '../components/SEOHead';
import PageBanner from '../components/PageBanner';

export default function PoliticaCookies() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead title="Política de Cookies - KONVERXA" />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title="COOKIES"
        watermark="COOKIES"
        titleAccentColor="text-slate-900"
        badge="Uso de Cookies & Navegación"
        headline="Política de Cookies"
        description="Información detallada sobre el uso de cookies y tecnologías similares en nuestro portal corporativo."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Política de Cookies' }
        ]}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Seguridad y privacidad digital"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <p className="text-xs text-slate-500">Última actualización: Julio 2026</p>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">1. ¿Qué son las Cookies?</h2>
            <p>
              Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita un sitio web. Las cookies permiten que el sitio recuerde información sobre su visita, como su idioma preferido y otras opciones de configuración.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">2. Cookies Utilizadas en este Sitio</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
              <li><strong className="text-slate-900">Cookies Estrictamente Necesarias:</strong> Permiten la navegación fluida a través del portal y el uso de sus opciones de seguridad y sesión.</li>
              <li><strong className="text-slate-900">Cookies de Rendimiento y Analítica:</strong> Nos ayudan a comprender cómo interactúan los usuarios con la web recopilando información anónima sobre páginas visitadas y tiempos de permanencia.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">3. Gestión y Desactivación</h2>
            <p>
              Usted puede aceptar, rechazar o configurar el uso de cookies en cualquier momento ajustando la configuración de su navegador web (Chrome, Safari, Firefox, Edge). Tenga en cuenta que desactivar ciertas cookies puede limitar algunas funcionalidades interactivas del sitio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
