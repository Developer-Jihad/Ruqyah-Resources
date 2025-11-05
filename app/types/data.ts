// Type definitions for JSON data files

export interface VideoItem {
  url: string;
}

export interface VideosData {
  [category: string]: VideoItem[];
}

export interface Center {
  name?: string;
  names?: string[];
  organization?: string;
  address?: string;
  additional_address?: string;
  contact?: string;
  consultation_time?: string;
  page_link?: string;
  notes?: string;
}

export interface Locations {
  [city: string]: Center[];
}

export interface RaqyContactsData {
  locations: Locations;
}

