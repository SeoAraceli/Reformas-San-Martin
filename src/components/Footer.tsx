import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">¿Listo para empezar tu reforma en San Martín de Valdeiglesias?</h3>
          <p className="mb-8 text-slate-300 max-w-2xl mx-auto">No esperes más para tener la casa de tus sueños. Contacta con nosotros hoy mismo y descubre lo fácil que es transformar tu hogar con nuestra empresa de reformas en San Martín de Valdeiglesias.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/#contacto" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center">
              Solicitar Presupuesto
            </Link>
            <a href="tel:+34640839282" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> Llamar ahora
            </a>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="mb-2">© 2026 Reformas San Martín de Valdeiglesias. Todos los derechos reservados.</p>
            <p className="text-sm text-slate-500">Diseñado para ofrecer la mejor experiencia y calidad garantizada.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/34640839282" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:bg-[#20bd5a] hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}
