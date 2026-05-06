/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar,
  Music,
  Video, 
  Camera, 
  Smartphone, 
  Users, 
  Play, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Star,
  Quote,
  Clock,
  Zap,
  Globe
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

// --- Constants ---
const SERVICES: Service[] = [
  {
    id: 'commercial',
    title: 'VIDEOS COMERCIALES',
    description: 'Impulsa tu marca con vídeos que comunican y venden.',
    icon: <Video className="w-8 h-8" />
  },
  {
    id: 'social',
    title: 'CONTENIDO PARA REDES',
    description: 'Vídeos verticales y creativos para Instagram, TikTok, YouTube y más.',
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    id: 'events',
    title: 'COBERTURA DE EVENTOS',
    description: 'Capturo los mejores momentos con calidad profesional.',
    icon: <Calendar className="w-8 h-8" />
  },
  {
    id: 'corporate',
    title: 'VIDEO CORPORATIVO',
    description: 'Muestra la identidad de tu empresa con vídeos impactantes.',
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 'musical',
    title: 'VIDEO MUSICAL',
    description: 'Producción de videoclips con estilo, edición y storytelling.',
    icon: <Music className="w-8 h-8" />
  },
  {
    id: 'photo',
    title: 'FOTOGRAFÍA',
    description: 'Fotografía profesional para productos, eventos y más.',
    icon: <Camera className="w-8 h-8" />
  }
];

