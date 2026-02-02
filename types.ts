
export type Page = 'dashboard' | 'calendar' | 'messages' | 'homework' | 'assignment' | 'activity' | 'settings' | 'design-system' | 'whatsapp' | 'lessons' | 'ai-tutor' | 'recitals' | 'financial' | 'community' | 'discover' | 'live-session' | 'studio' | 'showcase';

export interface Student {
  name: string;
  instrument: string;
  avatar: string;
  level: number;
  streak: number;
  tuitionStatus: 'paid' | 'pending' | 'overdue';
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'graded' | 'done';
  description: string;
  icon: string;
  grade?: string;
  feedback?: string;
}

export interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
  isMe: boolean;
  avatar?: string;
}
