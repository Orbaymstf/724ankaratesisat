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

/**
 * Adds the correct Turkish possessive suffix to a word (district name).
 * Handles vowel harmony and vowel endings.
 * Example: Sincan -> Sincan'ın, Çankaya -> Çankaya'nın, Keçiören -> Keçiören'in
 */
export function getPossessiveName(name: string): string {
  if (!name) return "Ankara'nın";
  if (name.toLowerCase() === "ankara") return "Ankara'nın";
  
  const vowels = "aeıioöuüâAEIİOÖUÜÂ";
  const lastChar = name[name.length - 1];
  const isVowelEnding = vowels.includes(lastChar);
  
  // Find the last vowel in the word
  let lastVowel = '';
  for (let i = name.length - 1; i >= 0; i--) {
    if (vowels.includes(name[i])) {
      lastVowel = name[i].toLowerCase();
      break;
    }
  }

  let suffix = '';
  // Turkish vowel harmony rules for possessive suffixes ('-in', '-ın', '-un', '-ün')
  if (['a', 'ı', 'â'].includes(lastVowel)) suffix = isVowelEnding ? 'nın' : 'ın';
  else if (['e', 'i'].includes(lastVowel)) suffix = isVowelEnding ? 'nin' : 'in';
  else if (['o', 'u'].includes(lastVowel)) suffix = isVowelEnding ? 'nun' : 'un';
  else if (['ö', 'ü'].includes(lastVowel)) suffix = isVowelEnding ? 'nün' : 'ün';

  return `${name}'${suffix}`;
}

export const districts = districtNames.map(name => ({
  name,
  slug: slugify(name)
}));
