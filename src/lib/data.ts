// import { LucideIcon, BookOpen, user } from 'lucide-react'; // Removed unused

export type Role = 'student' | 'mentor';

export interface User {
    id: string;
    name: string;
    role: Role;
    email: string;
    avatar?: string;
}

export interface ClassSession {
    id: string;
    week: number;
    title: string;
    description: string;
    date: string;
    completed: boolean;
    videoUrl?: string; // Mock URL
    materials?: string[];
}

export const MOCK_USERS: User[] = [
    {
        id: 's1',
        name: 'Alex Johnson',
        role: 'student',
        email: 'alex@student.com',
        avatar: 'https://i.pravatar.cc/150?u=s1'
    },
    {
        id: 'm1',
        name: 'Sarah Drasner',
        role: 'mentor',
        email: 'sarah@mentor.com',
        avatar: 'https://i.pravatar.cc/150?u=m1'
    }
];

export const MOCK_CLASSES: ClassSession[] = Array.from({ length: 24 }).map((_, i) => ({
    id: `c${i + 1}`,
    week: Math.floor(i / 2) + 1,
    title: `Week ${Math.floor(i / 2) + 1} - Session ${(i % 2) + 1}`,
    description: 'Focus on advanced grammar and vocabulary expansion.',
    date: new Date(Date.now() + i * 86400000).toISOString(),
    completed: i < 3,
}));
