"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, User, MapPin, Wrench, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/services";
import { districtNames } from "@/lib/districts";
import { trackEvent } from "@/lib/monitoring";

interface LeadFormProps {
  initialService?: string;
  initialDistrict?: string;
}

export default function LeadForm({ initialService, initialDistrict }: LeadFormProps) {
  // Form şimdilik görünmez yapıldı (Kullanıcı isteği)
  return null;

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService || "",
    district: initialDistrict || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Realistic delay for the premium feel
    const startTime = Date.now();
    
    // Track the lead in Orbay Studio Control Center
    const success = await trackEvent("lead", {
      ...formData,
      source: window.location.pathname,
    });

    const elapsedTime = Date.now() - startTime;
    const minDelay = 1500;
    if (elapsedTime < minDelay) await new Promise(resolve => setTimeout(resolve, minDelay - elapsedTime));

    if (success) {
      setFormState("success");
      setFormData({ name: "", phone: "", service: "", district: "" });
    } else {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section id="iletisim-formu" className="relative py-24 px-4 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black tracking-[0.3em] uppercase text-sm"
          >
            Hızlı Teklif Alın
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Sizi Hemen <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arayalım</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto text-lg"
          >
            Formu doldurun, uzman ekibimiz 5 dakika içinde size geri dönüş yapsın.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Glass Card */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-white/10 to-transparent blur-2xl opacity-50 -z-10" />
          
          <div className="bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/50">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">Başarıyla Gönderildi!</h3>
                  <p className="text-slate-400">Tesisat ekibimiz sizi çok kısa sürede arayacak.</p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="mt-8 text-primary hover:text-white transition-colors underline font-bold"
                  >
                    Yeni bir form gönder
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <User className="w-3 h-3 text-primary" /> Adınız Soyadınız
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <Phone className="w-3 h-3 text-primary" /> Telefon Numaranız
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <Wrench className="w-3 h-3 text-primary" /> İstediğiniz Hizmet
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-slate-900">Hizmet Seçiniz</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title} className="bg-slate-900">{s.title}</option>
                      ))}
                      <option value="Diğer" className="bg-slate-900">Diğer / Acil Tesisat</option>
                    </select>
                  </div>

                  {/* District Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-primary" /> Bölge / İlçe
                    </label>
                    <select
                      required
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-slate-900">İlçe Seçiniz</option>
                      {districtNames.map((d) => (
                        <option key={d} value={d} className="bg-slate-900">{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 pt-4">
                    <button
                      disabled={formState === "submitting"}
                      type="submit"
                      className="w-full group relative overflow-hidden bg-white text-slate-950 font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {formState === "submitting" ? (
                        <div className="w-6 h-6 border-4 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          BİLGİLERİ GÖNDER <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
                    </button>
                    
                    {formState === "error" && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs text-center mt-4 font-bold flex items-center justify-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4" /> Bir hata oluştu, lütfen tekrar deneyin veya arayın.
                      </motion.p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
            
            {/* Status Bar */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest border-t border-white/5 pt-8">
              <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Ekipler Sahada</span>
              <span className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> 30 Dk. Varış</span>
              <span className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full" /> 7/24 Aktif Destek</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
