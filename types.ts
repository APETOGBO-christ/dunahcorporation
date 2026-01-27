import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;

  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  PHILOSOPHY = 'philosophy',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}