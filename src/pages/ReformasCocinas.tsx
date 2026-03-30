import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChefHat, Droplets, Zap, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReformasCocinas() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-200 selection:text-emerald-900">
      <Helmet>
        <title>Reformas de Cocinas en San Martín de Valdeiglesias | Presupuesto Gratis</title>
        <meta name="description" content="Especialistas en reformas de cocinas en San Martín de Valdeiglesias. Diseños a medida, muebles, fontanería y electricidad. Pide presupuesto sin compromiso." />
        <meta name="keywords" content="reformas de cocinas San Martín de Valdeiglesias, reformar cocina, muebles de cocina, diseño de cocinas, reformas integrales cocinas" />
        <meta property="og:title" content="Reformas de Cocinas en San Martín de Valdeiglesias | Presupuesto Gratis" />
        <meta property="og:description" content="Especialistas en reformas de cocinas en San Martín de Valdeiglesias. Diseños a medida, muebles, fontanería y electricidad. Pide presupuesto sin compromiso." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-200">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-200/20 blur-3xl"></div>
            <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/20 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-sm mb-8 border border-emerald-200/50 shadow-sm">
                  <ChefHat size={16} className="text-emerald-600" />
                  <span>Especialistas en Cocinas</span>
                </div>
                
                <h1 className="text-slate-900 font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-tight">
                  Reformas de cocinas <span className="text-emerald-600">San Martín de Valdeiglesias</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                  Diseñamos y creamos la cocina de tus sueños. Funcionalidad, diseño moderno y materiales de alta durabilidad. Somos tu empresa de confianza para la <strong>reforma de tu cocina en San Martín de Valdeiglesias</strong>.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link to="/#contacto" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Presupuesto Gratis <ArrowRight size={20} />
                  </Link>
                </div>
                
                <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-500" /> Diseño 3D
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-500" /> Materiales Premium
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-500" /> Plazos Cerrados
                  </div>
                </div>
              </div>

              <div className="relative lg:h-[500px] w-full max-w-lg mx-auto lg:max-w-none mt-10 lg:mt-0">
                <div className="relative w-full h-[400px] lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina.jpg" 
                    alt="Reforma de cocina moderna en San Martín de Valdeiglesias" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    fetchpriority="high"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios de reformar la cocina */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                ¿Por qué renovar tu cocina con nosotros?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La cocina es el corazón del hogar. Una buena reforma no solo mejora la estética, sino que optimiza el espacio, facilita la limpieza y aumenta el valor de tu vivienda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <ChefHat size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Diseño Funcional</h3>
                <p className="text-slate-600 leading-relaxed">Optimizamos el triángulo de trabajo (cocción, lavado y almacenaje) para que cocinar sea más cómodo y eficiente.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Droplets size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Fontanería Nueva</h3>
                <p className="text-slate-600 leading-relaxed">Renovamos todas las instalaciones de agua y desagües para evitar futuras averías y garantizar un flujo perfecto.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Electricidad Segura</h3>
                <p className="text-slate-600 leading-relaxed">Actualizamos el cuadro eléctrico y los enchufes adaptándolos a la normativa actual y a los nuevos electrodomésticos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Trabajo */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                Nuestro proceso para tu nueva cocina
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visita y Medición</h3>
                  <p className="text-slate-400">Nos desplazamos a tu domicilio en San Martín de Valdeiglesias para tomar medidas exactas y escuchar tus ideas y necesidades.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Diseño y Presupuesto</h3>
                  <p className="text-slate-400">Elaboramos una propuesta de diseño y un presupuesto detallado sin compromiso, eligiendo los mejores materiales.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ejecución de la Obra</h3>
                  <p className="text-slate-400">Nuestro equipo de profesionales (albañiles, fontaneros, electricistas) realiza la reforma cumpliendo los plazos acordados.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Entrega y Limpieza</h3>
                  <p className="text-slate-400">Entregamos tu nueva cocina completamente limpia y lista para usar, con garantía por escrito de todos los trabajos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de Proyectos Realizados */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Reformas de cocinas realizadas
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Descubre algunos de nuestros últimos proyectos de reformas de cocinas en San Martín de Valdeiglesias. Diseños modernos, funcionales y adaptados a cada espacio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group rounded-3xl overflow-hidden shadow-sm relative h-80">
                <img src="https://www.6mejores.com/wp-content/uploads/2026/03/reformas-de-cocinas-4.jpg" alt="Reforma de cocina moderna con isla en San Martín de Valdeiglesias" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" width="600" height="400" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group rounded-3xl overflow-hidden shadow-sm relative h-80">
                <img src="https://www.6mejores.com/wp-content/uploads/2026/03/reformas-de-cocinas-3.webp" alt="Diseño de cocina minimalista en San Martín de Valdeiglesias" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" width="600" height="400" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group rounded-3xl overflow-hidden shadow-sm relative h-80">
                <img src="https://www.6mejores.com/wp-content/uploads/2026/03/reformas-de-cocinas-1.jpg" alt="Reforma de cocina luminosa y funcional en San Martín de Valdeiglesias" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" width="600" height="400" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group rounded-3xl overflow-hidden shadow-sm relative h-80">
                <img src="https://www.6mejores.com/wp-content/uploads/2026/03/reformas-de-cocinas-.jpg" alt="Cocina elegante con acabados premium en San Martín de Valdeiglesias" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" width="600" height="400" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              ¿Listo para estrenar la cocina de tus sueños?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              No esperes más. Solicita ahora tu presupuesto gratuito y sin compromiso. Nuestro equipo de expertos en San Martín de Valdeiglesias te asesorará en cada paso para hacer realidad tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#contacto" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                Solicitar Presupuesto Gratis <ArrowRight size={24} />
              </Link>
              <a href="tel:+34640839282" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm border border-white/20 text-lg flex items-center justify-center gap-2">
                <Phone size={24} /> Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
