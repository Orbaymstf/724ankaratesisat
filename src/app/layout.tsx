import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#dc2626",
};

export const metadata: Metadata = {
  title: "7/24 Ankara Tesisatçı | Kırmadan Su Kaçağı Tespiti & Tıkanıklık Açma",
  description: "Ankara en yakın acil tesisatçı numarası. Alt kata su sızıyor diyorsanız kameralı kırmadan su kaçağı bulma, robot makine ile tıkalı tuvalet/gider açma, makineli petek temizliği. 30 dk varış garantisi.",
  keywords: [
    // Genel & Aciliyet
    "ankara tesisatçı", "acil tesisatçı", "7/24 tesisat", "su tesisatçısı", "nöbetçi tesisatçı", "gece açık tesisatçı", "en yakın tesisatçı", "tesisatçı numarası", "ankara su tamircisi", "sıhhi tesisat ustası",
    
    // Su Kaçağı (Long tail)
    "ankara su kaçağı tespiti", "kameralı su tesisatçısı", "kırmadan su kaçağı bulma", "cihazla su kaçağı tespiti", "alt kata su damlıyor", "duvardan su sızıyor tesisatçı", "noktasal su kaçağı tespiti", "su sızıntısı bulma ankara", "gizli su kaçağı",
    
    // Tıkalı Gider (Long tail)
    "ankara tıkanıklık açma", "robotla gider açma", "tıkalı tuvalet açma", "lavabo tıkanıklığı açma", "logar tıkanıklığı açma", "kırmadan pimaş açma", "klozet tıkandı su gitmiyor", "banyo gideri açma", "mutfak lavabosu açma ankara", "kanal açma",
    
    // Petek & Kombi
    "petek temizliği ankara", "makineli petek temizliği", "havlupan montajı", "peteklerin altı ısınmıyor", "kombi su eksiltiyor tesisatçı", "kombi tesisat temizliği", "ilaçlı petek temizleme",
    
    // Tamir & Montaj
    "klozet tamiri", "gömme rezervuar tamiri ankara", "musluk tamircisi", "batarya değişimi", "kombi su kaçağı", "sifon tamiri", "taharet musluğu değişimi", "duşakabin su sızdırıyor", "vitrifiye montajı", "çamaşır makinesi tesisatı", "bulaşık makinesi tesisatı",
    
    // Şehir İçi Önemli Çapraz Bölgeler & Semtler
    "keçiören tesisatçı", "çankaya tesisatçı", "yenimahalle tesisatçı", "mamak tesisatçı", "etimesgut tesisatçı", "sincan tesisatçı", 
    "batıkent tesisatçı", "çayyolu tesisatçı", "eryaman tesisatçı", "ümitköy tesisatçı", "kızılay tesisatçı", "dikmen tesisatçı", "bahçelievler tesisatçı", "bağlıca tesisatçı", "yaşamkent tesisatçı", "pursaklar tesisatçı", "gölbaşı tesisatçı"
  ].join(", "),
  alternates: {
    canonical: "https://724ankaratesisat.com",
  },
  verification: {
    google: "0_7cdgOaP1e790kb1VdN420FRe2ArAFZ_NJygXNTVCM",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "7/24 Ankara Tesisatçı | Acil Müdahale Ekibi",
    description: "Ankara'da kırmadan su kaçağı tespiti, robotla tıkanıklık açma ve tüm sıhhi tesisat işleri için 30 dakikada adresinizdeyiz.",
    url: "https://724ankaratesisat.com",
    siteName: "7/24 Ankara Tesisat",
    locale: "tr_TR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "7/24 Ankara Tesisat",
  "image": "https://724ankaratesisat.com/logo.png",
  "url": "https://724ankaratesisat.com",
  "telephone": "+905368440799",
  "priceRange": "₺₺",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.9,
    "reviewCount": 248
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ankara",
    "addressRegion": "Ankara",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.9334,
    "longitude": 32.8597
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    { "@type": "City", "name": "Keçiören" },
    { "@type": "City", "name": "Çankaya" },
    { "@type": "City", "name": "Yenimahalle" },
    { "@type": "City", "name": "Mamak" },
    { "@type": "City", "name": "Etimesgut" },
    { "@type": "City", "name": "Sincan" }
  ],
  "description": "Ankara genelinde 7/24 garantili sıhhi tesisat tamiri, kırmadan cihazla su kaçağı tespiti ve robot cihazlarla tıkalı gider açma servisiyiz."
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Su kaçağı tespiti için evi kırmak gerekiyor mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kesinlikle hayır. Akustik dinleme cihazları ve yüksek çözünürlüklü termal kameralar kullanarak alt kata sızan gizli su kaçaklarını tek bir fayans bile kırmadan noktasal olarak tespit ediyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Tesisatçı ne kadar sürede gelir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ankara merkez, Çankaya, Keçiören, Yenimahalle dahil tüm ana ilçelerdeki acil tesisat arızaları için mobil donanımlı araçlarımızla ortalama 30 dakika içerisinde adresinize ulaşıyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Tıkalı tuvalet ve gider açma işlemi garantili mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. Robotlu helezon yay ve kameralı sistemlerimizle pimaş borularındaki kireç, donmuş yağ ve erimeyen kalıntıları tamamen söküp atıyor, %100 tıkanıklık açma garantisi veriyoruz."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
