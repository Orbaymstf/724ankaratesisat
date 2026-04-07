export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  icon?: string;
}

export const services: Service[] = [
  {
    slug: "su-kacagi-tespiti",
    title: "Su Kaçağı Tespiti",
    shortDesc: "Kırmadan cihazla noktasal su sızıntısı bulma.",
    description: "Modern cihazlarımızla kırmadan su kaçağı tespiti yapıyoruz. Akustik dinleme cihazları ve termal kameralar kullanarak kaçağın yerini milimetrik olarak belirliyoruz.",
  },
  {
    slug: "tikaniklik-acma",
    title: "Tıkanıklık Açma",
    shortDesc: "Robot makinelerle kırmadan tıkalı gider açma.",
    description: "Lavabo, tuvalet, pimaş ve logar tıkanıklıklarını robot cihazlarla kırmadan açıyoruz. Kameralı görüntüleme ile tıkanıklığın sebebini tespit ediyoruz.",
  },
  {
    slug: "klozet-tamiri",
    title: "Klozet Tamiri",
    shortDesc: "Gömme rezervuar ve klozet iç takım tamiri.",
    description: "Her marka gömme rezervuar ve klozet tamiri, iç takım değişimi ve montaj hizmeti sunuyoruz. Orijinal yedek parça desteği ile 7/24 yanınızdayız.",
  },
  {
    slug: "petek-temizligi",
    title: "Petek Temizliği",
    shortDesc: "İlaçlı ve makineli petek yıkama servisi.",
    description: "Isınmayan petekler için makine ve özel kimyasallarla temizlik yapıyoruz. Daha az fatura ve daha iyi ısınma için periyodik temizlik öneriyoruz.",
  },
  {
    slug: "daire-ici-tadilat-ve-yenileme",
    title: "Daire İçi Tadilat",
    shortDesc: "Banyo, mutfak ve komple daire yenileme.",
    description: "Banyo ve mutfak başta olmak üzere komple daire tadilatı, fayans, boya ve tesisat yenileme işlerinizi anahtar teslim profesyonelce yapıyoruz.",
  },
];
