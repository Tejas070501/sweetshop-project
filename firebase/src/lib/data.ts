
import type { Sweet, Order } from './definitions';

// In a real app, this data would come from a database.
const sweets: Sweet[] = [
  {
    id: '1',
    name: 'Gulab Jamun',
    description: 'Soft, spongy, milk-solid balls soaked in a light and sweet sugar syrup flavored with rose water.',
    price: 280,
    category: 'Milk-Based',
    imageUrl: 'https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img_4f2bd570-4f11-4dba-8386-fa5a26392cd0.webp?v=1725262395&width=3840',
    imageHint: 'gulab jamun',
    stock: 25,
    isSpecial: true,
  },
  {
    id: '2',
    name: 'Jalebi',
    description: 'Crispy, chewy, spiral-shaped sweets made from fermented batter, deep-fried and soaked in saffron syrup.',
    price: 240,
    category: 'Flour-Based',
    imageUrl: 'https://media.istockphoto.com/id/666999640/photo/indian-sweet-jalebi.jpg?s=612x612&w=0&k=20&c=HThX0goLh4odAYAErT_jHp6WwqkvEVSn6efONUUCqxA=',
    imageHint: 'jalebi',
    stock: 30,
    isSpecial: true,
  },
  {
    id: '3',
    name: 'Besan Ladoo',
    description: 'A popular Indian sweet made from gram flour, powdered sugar, and ghee, often flavored with cardamom.',
    price: 320,
    category: 'Flour-Based',
    imageUrl: 'https://www.shutterstock.com/image-photo/traditional-ball-shaped-indian-mithai-600nw-2258232827.jpg',
    imageHint: 'besan ladoo',
    stock: 40,
    isSpecial: false,
  },
  {
    id: '4',
    name: 'Kaju Katli',
    description: "A diamond-shaped sweet made from cashew nuts, sugar, and ghee. A classic festive delicacy.",
    price: 440,
    category: 'Nut-Based',
    imageUrl: 'https://www.parsidairyfarm.com/cdn/shop/files/KajuKatli_375x375_crop_center.jpg?v=1699528323',
    imageHint: 'kaju katli',
    stock: 20,
    isSpecial: true,
  },
  {
    id: '5',
    name: 'Rasmalai',
    description: 'Soft paneer discs soaked in thickened, sweetened and flavored milk, garnished with nuts.',
    price: 380,
    category: 'Milk-Based',
    imageUrl: 'https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=',
    imageHint: 'rasmalai',
    stock: 15,
    isSpecial: false,
  },
  {
    id: '6',
    name: 'Mysore Pak',
    description: 'A rich sweet dish from Mysore made of gram flour, ghee, sugar and water, with a porous texture.',
    price: 340,
    category: 'Flour-Based',
    imageUrl: 'https://media.istockphoto.com/id/499045932/photo/mysore-pak.jpg?s=612x612&w=0&k=20&c=RGJzhT4DPJLLqX0LVwhDpNlxD7GtjSyZLguKh8uLAiY=',
    imageHint: 'mysore pak',
    stock: 18,
    isSpecial: false,
  },
  {
    id: '7',
    name: 'Peda',
    description: 'A semi-soft sweet made from khoa, sugar, and traditional flavorings like cardamom and saffron.',
    price: 260,
    category: 'Milk-Based',
    imageUrl: 'https://aartiatmaram.com/wp-content/uploads/2021/10/Paneer-Peda-scaled.jpg',
    imageHint: 'peda sweet',
    stock: 0,
    isSpecial: false,
  },
  {
    id: '8',
    name: 'Kulfi',
    description: 'Traditional Indian ice cream, dense and creamy, often flavored with pistachio, mango, or cardamom.',
    price: 400,
    category: 'Frozen',
    imageUrl: 'https://t3.ftcdn.net/jpg/01/41/76/88/360_F_141768845_jsbAAHDmY0zTasngshLDnKEzpwbA9noi.jpg',
    imageHint: 'kulfi ice cream',
    stock: 20,
    isSpecial: false,
  },
  {
    id: '9',
    name: 'Soan Papdi',
    description: "A crisp, flaky and melt-in-your-mouth confection that's popular across the country.",
    price: 320,
    category: 'Flour-Based',
    imageUrl: 'https://www.indianrecipeinfo.com/wp-content/uploads/2010/12/Soan-Papdi.jpg',
    imageHint: 'soan papdi',
    stock: 22,
    isSpecial: false,
  },
  {
    id: '10',
    name: 'Barfi',
    description: "An assortment of dense milk-based sweets, often flavored with fruits and nuts.",
    price: 300,
    category: 'Milk-Based',
    imageUrl: 'https://t3.ftcdn.net/jpg/16/42/00/76/360_F_1642007683_TpuXZaVURl5eEOJboPTVwPAfLmza6lQx.jpg',
    imageHint: 'barfi',
    stock: 35,
    isSpecial: false,
  },
];

