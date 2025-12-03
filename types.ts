export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  link: string;
  theme: 'light' | 'dark';
}

export interface NavItem {
  label: string;
  href: string;
}
