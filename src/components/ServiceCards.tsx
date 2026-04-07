"use client";

import { Droplets, Wrench, ThermometerSun, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Su Kaçağı Tespiti",
    description: "Kırmadan dökmeden, son teknoloji cihazlarla su kaçağının yerini %100 tespit ediyoruz.",
    icon: Search,
    color: "from-red-500 to-red-700",
    shadow: "shadow-red-500/20",
    href: "/su-kacagi-tespiti"
  },
  {
    title: "Tıkalı Gider Açma",
    description: "Robot makinelerimizle giderlerinizi kırmadan, temiz bir şekilde saniyeler içinde açıyoruz.",
    icon: Droplets,
    color: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-500/20",
    href: "/tikaniklik-acma"
  },
  {
    title: "Gömme Rezervuar Tamiri",
    description: "Kale, Siamp, Geberit gibi tüm marka gömme rezervuar ve klozet iç takımları garantili onarıyoruz.",
    icon: Wrench,
    color: "from-blue-600 to-blue-800",
    shadow: "shadow-blue-500/20",
    href: "/klozet-tamiri"
  },
  {
    title: "Petek Temizliği",
    description: "Verimli ısınma ve faturada net tasarruf için peteklerinizi kimyasal ilaçlı makinelerle temizliyoruz.",
    icon: ThermometerSun,
    color: "from-yellow-400 to-yellow-600",
    shadow: "shadow-yellow-500/20",
    href: "/petek-temizligi"
  },
  {
    title: "Musluk & Batarya",
    description: "Aç-kapa batarya, ankastre musluk ve tüm tesisat ekipmanları profesyonel montaj ve değişim.",
    icon: Droplets,
    color: "from-emerald-500 to-emerald-700",
    shadow: "shadow-emerald-500/20",
    href: "#"
  },
  {
    title: "Sıhhi Tesisat Tamiri",
    description: "Eski tesisat yenileme, demir boru değişimi ve komple daire içi tesisat işleri.",
    icon: Wrench,
    color: "from-slate-500 to-slate-700",
    shadow: "shadow-slate-500/20",
    href: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function ServiceCards() {
  return (
    <section className="py-24 bg-[#050B14] px-4 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 relative z-10">
        <div className="text-center space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">Hizmet Ağımız</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">Acil tesisat sorunlarına profesyonel teşhis ve %100 garantili müdahale ile çözüyoruz.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service, idx) => (
            <Link 
              href={service.href} 
              key={idx}
              className="block no-underline"
            >
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full p-6 md:p-8 rounded-[2rem] bg-slate-900/50 backdrop-blur-lg border border-slate-800/80 hover:border-slate-600 transition-all duration-300 shadow-2xl overflow-hidden relative cursor-pointer"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} ${service.shadow} shadow-lg flex items-center justify-center mb-6 md:mb-8 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 tracking-wide">{service.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
