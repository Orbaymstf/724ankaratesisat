"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideContent {
  title: string;
  p1: React.ReactNode;
  p2: React.ReactNode;
}

export default function ServiceContentSlider({ districtName }: { districtName: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideContent[] = [
    {
      title: `${districtName} Tesisatçı & Acil Müdahale`,
      p1: (
        <>
          <strong>{districtName} tesisatçı</strong> ihtiyaçlarınızda, 7 gün 24 saat kesintisiz ve profesyonel destek sunuyoruz. Evinizde veya iş yerinizde aniden ortaya çıkan su patlamaları, alt kata su sızmaları veya gider tıkanıklıkları beklemez. Bölgeyi çok iyi bilen mobil araçlı ekiplerimizle, <strong>{districtName}</strong> ve çevresindeki tüm mahallelere en geç 30 dakika içerisinde ulaşıyoruz.
        </>
      ),
      p2: (
        <>
          Özellikle en büyük sorunlardan olan su kaçaklarında, eski usul &quot;kırarak bulma&quot; yöntemlerini çöpe atıyoruz. Gelişmiş akustik dinleme cihazlarımız ve yüksek çözünürlüklü termal kameralarımız sayesinde <Link href="/su-kacagi-tespiti" className="text-indigo-600 font-bold hover:underline">kırmadan su kaçağı bulma</Link> işlemini tek bir seramik bile kırmadan noktasal olarak gerçekleştiriyoruz.
        </>
      ),
    },
    {
      title: `${districtName} Su Kaçağı Tespiti (Kırmadan)`,
      p1: (
        <>
          <strong>{districtName} su kaçağı tespiti</strong> servisimiz, evinizi inşaat alanına çevirmeden sızıntının yerini bulur. Termal kameralar ve akustik dinleme mikrofonları kullanarak, duvarın içindeki veya zemindeki patlayan boruyu noktasal olarak tespit ediyoruz. Bu sayede maliyetleriniz düşer ve gereksiz kırım yapılmaz.
        </>
      ),
      p2: (
        <>
          Eğer faturanız yüksek geliyorsa veya komşunuzun tavanında sararma varsa vakit kaybetmeden bizi arayın. <strong>{districtName}</strong> bölgesindeki uzman ekibimiz, en son teknoloji cihazlarla gelerek tüm tesisatınızı tarar ve kaçağı raporlar. Onarım onayı vermeniz durumunda sadece ilgili noktadaki tek bir fayansı açarak sorunu gideriyoruz.
        </>
      ),
    },
    {
      title: `${districtName} Robotlu Tıkanıklık Açma`,
      p1: (
        <>
          <strong>{districtName} tıkanıklık açma</strong> işlemlerinde kimyasal açıcılar yerine robot makineler kullanıyoruz. Lavabo, tuvalet veya pimaş tıkanıklıklarında boruya hiçbir zarar vermeyen çelik yaylı sistemlerimizle tıkanıklığı %100 garantili açıyoruz. Geleneksel yöntemlerle boruyu kırdırmak yerine, robotlu teknolojimize güvenin.
        </>
      ),
      p2: (
        <>
          Pimaş görüntüleme kameralarımızla tıkanıklığın nedenini ve borunun iç durumunu (çökme, eğim hatası vb.) tespit edebiliyoruz. <strong>{districtName}</strong> genelinde logar temizliği, mutfak gideri açma ve banyo süzgeci tıkanıklığı gibi her türlü ağır tıkanıklık sorununa profesyonel çözüm getiriyoruz.
        </>
      ),
    },
    {
      title: `${districtName} Gömme Rezervuar & Klozet Tamiri`,
      p1: (
        <>
          <strong>{districtName} klozet tamiri</strong> ve özellikle hassas olan gömme rezervuar sistemlerinde (Geberit, Siamp, Kale, Visam) orijinal yedek parça desteğiyle hizmet veriyoruz. Klozetin içine su sızdırması veya butonun basmaması gibi can sıkıcı arızaları duvarı kırmadan, sadece panel üzerinden onarıyoruz.
        </>
      ),
      p2: (
        <>
          Taharet musluğu değişimi, iç takım yenileme ve sızdırmazlık kontrollerini yerinde gerçekleştiriyoruz. <strong>{districtName}</strong> bölgesinde yeni klozet montajı veya eski tesisatın yenilenmesi işlerinizde usta işçilik ve uygun fiyat garantisiyle 7/24 adresinize geliyoruz.
        </>
      ),
    },
    {
      title: `${districtName} Komple Tadilat & Yenileme`,
      p1: (
        <>
          <strong>{districtName} tadilat ve tamirat</strong> hizmetlerimizde, sadece tesisat değil; <strong>fayans, alçı ve boya</strong> işlerini de içeren komple daire içi değişim çözümleri sunuyoruz. Banyonuzu veya mutfağınızı sıfırdan tasarlıyor, anahtar teslim şekilde profesyonel usta ekibimizle yeniliyoruz.
        </>
      ),
      p2: (
        <>
          Eski fayansların sökülmesi, yerine modern seramiklerin döşenmesi, duvarların alçı ve boya işlemleriyle tertemiz bir görünüme kavuşması için <strong>{districtName}</strong> genelinde hizmetinizdeyiz. Estetik, dayanıklılık ve uygun fiyatlı tadilatın adresi olarak hayalinizdeki evi inşa ediyoruz.
        </>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8500); // Wait 8.5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-6 text-slate-700 text-sm md:text-base leading-relaxed h-[380px] md:h-[280px]"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              {slides[currentSlide].title}
            </h2>
            <div className="space-y-4">
               <p>{slides[currentSlide].p1}</p>
               <p>{slides[currentSlide].p2}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 md:mt-0 pt-4 border-t border-slate-200 md:border-none md:absolute md:-bottom-12 md:left-0 md:right-0">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4 md:hidden">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white shadow-sm border border-slate-200">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white shadow-sm border border-slate-200">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
