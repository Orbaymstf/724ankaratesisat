"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { districts } from "@/lib/districts";

export default function DistrictList() {
  return (
    <section className="py-24 bg-slate-950/50 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Ankara'da Hizmet Verdiğimiz İlçeler</h2>
          <p className="text-slate-400">Merkez ve çevre tüm ilçelerde 7/24 hizmetimiz mevcuttur. Size en yakın ekibe ulaşmak için ilçenizi seçin.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {districts.map((district, idx) => (
            <Link 
              href={`/${district.slug}-tesisatci`}
              key={idx}
              className="flex items-center gap-2 p-3 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-300 text-sm hover:border-primary/50 hover:bg-slate-800/80 hover:text-white transition-all group"
            >
              <MapPin className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 group-hover:animate-bounce" />
              <span className="font-medium">{district.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
