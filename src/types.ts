export type ServiceCategory = 'all' | 'graphics' | 'website' | 'software' | 'branding' | 'digital' | 'repairs' | 'business';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: ServiceCategory;
  shortDesc: string;
  detailedDesc: string;
  specs: string;
  included: string;
  startingPrice: number;
  priceFormatted: string;
  priceNote?: string;
  turnaround?: string;
  iconName: string;
  popular?: boolean;
}

export interface QuoteSelection {
  serviceId: string;
  quantity: number;
  selectedOption?: string;
}

export interface AgencyContact {
  name: string;
  tagline: string;
  subtagline: string;
  heroPitch: string;
  locationLine: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  city: string;
  country: string;
  establishedYear: number;
}
