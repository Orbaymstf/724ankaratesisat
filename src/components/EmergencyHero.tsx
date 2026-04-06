"use client";

import { Phone, Clock, ShieldCheck, Zap, Droplet, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroServices = [
  "Cihazla Noktasal Su Kaçağı Tespiti",
  "Robot Makine ile Tıkalı Gider Açma",
  "Kırmadan Dökmeden Profesyonel Çözüm",
  "Kimyasallı Petek ve Kombi Temizliği",
  "7/24 Acil Tesisat Müdahalesi",
];

export default function EmergencyHero({ districtName }: { districtName?: string }) {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const phoneNumber = "+90 536 844 07 99";
  const telLink = `tel:${phoneNumber.replace(/\s/g, "")}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % heroServices.length);
    }, 2500); // Change text every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* 1. Ultra Premium Background Layers */}
      <div className="absolute inset-0 bg-background -z-30" />
      <div className="bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-background to-background -z-20" />
      
      {/* Cinematic Watermark (Hollow Stroke Effect) */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden pointer-events-none">
        <span 
          className="text-[35vw] font-black tracking-tighter whitespace-nowrap select-none opacity-40 drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]" 
          style={{ WebkitTextStroke: '8px rgba(255,255,255,0.2)', color: 'transparent' }}
        >
          7/24
        </span>
      </div>

      {/* Floating Animated Core Energy Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/4"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-[40%_60%_70%_30%] blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl w-full text-center space-y-12 z-10"
      >
        {/* 2. Levitating Ultra-Glass Native Vector Logo */}
        <div className="flex justify-center mb-4 relative z-20">
          <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full scale-150" />
          <motion.div 
            style={{ animation: 'float 6s ease-in-out infinite' }}
            className="animated-border rounded-full p-[3px] shadow-[0_0_80px_rgba(239,68,68,0.3)]"
          >
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full bg-[#020617]/80 backdrop-blur-3xl flex items-center justify-center p-6 z-10 overflow-hidden border border-white/10">
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50 z-0" />
               
               {/* Native SVG / Text Logo Integration */}
               <div className="relative z-10 flex flex-col items-center justify-center">
                 <div className="flex items-center justify-center mb-1">
                   {/* Icon overlapping technique */}
                   <div className="relative">
                     <Droplet className="w-12 h-12 md:w-14 md:h-14 fill-primary/20 text-primary drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] -ml-4" />
                     <Wrench className="w-8 h-8 md:w-10 md:h-10 text-secondary absolute bottom-0 -right-2 drop-shadow-lg transform rotate-12" />
                   </div>
                 </div>
                 
                 <div className="flex flex-col items-center mt-1">
                   <div className="flex items-baseline border-b border-white/20 pb-1 mb-1">
                     <span className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none glow-text">7/24</span>
                   </div>
                   <span className="text-[10px] md:text-xs font-black text-slate-200 tracking-[0.3em] uppercase leading-none mt-1">Ankara</span>
                   <span className="text-sm md:text-base font-black text-primary tracking-widest uppercase mt-0.5">Tesİsat</span>
                 </div>
               </div>

            </div>
          </motion.div>
        </div>

        {/* 3. High-Tech Status HUD */}
        <div className="flex justify-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full ultra-glass border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative flex items-center justify-center w-4 h-4">
                 <div className="absolute w-full h-full rounded-full border-2 border-primary" style={{ animation: 'pulse-ring 2s infinite' }} />
                 <div className="w-2 h-2 bg-primary rounded-full" />
               </div>
               <span className="text-slate-300 font-medium tracking-widest text-xs uppercase">
                 {districtName ? "Sahada Aktif:" : "Operasyon Aktif:"} <span className="text-white font-black glow-text">{districtName ? `${districtName} BÖLGESİ` : "TÜM ANKARA"}</span>
               </span>
            </div>
        </div>

        {/* 4. God Tier Typography scaled for Mobile with Animated Services */}
        <div className="space-y-4 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-tight drop-shadow-2xl">
             Krize <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient bg-[length:200%_auto]">
               Anında Müdahale
             </span>
          </h1>
          
          <div className="flex flex-col items-center justify-center min-h-[80px] md:min-h-[100px] mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentServiceIndex}
                initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl sm:text-2xl md:text-4xl text-slate-300 font-light tracking-wide text-center px-4 leading-tight"
              >
                {heroServices[currentServiceIndex]}
              </motion.div>
            </AnimatePresence>
            <strong className="text-white font-semibold text-sm md:text-lg mt-4 glow-text tracking-widest uppercase opacity-80">
              Tesisatın Özel Kuvvetleri.
            </strong>
          </div>
        </div>

        {/* 5. Magnetic Dual-CTA Zone scaled for Mobile */}
        <div className="flex flex-col items-center gap-6 mt-10 md:mt-16 w-full px-2 sm:px-4">
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center">
            
            {/* Primary Call Action */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group w-full">
              <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-r from-primary via-secondary to-primary blur-xl opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
              <a 
                href={telLink}
                className="relative flex items-center justify-center gap-3 sm:gap-6 px-4 py-4 md:px-12 md:py-6 rounded-[1.5rem] bg-slate-900 border border-white/10 text-white overflow-hidden w-full h-full"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="absolute h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:rotate-12 transition-transform duration-300 relative z-10 shrink-0" />
                <div className="flex flex-col items-start relative z-10 truncate">
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-red-500 tracking-widest uppercase">30 Dakikada Oradayız</span>
                  <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight leading-none mt-1">HEMEN ARA</span>
                </div>
              </a>
            </motion.div>

            {/* Secondary WhatsApp Action */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group w-full">
              <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] blur-xl opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
              <a 
                href={`https://wa.me/905368440799?text=Merhaba,%20acil%20tesisat%20arızası%20için%20ulaşıyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 sm:gap-6 px-4 py-4 md:px-12 md:py-6 rounded-[1.5rem] bg-slate-900 border border-[#25D366]/30 text-white overflow-hidden w-full h-full"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#25D366]/60 to-transparent" />
                  <div className="absolute h-full w-full bg-[linear-gradient(rgba(37,211,102,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#25D366] drop-shadow-[0_0_15px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-transform duration-300 relative z-10 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="flex flex-col items-start relative z-10 truncate">
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#25D366] tracking-widest uppercase">Konum Gönderin</span>
                  <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight leading-none mt-1">WHATSAPP</span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* 6. Cinematic Features scaled for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 md:mt-24 pb-12">
          {[
            { icon: Clock, title: "HIZ", desc: "30 Dk Varış" },
            { icon: Zap, title: "TEKNOLOJİ", desc: "Kameralı Tespit" },
            { icon: ShieldCheck, title: "GÜVEN", desc: "%100 Garanti" },
            { icon: Phone, title: "ERİŞİM", desc: "7/24 Kesintisiz" }
          ].map((item, idx) => (
            <div key={idx} className="group relative flex flex-col items-center sm:items-start p-4 sm:p-6 rounded-2xl sm:rounded-3xl ultra-glass hover:bg-white/[0.05] transition-colors duration-500 border border-white/[0.05] text-center sm:text-left">
               <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.05] mb-2 sm:mb-4 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shrink-0">
                 <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-primary" />
               </div>
               <span className="text-[9px] sm:text-[10px] md:text-xs font-black text-slate-500 tracking-[0.2em] mb-1">{item.title}</span>
               <span className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">{item.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
