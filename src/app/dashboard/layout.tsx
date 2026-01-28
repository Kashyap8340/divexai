'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogOut, Home, MessageSquare, Calendar, Users, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    if (!user) return null;

    const getLinks = () => {
        if (user.role === 'mentor') {
            return [
                { label: 'Dashboard', href: '/dashboard/mentor', icon: Home },
                { label: 'My Students', href: '/dashboard/mentor/students', icon: Users },
                { label: 'Schedule', href: '/dashboard/mentor/schedule', icon: Calendar },
                { label: 'Messages', href: '/dashboard/mentor/chat', icon: MessageSquare },
            ];
        } else {
            return [
                { label: 'Dashboard', href: '/dashboard/student', icon: Home },
                { label: 'My Schedule', href: '/dashboard/student/schedule', icon: Calendar },
                { label: 'Performance', href: '/dashboard/student/performance', icon: Users },
                { label: 'Messages', href: '/dashboard/student/chat', icon: MessageSquare },
            ];
        }
    };

    const links = getLinks();

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{ width: '260px', backgroundColor: 'var(--surface)', borderRight: '1px solid var(--border)', padding: '1.5rem', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh' }}>
                <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--primary)', borderRadius: '8px' }}></div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Divexa</span>
                </div>

                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.75rem 1rem',
                                    borderRadius: 'var(--radius)',
                                    backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                                    color: isActive ? 'white' : 'var(--text-muted)',
                                    transition: 'all 0.2s',
                                    fontWeight: 500
                                }}
                            >
                                <Icon size={20} />
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={user.avatar} alt={user.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>{user.role}</div>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', width: '100%', background: 'transparent', border: 'none', color: 'var(--error)', cursor: 'pointer', borderRadius: 'var(--radius)' }}
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ marginLeft: '260px', flex: 1, padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
}
