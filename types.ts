
export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface GymSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
