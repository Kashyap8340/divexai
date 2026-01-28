'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, MOCK_USERS } from '@/lib/data';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: User | null;
    login: (email: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const login = (email: string) => {
        const foundUser = MOCK_USERS.find(u => u.email === email);
        if (foundUser) {
            setUser(foundUser);
            if (foundUser.role === 'mentor') {
                router.push('/dashboard/mentor');
            } else {
                router.push('/dashboard/student');
            }
        } else {
            alert('Invalid email. Try alex@student.com or sarah@mentor.com');
        }
    };

    const logout = () => {
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
