"use client";

import { CheckCircle, ShieldCheck, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function SeoContent() {
  return (
    <section className="py-24 bg-slate-900/30 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Ankara Tesisat: <br/>
              <span className="text-primary italic">Profesyonel & Kalıcı Çözümler</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="space-y-6 text-slate-400 text-sm md:text-lg leading-relaxed">
            <p>
              Ankara genelinde 7/24 kesintisiz hizmet veren firmamız, <strong>Ankara Tesisat</strong> denildiğinde akla gelen ilk adreslerden biri olmanın gururunu yaşıyor. Kırmadan su kaçağı tespiti, robotla tıkanıklık açma ve komple daire yenileme işlerinde uzman usta kadromuzla, en karmaşık arızaları bile teknolojik cihazlarımızla kısa sürede çözüme kavuşturuyoruz.
            </p>
            <p>
              Gelişmiş akustik dinleme cihazları, termal kameralar ve kanal görüntüleme sistemleri kullanarak, alt kata sızan su kaçaklarından can sıkan gider tıkanıklıklarına kadar her sorunu noktasal olarak tespit ediyoruz. Gereksiz kırım ve döküm işlemlerine son vererek, hem bütçenizi hem de evinizin düzenini koruyoruz.
            </p>
            <p className="font-medium text-slate-300">
              Ankara&apos;nın her bölgesine (Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut ve Sincan dahil) tam donanımlı mobil araçlarımızla sadece 30 dakikada ulaşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              "30 Dakikada Yerinde Servis",
              "%100 Garantili İşçilik",
              "Kırmadan Cihazla Tespit",
              "Şeffaf & Sabit Fiyatlar"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white font-bold text-sm tracking-wide bg-white/5 p-3 rounded-xl border border-white/5">
                <CheckCircle className="w-5 h-5 text-primary" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Trust & Stats HUD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-110 -z-10" />
          <div className="ultra-glass p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-10 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl border border-primary/30">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-1">%100 Memnuniyet</h4>
                  <p className="text-slate-400 text-sm">Yaptığımız her işlemi fatura ve servis garantisiyle taahhüt altına alıyoruz.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-2xl border border-secondary/30">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-1">7/24 Kesintisiz Hat</h4>
                  <p className="text-slate-400 text-sm">Bayramlarda bile gece-gündüz demeden Ankara geneli nöbetçi ekiplerimizle sahadayız.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
                  <MapPin className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-1">Geniş Servis Ağı</h4>
                  <p className="text-slate-400 text-sm">Ankara&apos;nın her semtine yayılmış profesyonel mobil tesisat ekipleri.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col items-center">
               <span className="text-5xl font-black text-white glow-text mb-2">20+</span>
               <span className="text-slate-400 font-bold tracking-widest text-xs uppercase">Yıllık Güven ve Tecrübe</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
