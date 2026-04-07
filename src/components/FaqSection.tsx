"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Su kaçağı tespiti için evi kırmak gerekiyor mu?",
    answer: "Kesinlikle hayır. Akustik dinleme cihazları ve yüksek çözünürlüklü termal kameralar kullanarak alt kata sızan gizli su kaçaklarını tek bir fayans bile kırmadan noktasal olarak tespit ediyoruz."
  },
  {
    question: "Tesisatçı ne kadar sürede gelir?",
    answer: "Ankara merkez, Çankaya, Keçiören, Yenimahalle dahil tüm ana ilçelerdeki acil tesisat arızaları için mobil donanımlı araçlarımızla ortalama 30-45 dakiika içerisinde adresinize ulaşıyoruz."
  },
  {
    question: "Tıkalı tuvalet ve gider açma işlemi garantili mi?",
    answer: "Evet. Robotlu helezon yay ve kameralı sistemlerimizle pimaş borularındaki kireç, donmuş yağ ve erimeyen kalıntıları tamamen söküp atıyor, %100 tıkanıklık açma garantisi veriyoruz."
  },
  {
    question: "Tesisat tamir fiyatları nasıl belirleniyor?",
    answer: "Fiyatlandırma işlem tipine ve kullanılan parçaya göre değişmektedir. Ancak en önemli prensibimiz; işlem öncesi net fiyat bilgisi vermek ve sürpriz maliyet çıkarmamaktır. Ücretsiz keşif desteğimiz de mevcuttur."
  },
  {
    question: "Petek temizliği faturada tasarruf sağlar mı?",
    answer: "Kesinlikle evet. İlaçlı makineli petek temizliği ile kombinin devir daim gücü artar, petekleriniz eşit ısınır ve doğalgaz faturanızda %20'ye varan net tasarruf sağlarsınız."
  },
  {
    question: "Gömme rezervuar (Geberit, Kale vb.) tamiri yapıyor musunuz?",
    answer: "Evet, tüm marka ve model gömme rezervuar, klozet iç takımı ve sifon arızalarında orijinal yedek parça desteğiyle garantili tamir ve değişim hizmeti sunuyoruz."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -translate-x-1/2" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 opacity-50" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-xs font-black text-primary tracking-widest uppercase italic">Merak Edilenler</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ankara Tesisat <br/> <span className="text-slate-400">Sıkça Sorulan Sorular</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Hizmetlerimiz, fiyatlandırma ve teknik süreçlerimiz hakkında en çok merak edilen soruları sizin için yanıtladık.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="ultra-glass rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 group">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-white pr-8">
                  {faq.question}
                </span>
                <div className={`p-3 rounded-full bg-slate-900 border border-white/10 group-hover:bg-primary transition-all duration-300 ${openIndex === idx ? 'bg-primary border-primary rotate-180' : ''}`}>
                  {openIndex === idx ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-slate-400 group-hover:text-white" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-6 bg-white/[0.02]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-slate-500 text-sm mb-6 flex items-center justify-center gap-2">
             <span className="w-8 h-px bg-slate-800" />
             Sorunuzu bulamadınız mı?
             <span className="w-8 h-px bg-slate-800" />
           </p>
           <a 
             href="tel:+905368440799"
             className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-black tracking-widest uppercase hover:bg-primary-hover shadow-xl shadow-primary/20 transition-all border border-primary/20"
           >
             Müşteri Hattına Ulaşın
           </a>
        </div>
      </div>
    </section>
  );
}
