
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  outcome: string;
  idealFor: string;
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  type: 'Demo' | 'Client';
  imageUrl: string;
}

export interface ServicePillar {
  title: string;
  items: string[];
  icon: string;
}

export interface ContactLinks {
  whatsapp: string;
  portfolio: string;
  email: string;
}

export interface SiteData {
  pricing: PricingPlan[];
  portfolio: PortfolioItem[];
  contactLinks: ContactLinks;
  services: ServicePillar[];
}
