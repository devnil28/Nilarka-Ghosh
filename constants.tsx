
import React from 'react';
import { Trainer, GymSection } from './types';

export const COLORS = {
  primary: '#ff3131', // Electric Red
  background: '#050505',
  surface: '#121212',
  text: '#ffffff',
  accent: '#00d2ff', // Electric Blue for tech elements
};

export const LOGO_SVG = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10H14V30H10V10Z" fill="currentColor" />
    <path d="M26 10H30V30H26V10Z" fill="currentColor" />
    <path d="M14 15L20 20L26 15V19L20 24L14 19V15Z" fill="currentColor" />
    <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20Z" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

export const SECTIONS: GymSection[] = [
  {
    id: 'recovery',
    title: 'Recovery',
    icon: '🧘',
    description: 'Advanced mobility, stretching, and rehab tools for ultimate longevity.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cardio',
    title: 'Cardio',
    icon: '❤️',
    description: 'Smart treadmills and performance cycles with real-time biometric tracking.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    icon: '🔥',
    description: 'High-intensity functional training designed to build athletic power.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lifting',
    title: 'Weights',
    icon: '💪',
    description: 'Elite powerlifting stations and high-precision machinery.',
    image: 'https://images.unsplash.com/photo-1534367507873-d2b7e24959cf?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Vikram Singh',
    specialty: 'Powerlifting & Strength',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Ananya Roy',
    specialty: 'Functional Mobility',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Rohan Mehra',
    specialty: 'CrossFit Specialist',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80&w=400'
  }
];
