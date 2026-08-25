import SEOHead from '../components/SEOHead';
import PageBanner from '../components/PageBanner';

export default function PoliticaPrivacidad() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <SEOHead title="Política de Privacidad - KONVERXA" />

      {/* Header Banner with Breadcrumbs & Outlined Watermark */}
      <PageBanner
        title="PRIVACIDAD"
        watermark="PRIVACIDAD"
        titleAccentColor="text-slate-900"
        badge="Transparencia & Marco Legal"
        headline="Política de Privacidad y Protección de Datos"
        description="Compromiso formal de KONVERXA en el tratamiento confidencial y seguro de la información conforme a estándares internacionales ISO 27001."
        breadcrumbs={[
          { label: 'Inicio', path: '/' },
          { label: 'Política de Privacidad' }
        ]}
        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Protección de datos y ciberseguridad"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <p className="text-xs text-slate-500">Última actualización: Julio 2026</p>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">1. Identidad y Domicilio del Responsable</h2>
            <p>
              KONVERXA BPO & CX Solutions, con domicilio en Av. Paseo de la Reforma 483, Ciudad de México, es responsable del tratamiento y protección de sus datos personales recolectados a través de nuestro sitio web corporativo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">2. Datos Personales Recabados</h2>
            <p>
              Para las finalidades señaladas en la presente política de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente a través de nuestros formularios de contacto, postulaciones laborales o consultas corporativas. Los datos recabados incluyen:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Nombre completo, cargo corporativo y empresa.</li>
              <li>Correo electrónico institucional y número telefónico de contacto.</li>
              <li>Información curricular en caso de postulaciones en el módulo de carrera.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">3. Finalidades del Tratamiento de Datos</h2>
            <p>
              Los datos recabados serán utilizados de manera confidencial exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Atender solicitudes de diagnóstico y propuestas de servicios BPO y CX.</li>
              <li>Evaluar postulaciones de empleo dentro del departamento de Talento Humano.</li>
              <li>Dar seguimiento a compromisos contractuales y acuerdos de nivel de servicio (SLAs).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">4. Medidas de Ciberseguridad ISO 27001</h2>
            <p>
              KONVERXA opera bajo estándares estrictos de seguridad de la información ISO 27001 y PCI-DSS, implementando cifrado de grado bancario (AES-256) y almacenamiento en servidores con control de acceso restrictivo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">5. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada (Rectificación), que la eliminemos de nuestros registros (Cancelación), o bien oponerse al uso de sus datos personales para fines específicos (Oposición). Para ejercer sus derechos ARCO, envíe una solicitud formal a <a href="mailto:privacidad@konverxa.com" className="text-blue-600 underline font-medium">privacidad@konverxa.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
