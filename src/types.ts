// src/types.ts
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

// GENEL ARAYÜZLER
export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  description?: string;
  image?: string;
}

export interface CallToAction {
  text: string;
  href: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  class?: string; 
}

export interface Item {
  title: string;
  description?: string;
  icon?: string;
  href?: string;
}
export interface Feature {
  _key: string; // Sanity'den gelen array elemanları için
  title: string;
  description: string;
  icon: string;
}
export interface Post {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  excerpt?: string;
  publishedAt: string;
  body?: any; // Consider using a more specific type for Portable Text
}

// WIDGET'LARIN KULLANDIĞI TEMEL YAPI
export interface Widget {
  id?: string;
  isDark?: boolean;
  classes?: Record<string, string>;
  bg?: AstroComponentFactory | string;
}

// BİLEŞENLERE ÖZEL ARAYÜZLER
export interface Features extends Widget {
  title?: any;
  subtitle?: any;
  tagline?: any;
  items?: Array<Item>;
  columns?: number;
}

export interface Hero extends Widget {
  title?: any;
  subtitle?: any;
  tagline?: string;
  content?: any;
  actions?: Array<CallToAction>;
  image?: string | { src: string; alt: string };
}


export interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}
export interface MenuLink extends Link {
  links?: Array<MenuLink>;
}


export interface Stats extends Widget {
  stats?: Array<{ title: string; amount: string }>;
}