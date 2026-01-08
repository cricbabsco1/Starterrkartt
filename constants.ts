
import { SiteData } from './types';

export const INITIAL_DATA: SiteData = {
  pricing: [
    {
      id: 'starter',
      name: 'Starter',
      price: '₹3499',
      description: 'Designed for small clothing shops that want a simple online storefront with COD and WhatsApp orders.',
      features: [
        'Homepage',
        'Catalog (up to 20 products)',
        'Sizing & variants',
        'Mobile-first design',
        'COD enabled',
        'WhatsApp order button',
        'Basic shipping setup',
        '2-day setup'
      ],
      outcome: 'Customers can browse catalog and place orders via WhatsApp or COD.',
      idealFor: 'Boutiques, resellers, offline shop owners, and Instagram clothing pages.'
    },
    {
      id: 'brand-store',
      name: 'Brand Store',
      price: '₹6999',
      description: 'For clothing brands that want full checkout, payments, and delivery flows.',
      features: [
        'Everything in Starter',
        'Online checkout (UPI + Cards + Netbanking)',
        'Payment gateway integration (Razorpay, PhonePe, etc.)',
        'Advanced shipping integration',
        'Collections + Lookbook pages',
        'Search & filtering',
        'Domain + SSL setup',
        'Legal & policy pages',
        'Order notifications',
        '4–5 homepage banners'
      ],
      outcome: 'Customers browse → add to cart → pay → receive delivery.',
      idealFor: 'Streetwear, thrift, boutiques, and growing clothing brands.',
      isPopular: true
    },
    {
      id: 'growth',
      name: 'Growth+',
      price: '₹12999+',
      description: 'For clothing brands that want automation and operational scaling.',
      features: [
        'Everything in Brand Store',
        'AI chatbot for FAQs & product help',
        'Email & WhatsApp automation',
        'Reviews & ratings',
        'Customer accounts',
        'Analytics & tracking',
        'Inventory tools',
        'Blog / content pages',
        'Priority support'
      ],
      outcome: 'Brand appears premium, runs efficiently, automates customer communication, and scales operations.',
      idealFor: 'Multi-location shops, high-volume boutiques, and serious D2C brands.'
    }
  ],
  portfolio: [
    {
      id: '1',
      title: 'Streetly',
      type: 'Demo',
      imageUrl: 'https://picsum.photos/800/1200?random=1'
    },
    {
      id: '2',
      title: 'JaipurRangs',
      type: 'Client',
      imageUrl: 'https://picsum.photos/800/1200?random=2'
    }
  ],
  contactLinks: {
    whatsapp: 'https://wa.me/919818082449',
    portfolio: '#portfolio',
    email: 'starterkartt@gmail.com'
  },
  services: [
    {
      title: 'Storefront Setup',
      icon: 'Layout',
      items: ['Catalog management', 'Collections', 'Variants', 'Sizing charts', 'Lookbook pages']
    },
    {
      title: 'Payments & Orders',
      icon: 'CreditCard',
      items: ['COD Setup', 'UPI integration', 'Online checkout', 'WhatsApp orders']
    },
    {
      title: 'Delivery & Logistics',
      icon: 'Truck',
      items: ['Shipping setup', 'Live tracking', 'Delivery zones', 'Rate configuration']
    },
    {
      title: 'Support & Tools',
      icon: 'ShieldCheck',
      items: ['AI Chatbot', 'Domain & SSL', 'Legal Policies', 'Order notifications']
    }
  ]
};

export const FAQ_DATA = [
  {
    q: "Do you charge any monthly commissions?",
    a: "No. We charge a one-time setup fee. Any platform fees (like Shopify or Payment Gateways) are paid directly to those providers."
  },
  {
    q: "How long does it take to launch?",
    a: "Starter plans are ready in 2 days. Brand stores typically take 5-7 working days depending on catalog size."
  },
  {
    q: "Can I manage my own catalog?",
    a: "Absolutely. We provide a simple dashboard where you can add, edit, or delete products and inventory easily."
  },
  {
    q: "Do I need professional photos?",
    a: "While professional photos help, clean mobile photos with good lighting work great for Instagram-first brands. We can guide you on best practices."
  },
  {
    q: "Is COD available for all plans?",
    a: "Yes, COD is a critical part of Indian e-commerce, and we enable it for all storefronts we build."
  }
];