const orders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      { sweetId: '1', name: 'Gulab Jamun', quantity: 4, price: 280 },
      { sweetId: '4', name: 'Kaju Katli', quantity: 2, price: 440 }
    ],
    total: 2000.0,
    date: new Date().toISOString()
  },
  {
    id: 'ORD-002',
    items: [
      { sweetId: '2', name: 'Jalebi', quantity: 10, price: 240 }
    ],
    total: 2400.0,
    date: new Date().toISOString()
  },
  {
    id: 'ORD-003',
    items: [
      { sweetId: '5', name: 'Rasmalai', quantity: 4, price: 380 },
      { sweetId: '3', name: 'Besan Ladoo', quantity: 6, price: 320 }
    ],
    total: 3440.0,
    date: new Date().toISOString()
  }
];

const galleryImages = [
  { id: 'gallery-1', src: 'https://images.pexels.com/videos/31848507/annkoot-artisan-food-31848507.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200', alt: 'A vibrant display of assorted Indian sweets.', hint: 'indian sweets' },
  { id: 'gallery-2', src: 'https://lynkfoods.com/cdn/shop/articles/WhatsApp_Image_2024-11-04_at_14.37.47.jpg?v=1756371421&width=1100', alt: 'Close-up of a beautifully garnished Kaju Katli.', hint: 'kaju katli' },
  { id: 'gallery-3', src: 'https://vmsd.com/wp-content/uploads/2021/03/RMDK_Anand-Sweets_02.jpg', alt: 'The warm, inviting interior of the sweet shop.', hint: 'indian cafe' },
  { id: 'gallery-4', src: 'https://th-i.thgim.com/public/life-and-style/food/mjtm8i/article25333827.ece/alternates/LANDSCAPE_1200/28SMsweetjpg', alt: 'A halwai (sweet maker) preparing fresh Jalebi.', hint: 'making jalebi' },
  { id: 'gallery-5', src: 'https://thumbs.dreamstime.com/b/vibrant-indian-barfi-sweets-garnished-edible-silver-leaf-selection-artfully-arranged-platter-showcasing-array-382371670.jpg', alt: 'A colorful stack of various Barfis.', hint: 'indian barfi' },
  { id: 'gallery-6', src: 'https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2021/10/How-to-make-Angoori-Gulab-Jamun-9.jpg.webp', alt: 'Delicious-looking Gulab Jamuns in syrup.', hint: 'gulab jamun' },
  { id: 'gallery-7', src: 'https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-5.jpg.webp', alt: 'Freshly made Ladoos on a tray.', hint: 'fresh ladoos' },
  { id: 'gallery-8', src: 'https://tiimg.tistatic.com/fp/1/007/895/mouth-watering-delicious-creamy-sweet-tasty-and-nutty-yummy-kulfi-ice-cream-290.jpg', alt: 'Sticks of creamy Kulfi.', hint: 'kulfi stick' },
]


// Simulate database calls
export async function getSweets(): Promise<Sweet[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return sweets;
}

export async function getSweetById(id: string): Promise<Sweet | undefined> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return sweets.find(sweet => sweet.id === id);
}

export async function getOrders(): Promise<Order[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return orders;
}

export async function getGalleryImages() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return galleryImages;
}
