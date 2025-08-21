export interface Product {
  id: number;
  name: string;
  origin?: string;
  price: number;
  originalPrice?: number;
  roast?: 'Light' | 'Medium' | 'Dark' | 'Light-Medium' | 'Medium-Dark';
  notes?: string;
  imageUrls: string[];
  dataAiHint: string;
  description: string;
  specs?: { [key: string]: string };
  rating?: number;
  reviews?: number;
  isCombo?: boolean;
  comboProducts?: { name: string, id: number }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    price: 22.00,
    roast: 'Light',
    notes: 'Floral, Lemon, Tea',
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png'
    ],
    dataAiHint: 'coffee bag',
    description: 'A bright and aromatic light roast with delicate floral notes and a refreshing citrusy finish. Grown in the renowned Yirgacheffe region, this coffee is a testament to Ethiopia\'s rich coffee heritage.',
    specs: {
      'Region': 'Yirgacheffe, Ethiopia',
      'Process': 'Washed',
      'Altitude': '1,800 - 2,200 meters',
      'Variety': 'Heirloom'
    },
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    origin: 'Colombia',
    price: 19.50,
    roast: 'Medium',
    notes: 'Caramel, Nutty, Citrus',
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
    ],
    dataAiHint: 'coffee beans',
    description: 'A classic, well-balanced medium roast from the heart of Colombia. Expect smooth notes of caramel and toasted nuts, with a pleasant hint of citrus acidity that brightens the cup.',
    specs: {
      'Region': 'Huila, Colombia',
      'Process': 'Washed',
      'Altitude': '1,500 - 1,800 meters',
      'Variety': 'Caturra, Castillo'
    },
    rating: 4.7,
    reviews: 250,
  },
  {
    id: 3,
    name: 'Sumatra Mandheling',
    origin: 'Indonesia',
    price: 21.00,
    roast: 'Dark',
    notes: 'Earthy, Cedar, Dark Chocolate',
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png'
    ],
    dataAiHint: 'coffee farm',
    description: 'A bold and full-bodied dark roast from the island of Sumatra. Its distinctive earthy and cedar notes are complemented by a rich, dark chocolate finish, offering a truly unique flavor experience.',
    specs: {
      'Region': 'Aceh, Sumatra, Indonesia',
      'Process': 'Giling Basah (Wet-Hulled)',
      'Altitude': '1,200 - 1,500 meters',
      'Variety': 'Typica'
    },
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 4,
    name: 'Kenya AA',
    origin: 'Kenya',
    price: 24.00,
    roast: 'Light-Medium',
    notes: 'Blackcurrant, Winey, Bright',
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
    ],
    dataAiHint: 'brewed coffee',
    description: 'Renowned for its vibrant acidity and complex fruit notes, this Kenyan coffee is a delight. Look for a distinct blackcurrant flavor with a wine-like brightness that makes for a lively and memorable cup.',
    specs: {
      'Region': 'Nyeri, Kenya',
      'Process': 'Washed',
      'Altitude': '1,700 - 1,900 meters',
      'Variety': 'SL-28, SL-34'
    },
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 5,
    name: 'Guatemala Antigua',
    origin: 'Guatemala',
    price: 20.00,
    roast: 'Medium',
    notes: 'Chocolate, Toffee, Apple',
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
    ],
    dataAiHint: 'coffee cup',
    description: 'A beautifully structured coffee from the Antigua Valley of Guatemala. This medium roast boasts rich chocolate and toffee notes, balanced by a subtle malic acidity reminiscent of a crisp apple.',
    specs: {
      'Region': 'Antigua, Guatemala',
      'Process': 'Washed',
      'Altitude': '1,500 - 1,700 meters',
      'Variety': 'Bourbon, Caturra'
    },
    rating: 4.7,
    reviews: 215,
  },
  {
    id: 6,
    name: 'Brazil Cerrado',
    origin: 'Brazil',
    price: 18.50,
    roast: 'Medium-Dark',
    notes: 'Nutty, Chocolate, Low Acidity',
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
    ],
    dataAiHint: 'roasted coffee',
    description: 'A smooth and satisfying coffee from the Cerrado region of Brazil. This medium-dark roast is known for its classic nutty and chocolate flavor profile with a very low acidity, making it perfect for espresso or a rich drip brew.',
    specs: {
      'Region': 'Cerrado Mineiro, Brazil',
      'Process': 'Natural',
      'Altitude': '800 - 1,300 meters',
      'Variety': 'Mundo Novo, Catuai'
    },
    rating: 4.5,
    reviews: 301,
  },
  {
    id: 7,
    name: 'Light & Dark Duo',
    price: 40.00,
    originalPrice: 43.00,
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
    ],
    dataAiHint: 'coffee combo',
    description: 'Experience the full spectrum of flavor with our Light & Dark Duo. This combo features a bag of our bright and floral Ethiopian Yirgacheffe light roast, and a bag of our bold and earthy Sumatra Mandheling dark roast. It\'s the perfect way to explore two distinct and delicious coffee profiles.',
    isCombo: true,
    comboProducts: [
      { name: 'Ethiopian Yirgacheffe', id: 1 },
      { name: 'Sumatra Mandheling', id: 3 },
    ],
    rating: 4.8,
    reviews: 42,
  },
  {
    id: 8,
    name: 'Medium Roast Sampler',
    price: 36.00,
    originalPrice: 39.50,
    imageUrls: [
        'https://placehold.co/800x800.png',
        'https://placehold.co/800x800.png',
    ],
    dataAiHint: 'coffee sampler',
    description: 'Take a tour of our most popular medium roasts. This sampler includes a bag of the classic, well-balanced Colombian Supremo and a bag of the beautifully structured Guatemala Antigua. Discover the rich chocolate, toffee, and caramel notes that make these coffees perennial favorites.',
    isCombo: true,
    comboProducts: [
      { name: 'Colombian Supremo', id: 2 },
      { name: 'Guatemala Antigua', id: 5 },
    ],
    rating: 4.7,
    reviews: 78,
  }
];