const PROJECTS: Project[] = [
  { id: '1', title: 'Campaña Moda Urbana', category: 'Comercial', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Restaurante Gourmet', category: 'Redes Sociales', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Festival de Música', category: 'Evento', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Lanzamiento Tech', category: 'Corporativo', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Laura Méndez',
    role: 'Marketing Manager',
    text: '"Crisrey entendió desde el primer momento lo que buscábamos. Sus vídeos superaron nuestras expectativas."',
    avatar: 'https://i.pravatar.cc/150?u=laura'
  },
  {
    id: 't2',
    name: 'Carlos Ruiz',
    role: 'Influencer',
    text: '"La edición es de otro nivel. Mis redes han crecido exponencialmente desde que trabajamos juntos."',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  }
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.007L0 24l6.117-1.605A11.803 11.803 0 0012.05 24c6.634 0 12.03-5.394 12.033-12.03a11.85 11.85 0 00-3.518-8.413z" />
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
          <span className="text-white">CRISREY</span>
          <span className="text-red-600">CLIPS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105">
            HABLEMOS
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 md:hidden py-8 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-semibold hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="mb-16">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-white font-black tracking-[0.3em] text-xs uppercase mb-4 block border-l-2 border-red-600 pl-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center pt-24">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-black tracking-[0.5em] text-sm md:text-base mb-6 uppercase drop-shadow-lg"
          >
            CREO HISTORIAS QUE INSPIRAN, VENDEN Y CONECTAN
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
          >
            VIDEOS QUE <br/>
            <span className="text-red-600">CONECTAN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl text-white mb-12 font-medium"
          >
            Soy Crisrey, creador de contenido audiovisual en Gran Canaria. Ayudo a marcas y creadores a destacar con vídeos que emocionan y generan resultados.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => window.open('https://wa.me/34641445583', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-black tracking-wider flex items-center gap-3 transition-all transform hover:scale-105 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              QUIERO MI VIDEO AHORA <WhatsAppIcon className="w-5 h-5" />
            </button>
            <button className="border border-white/20 hover:border-white/40 glass-card px-10 py-5 rounded-full font-black tracking-wider transition-all w-full sm:w-auto">
              VER PORTAFOLIO
            </button>
          </motion.div>

          {/* Social Links Sub-Hero */}
          <div className="mt-20 flex justify-center gap-8">
            {[Instagram, Youtube, MessageCircle].map((Icon, idx) => (
              <motion.a 
                key={idx}
                href="#" 
                whileHover={{ y: -5, color: '#ef4444' }}
                className="text-gray-500 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Floating Sidebar Indicators */}
        <div className="hidden lg:flex flex-col absolute right-10 top-1/2 -translate-y-1/2 z-30 gap-10 text-xs font-bold tracking-[0.2em] uppercase origin-right rotate-90">
          <span className="text-white/40 flex items-center gap-2">WhatsApp <span className="w-8 h-[1px] bg-white/20" /></span>
          <span className="text-white/40 flex items-center gap-2">Instagram <span className="w-8 h-[1px] bg-white/20" /></span>
        </div>
      </section>

      {/* Values/Stats Section */}
      <section className="bg-zinc-950 border-y border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12 text-center md:text-left">
          {[
            { icon: <Star className="w-6 h-6 text-red-600" />, label: 'CALIDAD CINEMATOGRÁFICA' },
            { icon: <Clock className="w-6 h-6 text-red-600" />, label: 'ENTREGA RÁPIDA (24H-48H)' },
            { icon: <Zap className="w-6 h-6 text-red-600" />, label: 'ESTRATEGIA + CREATIVIDAD' },
            { icon: <CheckCircle2 className="w-6 h-6 text-red-600" />, label: '100% COMPROMISO' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {item.icon}
              <span className="text-xs font-bold tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="SERVICIOS AUDIOVISUALES" title="SOLUCIONES PARA IMPULSAR TU MARCA" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 border border-white/10 rounded-3xl hover:bg-zinc-900 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Play className="w-20 h-20 text-red-600 -rotate-12" />
                </div>
                <div className="mb-6 text-red-600 bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-white/90 font-medium leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-red-600 font-bold text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  VER MÁS <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <SectionHeader subtitle="PROYECTOS QUE HABLAN POR SÍ SOLOS" title="ÚLTIMOS TRABAJOS" />
            <p className="text-white font-medium mb-8">
              Una selección de mis mejores clips y producciones.
            </p>
            <button className="text-red-500 font-bold border-b-2 border-red-500/0 hover:border-red-500 transition-all pb-1 tracking-widest uppercase text-xs">
              VER PORTAFOLIO COMPLETO
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-video overflow-hidden rounded-3xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <span className="text-red-600 font-bold text-xs tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-2xl md:text-4xl font-black mb-6 translate-y-4 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                  <button className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 fill-current ml-1" />
                    </div>
                    <span className="font-bold tracking-widest text-xs">REPRODUCIR CLIP</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <SectionHeader subtitle="ASÍ TRABAJAMOS" title="PROCESO SIMPLE Y EFECTIVO" />
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { n: '01', title: 'HABLAMOS', desc: 'Cuéntame tu idea, objetivos y lo que necesitas.' },
            { n: '02', title: 'PLANIFICAMOS', desc: 'Diseñamos la estrategia y el concepto creativo.' },
            { n: '03', title: 'PRODUCIMOS', desc: 'Grabamos con equipo profesional de última generación.' },
            { n: '04', title: 'EDITAMOS', desc: 'Damos vida al material con ritmo, color y propósito.' },
            { n: '05', title: 'ENTREGAMOS', desc: 'Recibes tu vídeo listo para impactar al mundo.' },
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-6"
            >
              <span className="text-5xl font-black text-white/5 absolute top-0 left-0 leading-none">{step.n}</span>
              <h4 className="text-lg font-bold mb-4 relative z-10">{step.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me / Blog Preview */}
      <section id="sobre-mi" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1596467675163-806757ff681d?auto=format&fit=crop&q=80&w=800" 
                alt="Crisrey Portfolio" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-full border-red-600/30 hidden md:block">
              <div className="text-center">
                <span className="text-5xl font-black text-red-600">+5</span>
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/60">AÑOS CREANDO</p>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeader subtitle="EL CREADOR DETRÁS DE LA CÁMARA" title="SOBRE MÍ" />
            <div className="space-y-6 text-white font-medium text-lg leading-relaxed">
              <p>
                Hola, soy <span className="text-red-600 font-bold italic">Crisrey</span>. Mi pasión es capturar momentos y transformarlos en piezas audiovisuales que no solo se vean bien, sino que cuenten una historia poderosa.
              </p>
              <p>
                Con sede en <span className="text-red-600 font-bold">Gran Canaria</span>, he trabajado con marcas locales e internacionales, ayudándoles a encontrar su voz visual en un mundo saturado de imágenes.
              </p>
              <p>
                Mi enfoque mezcla la técnica cinematográfica con la agilidad necesaria para las plataformas digitales actuales. No solo grabo clips; construyo activos digitales que generan impacto real.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">50+</span>
                <span className="text-xs font-bold tracking-widest text-red-600">CLIENTES FELICES</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">200+</span>
                <span className="text-xs font-bold tracking-widest text-red-600">PROYECTOS ENTREGADOS</span>
              </div>
            </div>

            <button className="mt-12 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-red-600 hover:text-white">
              LEER MI BLOG
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:max-w-sm">
            <SectionHeader subtitle="CLIENTES QUE YA CONECTAN CON SU AUDIENCIA" title="RESULTADOS QUE GENERAN CONFIANZA" />
            <p className="text-white font-semibold text-lg mb-8">
              La confianza de mis clientes es mi mayor motor. Aquí lo que dicen sobre trabajar conmigo.
            </p>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
            </div>
          </div>

          <div className="flex-1 grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 border border-white/5 bg-zinc-900 rounded-3xl relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                <p className="text-xl italic font-light mb-8 relative z-10 leading-relaxed text-gray-300">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-red-600" />
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs text-red-600 font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding bg-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader subtitle="¿TIENES UN PROYECTO EN MENTE?" title="¡HABLEMOS AHORA!" />
            <p className="text-gray-400 text-lg mb-12 font-light">
              Cuéntame tu idea y te responderé lo antes posible.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-1">Email</p>
                  <p className="text-xl font-bold">hola@crisreyclips.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://wa.me/34641445583', '_blank')}>
                <div className="w-14 h-14 bg-green-600/10 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-1">WhatsApp</p>
                  <p className="text-xl font-bold">+34 641 445 583</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                   <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-1">Ubicación</p>
                  <p className="text-xl font-bold">Gran Canaria, Islas Canarias</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 md:p-12 glass-card rounded-[3rem] border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black tracking-widest text-white">NOMBRE COMPLETO</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 focus:border-red-600 outline-none transition-all text-white placeholder-white/40" placeholder="Tu nombre..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black tracking-widest text-white">WHATSAPP / TELÉFONO</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 focus:border-red-600 outline-none transition-all text-white placeholder-white/40" placeholder="Tu número..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black tracking-widest text-white">MENSAJE</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 focus:border-red-600 outline-none transition-all resize-none text-white placeholder-white/40" placeholder="Cuéntame sobre tu proyecto..."></textarea>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black tracking-[0.2em] py-5 rounded-2xl flex justify-center items-center gap-3 transition-all shadow-[0_10px_20px_rgba(220,38,38,0.2)]">
                ENVIAR MENSAJE <WhatsAppIcon className="w-5 h-5" />
              </button>
              <p className="text-[10px] text-center text-white/40 uppercase tracking-widest mt-4">Respondo en menos de 1 hora laboral.</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Footer Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-800 to-red-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">¿LISTO PARA QUE TU HISTORIA SEA CONTADA?</h2>
          <button 
            onClick={() => window.open('https://wa.me/34641445583', '_blank')}
            className="bg-white text-black px-12 py-6 rounded-full font-black text-lg tracking-widest hover:scale-105 transition-transform flex items-center gap-4 mx-auto"
          >
            HABLEMOS POR WHATSAPP <WhatsAppIcon className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="bg-black py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <a href="#inicio" className="text-3xl font-extrabold tracking-tighter flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="text-white">CRISREY</span>
                <span className="text-red-600">CLIPS</span>
              </a>
              <p className="max-w-xs text-white/70 font-semibold text-sm">
                Creación de contenido audiovisual de alto impacto para marcas que buscan destacar. Sede en Gran Canaria.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 font-black text-xs tracking-widest uppercase text-white/90">
              <a href="#inicio" className="hover:text-red-600 transition-colors">INICIO</a>
              <a href="#servicios" className="hover:text-red-600 transition-colors">SERVICIOS</a>
              <a href="#portafolio" className="hover:text-red-600 transition-colors">PORTAFOLIO</a>
              <a href="#sobre-mi" className="hover:text-red-600 transition-colors">SOBRE MÍ</a>
              <a href="#contacto" className="hover:text-red-600 transition-colors">CONTACTO</a>
            </div>

            <div className="flex gap-4">
              {[Instagram, Youtube, Smartphone].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
            <p>© 2024 CRISREY CLIPS. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">POLÍTICA DE PRIVACIDAD</a>
              <a href="#" className="hover:text-white">TÉRMINOS Y CONDICIONES</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/34641445583"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
