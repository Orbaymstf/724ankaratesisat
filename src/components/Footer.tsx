"use client";

import { Phone, Clock, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 px-4 pb-32 md:pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
             <span className="text-xl font-bold text-white tracking-tighter">7/24 ANKARA TESİSAT</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Ankara'nın her semtine, her mahallesine 7 gün 24 saat kesintisiz hizmet veriyoruz. Su tesisatı arızalarında profesyonel çözüm ortağınız.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Hızlı İletişim</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+905368440799">+90 536 844 07 99</a>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <Clock className="w-5 h-5 text-primary" />
              <span>7 Gün 24 Saat Açık</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Tüm Ankara / Merkez</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Hizmetlerimiz</h4>
          <ul className="grid grid-cols-1 gap-2 text-slate-400 text-sm">
            <li>• Su Kaçağı Tespiti</li>
            <li>• Tıkalı Gider Açma</li>
            <li>• Petek Temizliği</li>
            <li>• Klozet & Musluk Tamiri</li>
            <li>• Kombi Tesisatı</li>
            <li>• Banyo & Mutfak Yenileme</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} 7/24 Ankara Tesisat. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
