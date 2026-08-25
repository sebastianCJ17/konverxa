import React, { useState } from 'react';
import { JobPosition } from '../types';
import { X, CheckCircle2, Upload, Send } from 'lucide-react';

interface ModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

export default function CareerFormModal({ job, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    experienceYears: '1-3',
    linkedinUrl: '',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Postulación Abierta
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{job.title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                {job.department} • {job.location} • {job.modality}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu.correo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+52 55 1234 5678"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Ciudad de Residencia *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ciudad, País"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Años de Experiencia en BPO / CX</label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 text-xs"
                  >
                    <option value="Sin experiencia">Sin experiencia previa</option>
                    <option value="1-3">1 a 3 años</option>
                    <option value="3-5">3 a 5 años</option>
                    <option value="+5">+5 años</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Perfil de LinkedIn (Opcional)</label>
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/usuario"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                  />
                </div>
              </div>

              {/* Resume File Upload */}
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Adjuntar Currículum (PDF/Word)</label>
                <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-600 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <span className="text-slate-700 text-xs font-semibold block">
                    {formData.fileName ? formData.fileName : 'Haz clic o arrastra tu archivo CV aquí'}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Máximo 10 MB</span>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Carta de Presentación / Breve Mensaje</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos por qué te gustaría unirte al equipo de KONVERXA..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-black/75 hover:bg-black/90 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <span>Enviando postulación...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Postulación</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">¡Postulación Recibida!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Gracias por tu interés en unirte a <span className="text-blue-600 font-bold">KONVERXA</span>. Nuestro equipo de Talento Humano revisará tus antecedentes y se pondrá en contacto contigo a la brevedad.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
