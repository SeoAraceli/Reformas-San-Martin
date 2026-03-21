import React from 'react';
import { Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 text-slate-900 hover:text-emerald-600 transition-colors" aria-label="Inicio - Reformas San Martín de Valdeiglesias">
          <Hammer className="text-emerald-600" size={28} />
          <span className="font-bold text-xl tracking-tight hidden sm:block">Reformas SMV</span>
          <span className="font-bold text-xl tracking-tight sm:hidden">RSMV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          <a href="/#servicios" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Servicios</a>
          <Link to="/reformas-de-cocinas-san-martin-de-valdeiglesias" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Cocinas</Link>
          <a href="/#proyectos" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Proyectos</a>
          <a href="/#opiniones" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Opiniones</a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link to="/#contacto" className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" aria-label="Solicitar presupuesto gratis para reformas">
            Solicitar presupuesto gratis
          </Link>
          <Link to="/#contacto" className="sm:hidden flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-bold text-sm transition-all shadow-md" aria-label="Solicitar presupuesto gratis">
            Presupuesto
          </Link>
        </div>
      </div>
    </header>
  );
}
