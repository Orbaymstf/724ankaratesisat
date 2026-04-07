export const districtNames = [
  "Akyurt", "Altındağ", "Ayaş", "Balâ", "Çankaya", 
  "Çubuk", "Elmadağ", "Etimesgut", "Gölbaşı", "Güdül", "Haymana", 
  "Kahramankazan", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", 
  "Polatlı", "Pursaklar", "Sincan", "Yenimahalle"
];

export function slugify(text: string): string {
  const charMap: { [key: string]: string } = {
    'ç': 'c', 'Ç': 'c',
    'ğ': 'g', 'Ğ': 'g',
    'ı': 'i', 'I': 'i', 'İ': 'i',
    'ö': 'o', 'Ö': 'o',
    'ş': 's', 'Ş': 's',
    'ü': 'u', 'Ü': 'u',
    'â': 'a', 'Â': 'a'
  };

  return text
    .split('')
    .map(char => charMap[char] || char)
    .join('')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-');    // Replace multiple - with single -
}

export const districts = districtNames.map(name => ({
  name,
  slug: slugify(name)
}));
