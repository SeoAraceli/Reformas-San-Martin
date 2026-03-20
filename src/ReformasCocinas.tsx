import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Hammer, Ruler, Phone, Mail, MapPin, MessageCircle, ChevronDown, ArrowRight, Star, Award, Clock, Wallet, ShieldCheck, Sparkles, Users } from 'lucide-react';

export default function ReformasCocinas() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Por favor, revisa tu conexión a internet e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-200 selection:text-emerald-900">
      <Helmet>
        <title>Reformas de Cocinas en San Martín de Valdeiglesias | Presupuesto Gratis</title>
        <meta name="description" content="Especialistas en reformas de cocinas en San Martín de Valdeiglesias. Diseñamos y montamos la cocina de tus sueños. Pide presupuesto sin compromiso." />
      </Helmet>
      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-50 pt-24 pb-16 md:pt-36 md:pb-32 overflow-hidden border-b border-slate-200">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-200/20 blur-3xl"></div>
            <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/20 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Text Content */}
              <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-sm mb-8 border border-emerald-200/50 shadow-sm">
                  <Star size={16} className="fill-emerald-600 text-emerald-600" />
                  <span>Empresa líder en reformas integrales</span>
                </div>

                {/* EXACT H1 AS REQUESTED modified for Cocinas */}
                <h1 className="mb-6 leading-tight">
                  <a href="https://reformassanmartindevaldeiglesias.reformas.org.es/reformas-de-cocinas" rel="dofollow" className="text-slate-900 font-bold text-4xl md:text-6xl no-underline hover:text-slate-700 transition-colors">
                    Reformas de Cocinas en San Martín de Valdeiglesias
                  </a>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                  Somos los especialistas en <strong>reformas de cocinas en San Martín de Valdeiglesias</strong> de referencia. Transformamos tu cocina en un espacio moderno, funcional y acogedor. <span className="font-semibold text-slate-800">Calidad garantizada</span> y más de 20 años de experiencia diseñando cocinas a medida.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#contacto" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Solicitar Presupuesto Gratis <ArrowRight size={20} />
                  </a>
                  <a href="tel:600000000" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all shadow-sm border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <Phone size={20} className="text-emerald-600" /> Llamar ahora
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-500" /> Presupuesto sin compromiso
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-500" /> Garantía por escrito
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative lg:h-[600px] w-full max-w-lg mx-auto lg:max-w-none mt-10 lg:mt-0">
                {/* Main Image */}
                <div className="relative w-full h-[400px] lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10"></div>
                  <img
                    src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina.jpg"
                    alt="Proyecto de reforma de cocina en San Martín de Valdeiglesias"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-4 right-4 md:right-auto md:-bottom-10 md:-left-10 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                      <Hammer size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-slate-900">+20</p>
                      <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">Años de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especialistas en Reformas */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                  <img
                    src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina-antes-y-despues.jpg"
                    alt="Especialistas en reformas de cocinas"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
                {/* Decoración */}
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-100 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-10"></div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm mb-6 border border-indigo-100">
                  <ShieldCheck size={16} />
                  <span>Diseño a Medida</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight text-center lg:text-left">
                  Especialistas en <span className="text-emerald-600">Reformas de Cocinas en San Martín de Valdeiglesias</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 text-center lg:text-left">
                  En <strong>Reformas San Martín de Valdeiglesias</strong> sabemos que la cocina es el corazón del hogar. Por eso, nos dedicamos a diseñar y crear cocinas que combinan estética, funcionalidad y durabilidad.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10 text-center lg:text-left">
                  Nuestro equipo gestiona integralmente la reforma de tu cocina: demolición, fontanería, electricidad, alicatado y montaje de mobiliario y electrodomésticos, para que no tengas que coordinar diferentes gremios.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Materiales Premium</h4>
                      <p className="text-sm text-slate-600">Trabajamos con las mejores marcas del mercado.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Equipo Propio</h4>
                      <p className="text-sm text-slate-600">Especialistas cualificados en cada gremio.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center lg:text-left">
                  <a href="#contacto" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group bg-emerald-50 px-6 py-4 sm:py-3 rounded-xl hover:bg-emerald-100">
                    Pide tu presupuesto sin compromiso <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos / Beneficios */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                ¿Por qué elegirnos en <span className="text-emerald-400">San Martín de Valdeiglesias</span>?
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Transformamos la complejidad de una obra en una experiencia fluida, transparente y emocionante. Descubre los pilares que nos han convertido en la empresa de reformas de referencia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">20 Años de Experiencia</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Dos décadas transformando hogares y negocios en la zona. Esta dilatada trayectoria nos permite anticiparnos a cualquier imprevisto y garantizar un resultado impecable.</p>
              </article>

              {/* Card 2 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Cumplimos los Plazos</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Sabemos que tu tiempo es oro. Planificamos cada fase de la obra al milímetro para entregarte las llaves exactamente en la fecha acordada, sin excusas.</p>
              </article>

              {/* Card 3 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Wallet size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Sin Sobrecostes</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Transparencia total desde el primer minuto. Te ofrecemos un presupuesto cerrado y detallado para que tengas el control absoluto de tu inversión, sin sorpresas.</p>
              </article>

              {/* Card 4 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Comunicación Constante</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Se acabó la incertidumbre. Te asignamos un interlocutor único que te mantendrá informado del avance diario de tu proyecto, resolviendo tus dudas al instante.</p>
              </article>

              {/* Card 5 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Compromiso Garantizado</h3>
                <p className="text-slate-400 leading-relaxed text-sm">No solo hacemos obras, construimos confianza. Respaldamos nuestro trabajo con garantías por escrito, asegurando que cada acabado cumpla con los más altos estándares.</p>
              </article>

              {/* Card 6 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Experiencia Sin Estrés</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Cuidamos cada detalle de tu reforma para que el proceso sea agradable. Protegemos tu vivienda, mantenemos la limpieza y minimizamos las molestias al máximo.</p>
              </article>

              {/* Card 7 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Equipo Profesional</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Contamos con una plantilla propia de especialistas altamente cualificados en todos los gremios: albañilería, fontanería, electricidad y diseño de interiores.</p>
              </article>

              {/* Card 8 */}
              <article className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Ruler size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Soluciones a Medida</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Tu espacio, tus reglas. Escuchamos tus necesidades y estilo de vida para diseñar un proyecto completamente personalizado que maximice la funcionalidad y la estética.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Nuestros Servicios en Cocinas */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Nuestros Servicios para la Reforma de tu Cocina
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nos ocupamos de todos los detalles técnicos y decorativos para que tengas la cocina que siempre has soñado. Coordinamos todo el proceso en San Martín de Valdeiglesias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina.jpg" alt="Diseño de Cocinas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Diseño y Proyección 3D</h3>
                    <p className="text-slate-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Visualiza tu nueva cocina antes de empezar la obra. Optimizamos el espacio y la distribución.</p>
                  </div>
                </div>
              </article>

              {/* Service 2 */}
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina-antes-y-despues.jpg" alt="Mobiliario a Medida" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Mobiliario a Medida</h3>
                    <p className="text-slate-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Fabricamos e instalamos armarios duraderos, con los mejores herrajes y acabados premium.</p>
                  </div>
                </div>
              </article>

              {/* Service 3 */}
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reformas-integrales-garantia-de-por-vida.jpg" alt="Encimeras y Materiales" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Encimeras y Revestimientos</h3>
                    <p className="text-slate-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Instalación de Silestone, Dekton, granito y cerámicas de alta calidad para un acabado espectacular.</p>
                  </div>
                </div>
              </article>

              {/* Service 4 */}
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-de-reformas-reformas-integrales.jpg" alt="Fontanería y Electricidad" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Fontanería y Electricidad</h3>
                    <p className="text-slate-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Renovamos completamente las instalaciones para asegurar eficiencia y cumplimiento de normativas.</p>
                  </div>
                </div>
              </article>

              {/* Service 5 */}
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reformas-carpinteria-y-suelos.jpg" alt="Suelos para Cocina" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Suelos y Pavimentos</h3>
                    <p className="text-slate-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Colocación de porcelánicos resistentes, suelos vinílicos o microcemento ideales para cocinas.</p>
                  </div>
                </div>
              </article>

              {/* Service 6 */}
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-salon-antes-y-despues-2.jpg" alt="Apertura y Espacios Abiertos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Cocinas Abiertas</h3>
                    <p className="text-slate-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Derribo de tabiques para unir salón y cocina, creando un espacio diáfano y luminoso.</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-16 text-center px-4">
              <a href="#contacto" className="flex w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg group">
                Solicitar presupuesto para mi cocina <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Proyectos Realizados / Antes y Después */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200/50">
                <Sparkles size={16} className="text-emerald-600" />
                <span>Casos de Éxito</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Nuestros Proyectos: El Antes y el Después
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Una imagen vale más que mil palabras. Descubre cómo transformamos espacios anticuados en hogares modernos, funcionales y llenos de luz en San Martín de Valdeiglesias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Proyecto 1: Cocina */}
              <article className="bg-slate-50 rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina-antes-y-despues.jpg"
                    alt="Reforma de cocina antes y después"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Reforma de Cocina
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Modernización y Apertura de Espacios</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Renovación completa de cocina anticuada. Se derribaron tabiques para crear un concepto abierto, maximizando la luz natural. Instalación de mobiliario a medida, isla central y electrodomésticos de alta eficiencia.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-emerald-500 shrink-0"/> Fontanería y electricidad nuevas</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-emerald-500 shrink-0"/> Suelo porcelánico imitación madera</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-emerald-500 shrink-0"/> Iluminación LED integrada</li>
                  </ul>
                </div>
              </article>

              {/* Proyecto 2: Salón */}
              <article className="bg-slate-50 rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-salon-antes-y-despues-2.jpg"
                    alt="Reforma de salón antes y después"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Reforma de Salón
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Transformación Integral de Salón</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Actualización de un salón clásico a un espacio contemporáneo y acogedor. Alisado de paredes, eliminación de gotelé, nueva distribución y diseño de iluminación para crear diferentes ambientes.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-emerald-500 shrink-0"/> Alisado de paredes (sin gotelé)</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-emerald-500 shrink-0"/> Instalación de tarima flotante AC5</li>
                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-emerald-500 shrink-0"/> Carpintería interior lacada en blanco</li>
                  </ul>
                </div>
              </article>
            </div>

            <div className="mt-16 text-center px-4">
              <a href="#contacto" className="flex w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg group">
                Quiero un cambio así en mi hogar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-slate-500 mt-4">Estudio y presupuesto gratuito en San Martín de Valdeiglesias</p>
            </div>
          </div>
        </section>

        {/* Galería de Trabajos */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Galería de Trabajos
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Un vistazo a la calidad de nuestros acabados y la atención al detalle en cada uno de los proyectos que realizamos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl overflow-hidden shadow-sm h-72">
                <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-de-reformas-albalineria.jpg" alt="Trabajos de albañilería en San Martín de Valdeiglesias" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-sm h-72">
                <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-de-reformas-.jpg" alt="Reformas de calidad y acabados premium" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-sm h-72 sm:col-span-2 lg:col-span-1">
                <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-reformas-integrales-.jpg" alt="Reformas integrales llave en mano" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="mt-16 text-center px-4">
              <a href="#contacto" className="flex w-full sm:inline-flex sm:w-auto justify-center items-center gap-2 text-slate-900 font-bold hover:text-emerald-600 transition-colors group border-2 border-slate-900 hover:border-emerald-600 px-8 py-4 rounded-full text-center">
                Cuéntanos tu idea y la hacemos realidad <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonios / Reviews */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Opiniones de clientes sobre nuestras reformas en San Martín de Valdeiglesias
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La satisfacción de quienes confían en nosotros es nuestra mejor garantía. Descubre las opiniones sobre nuestros proyectos de reformas integrales, baños y cocinas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <article className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-6 text-amber-400">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">
                  "Contratamos a <strong>Reformas San Martín de Valdeiglesias</strong> para la renovación completa de nuestra casa y el resultado ha sido espectacular. Cumplieron los plazos y el equipo fue muy profesional desde el primer día."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    MC
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">María del Carmen</h4>
                    <p className="text-sm text-slate-500">Reforma Integral en San Martín de Valdeiglesias</p>
                  </div>
                </div>
              </article>

              {/* Review 2 */}
              <article className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-6 text-amber-400">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">
                  "Excelentes profesionales. Me reformaron el baño y la cocina en tiempo récord. Acabados de primera calidad, muy limpios trabajando y siempre dispuestos a asesorar sobre los mejores materiales."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    JL
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">José Luis</h4>
                    <p className="text-sm text-slate-500">Reforma Baño y Cocina en San Martín de Valdeiglesias</p>
                  </div>
                </div>
              </article>

              {/* Review 3 */}
              <article className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-6 text-amber-400">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">
                  "Pedí varios presupuestos y me decidí por ellos por la confianza que me transmitieron. Ha sido un acierto total, mi local comercial ha quedado increíble y listo para la apertura a tiempo."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    AG
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Ana García</h4>
                    <p className="text-sm text-slate-500">Reforma Local Comercial en San Martín de Valdeiglesias</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SEO Local - Barrios */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-200 overflow-hidden relative">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-sm mb-6 border border-emerald-200/50">
                  <MapPin size={16} className="text-emerald-600" />
                  <span>Cobertura Total</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                  Empresa de reformas en todos los barrios de <span className="text-emerald-600">San Martín de Valdeiglesias</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                  No importa dónde te encuentres. Nuestro equipo técnico y operativo se desplaza a cualquier barrio, urbanización o finca del municipio para hacer realidad tu proyecto de reforma integral, de baño o cocina con la máxima agilidad y sin costes de desplazamiento ocultos.
                </p>
                <a href="#contacto" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group bg-emerald-50 px-6 py-4 sm:py-3 rounded-xl hover:bg-emerald-100">
                  Solicitar presupuesto gratuito <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="md:w-2/3 w-full mt-8 md:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {[
                    "Casco Urbano / Centro Histórico",
                    "Urbanización Costa de Madrid",
                    "Urbanización San Ramón",
                    "Urbanización Javacruz",
                    "Entorno del Pantano de San Juan",
                    "Los Mirlos / El Puerto",
                    "Zonas residenciales periféricas",
                    "Fincas y chalets independientes"
                  ].map((barrio, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors group cursor-default shadow-sm hover:shadow-md">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 transition-all shrink-0">
                        <MapPin size={20} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{barrio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Preguntas Frecuentes sobre Reformas en San Martín de Valdeiglesias
              </h2>
              <p className="text-lg text-slate-600">Resolvemos tus dudas sobre nuestros servicios de reforma integral, baños y cocinas.</p>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg text-slate-800 hover:text-emerald-600 transition-colors">
                  <span>¿Cuánto tiempo se tarda en realizar una reforma integral?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-emerald-600">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-slate-600 p-6 pt-0 border-t border-slate-100 leading-relaxed">
                  El tiempo estimado depende de la magnitud del proyecto. Una reforma integral estándar puede durar entre 4 y 8 semanas. En nuestra empresa de <strong>reformas en San Martín de Valdeiglesias</strong> nos comprometemos a establecer un cronograma claro desde el primer día y cumplir los plazos de forma estricta, minimizando las molestias.
                </div>
              </details>

              <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg text-slate-800 hover:text-emerald-600 transition-colors">
                  <span>¿Ofrecéis presupuesto sin compromiso?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-emerald-600">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-slate-600 p-6 pt-0 border-t border-slate-100 leading-relaxed">
                  Sí, totalmente. Nos desplazamos a tu vivienda o local para evaluar el trabajo necesario y te entregamos un presupuesto detallado y transparente, sin ningún tipo de coste ni compromiso por tu parte.
                </div>
              </details>

              <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg text-slate-800 hover:text-emerald-600 transition-colors">
                  <span>¿Qué tipo de servicios de reforma realizáis?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-emerald-600">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-slate-600 p-6 pt-0 border-t border-slate-100 leading-relaxed">
                  Como expertos en <strong>reformas en San Martín de Valdeiglesias</strong>, abarcamos todos los gremios: albañilería, fontanería, electricidad, pintura, carpintería, instalación de suelos y climatización. Realizamos tanto reformas parciales (baños, cocinas) como integrales llave en mano.
                </div>
              </details>

              <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg text-slate-800 hover:text-emerald-600 transition-colors">
                  <span>¿Gestionáis las licencias y permisos de obra?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-emerald-600">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-slate-600 p-6 pt-0 border-t border-slate-100 leading-relaxed">
                  Sí, nuestro equipo profesional te asesora y puede encargarse de la tramitación de todas las licencias y permisos municipales necesarios para que la obra se realice con total legalidad y tranquilidad.
                </div>
              </details>

              <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-lg text-slate-800 hover:text-emerald-600 transition-colors">
                  <span>¿Ofrecéis garantía sobre los trabajos realizados?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-emerald-600">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-slate-600 p-6 pt-0 border-t border-slate-100 leading-relaxed">
                  Por supuesto. Todos nuestros trabajos cuentan con una garantía por escrito. Nuestra prioridad es tu tranquilidad, por lo que utilizamos materiales de primera y mano de obra cualificada para asegurar un resultado duradero.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                  Solicita tu Presupuesto de Reformas en San Martín de Valdeiglesias
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Ponte en contacto con nosotros para contarnos tu proyecto. En nuestra empresa de reformas en San Martín de Valdeiglesias estamos listos para hacer realidad tus ideas con la máxima profesionalidad y garantía de satisfacción.
                </p>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-12">
                  <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                    <CheckCircle size={20} className="text-emerald-600" />
                    ¿Por qué solicitar presupuesto ahora?
                  </h4>
                  <ul className="text-emerald-700 space-y-2 text-sm">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Es 100% gratuito y sin ningún compromiso.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Recibirás asesoramiento personalizado de expertos.</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Te daremos un precio cerrado y transparente.</li>
                  </ul>
                </div>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-5">
                    <div className="bg-slate-50 p-4 rounded-2xl text-emerald-600 shrink-0 border border-slate-100 shadow-sm">
                      <MapPin size={28} />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Dirección</h4>
                      <p className="text-slate-600">C. de la Corredera Baja, 28680 San Martín de Valdeiglesias, Madrid</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="bg-slate-50 p-4 rounded-2xl text-emerald-600 shrink-0 border border-slate-100 shadow-sm">
                      <Phone size={28} />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Teléfono</h4>
                      <p className="text-slate-600">600 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="bg-slate-50 p-4 rounded-2xl text-emerald-600 shrink-0 border border-slate-100 shadow-sm">
                      <Mail size={28} />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Email</h4>
                      <p className="text-slate-600">info@reformassanmartindevaldeiglesias.reformas.org.es</p>
                    </div>
                  </div>
                </div>

                {/* Mapa SEO Local */}
                <div className="w-full h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200 relative">
                  <iframe
                    src="https://maps.google.com/maps?q=C.%20de%20la%20Corredera%20Baja,%2028680%20San%20Mart%C3%ADn%20de%20Valdeiglesias,%20Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación de Reformas San Martín de Valdeiglesias"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>

              <div className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

                {isSuccess ? (
                  <div className="relative z-10 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado correctamente!</h3>
                    <p className="text-emerald-100 mb-6">
                      Gracias por contactar con nosotros. Nos pondremos en contacto contigo lo antes posible para hablar sobre tu proyecto.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <input type="hidden" name="access_key" value="2ea846be-9eb7-46f7-884e-430c4d1a0347" />

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="Tu teléfono"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 text-sm">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                    >
                      {isSubmitting ? 'Enviando...' : 'Quiero mi presupuesto gratuito'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Otras delegaciones */}
        <section className="bg-white pt-10 pb-16">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Otras delegaciones</h3>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 justify-center mb-4">
              <a href="https://reformasusera.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Usera</a>
              <a href="https://reformasvaldemoro.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Valdemoro</a>
              <a href="https://reformasbarajas.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Barajas</a>
              <a href="https://reformastorrejondeardoz.com.es/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Torrejón de Ardoz</a>
              <a href="https://reformasalcaladehenares.com.es/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Alcalá de Henares</a>
              <a href="https://reformasvallecas.reformas.org.es/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Vallecas</a>
              <a href="https://reformascoslada.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Coslada</a>
              <a href="https://reformasaranjuez.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Aranjuez</a>
              <a href="https://reformaspinto.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Pinto</a>
              <a href="https://reformasarroyomolinos.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Arroyomolinos</a>
              <a href="https://reformassevillalanueva.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Sevilla la Nueva</a>
              <a href="https://reformasnavalcarnero.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Navalcarnero</a>
              <a href="https://reformasciempozuelos.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Ciempozuelos</a>
              <a href="https://reformashumanes.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Humanes</a>
              <a href="https://reformassanmartindelavega.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas San Martín de la Vega</a>
              <a href="https://reformasgrinon.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Griñón</a>
              <a href="https://reformaselalamo.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas El Álamo</a>
              <a href="https://reformasmadrid.nom.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Madrid</a>
              <a href="https://reformastorrejondelacalzada.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Torrejón de la Calzada</a>
              <a href="https://reformasguadalajara.com.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Guadalajara</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">¿Listo para empezar tu reforma en San Martín de Valdeiglesias?</h3>
          <p className="mb-8 text-slate-300 max-w-2xl mx-auto">No esperes más para tener la casa de tus sueños. Contacta con nosotros hoy mismo y descubre lo fácil que es transformar tu hogar con nuestra empresa de reformas en San Martín de Valdeiglesias.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#contacto" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center">
              Solicitar Presupuesto
            </a>
            <a href="tel:600000000" className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
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
        href="https://wa.me/34600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:bg-[#20bd5a] hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
