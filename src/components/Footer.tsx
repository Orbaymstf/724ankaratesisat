"use client";

import { Phone, Clock, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { districts } from "@/lib/districts";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 px-4 pb-32 md:pb-16 text-slate-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold text-white tracking-tighter">7/24 ANKARA TESİSAT</span>
          </div>
          <p className="text-sm leading-relaxed">
            Ankara'nın her semtine, her mahallesine 7 gün 24 saat kesintisiz hizmet veriyoruz. Profesyonel cihazlarla kırmadan dökmeden garantili çözüm.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Hızlı İletişim</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+905368440799" className="font-bold">+90 536 844 07 99</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span>7 Gün 24 Saat Açık</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Tüm Ankara / Merkez</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Ana Hizmetler</h4>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li>
              <Link href="/su-kacagi-tespiti" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-primary">•</span> Su Kaçağı Tespiti
              </Link>
            </li>
            <li>
              <Link href="/tikaniklik-acma" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-primary">•</span> Tıkalı Gider Açma
              </Link>
            </li>
            <li>
              <Link href="/klozet-tamiri" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-primary">•</span> Gömme Rezervuar Tamiri
              </Link>
            </li>
            <li>
              <Link href="/petek-temizligi" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-primary">•</span> Petek & Kombi Temizliği
              </Link>
            </li>
            <li className="flex items-center gap-2 cursor-default">
              <span className="text-primary">•</span> Musluk & Batarya Montajı
            </li>
            <li>
              <Link href="/daire-ici-tadilat-ve-yenileme" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-primary">•</span> Tadilat & Yenileme (Boya, Fayans)
              </Link>
            </li>
            <li className="flex items-center gap-2 cursor-default">
              <span className="text-primary">•</span> Banyo & Mutfak Tesisatı
            </li>
          </ul>
        </div>
      </div>

      {/* SEO Internal Linking: District Footer Grid */}
      <div className="max-w-6xl mx-auto mt-16 pt-12 border-t border-slate-900">
        <h4 className="text-white font-bold text-lg mb-8 text-center md:text-left tracking-wide">Ankara Hizmet Bölgelerimiz</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-4">
          {districts.map((d) => {
            return (
              <Link
                key={d.name}
                href={`/${d.slug}-tesisatci`}
                className="text-slate-500 hover:text-primary transition-colors text-xs flex items-center gap-2 group"
              >
                <span className="w-1 h-1 bg-slate-800 group-hover:bg-primary rounded-full transition-colors" />
                {d.name} Tesisatçı
              </Link>
            );
          })}
        </div>
        <p className="text-slate-600 text-[10px] mt-12 leading-relaxed text-center md:text-left">
          7/24 Ankara Tesisat, Ankara genelinde tüm merkez ve çevre ilçelere mobil araçlı ekipleriyle 30 dakika içerisinde ulaşmaktadır. Kırmadan su kaçağı bulma, cihazla sızıntı tespiti, robotla tıkanıklık açma ve tüm acil sıhhi tesisat tamirleri için bizi 24 saat arayabilirsiniz.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-900/50 text-center text-slate-500 text-xs text-balance">
        © {new Date().getFullYear()} 7/24 Ankara Tesisat. Tüm hakları saklıdır. <br className="md:hidden" />
        Ankara geneli 7/24 acil sıhhi tesisat servisidir.
      </div>
    </footer>
  );
}
