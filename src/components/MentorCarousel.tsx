'use client';

import { useEffect, useRef, useState } from 'react';
import { User, PenTool, Mic, BookOpen, MessageSquare, Feather, Briefcase } from 'lucide-react';

const MENTORS = [
    {
        name: 'Aditya Anand Kashyap',
        role: 'Debate & Communication Expert',
        expertise: ['Debate', 'Stage Skills', 'Presentation'],
        icon: Mic,
        color: '#6366f1', // Indigo
        image: 'https://i.pravatar.cc/150?u=aditya'
    },
    {
        name: 'Vinu Jaiswal',
        role: 'Verbal & Writing Coach',
        expertise: ['Intrapersonal Comm.', 'Vocabulary', 'Formal Writing'],
        icon: BookOpen,
        color: '#ec4899', // Pink
        image: 'https://i.pravatar.cc/150?u=vinu'
    },
    {
        name: 'Sumit Kumar',
        role: 'Analytical Thinking Mentor',
        expertise: ['Impromptu Speaking', 'Analytical Writing', 'Critical Thinking'],
        icon: PenTool,
        color: '#f59e0b', // Amber
        image: 'https://i.pravatar.cc/150?u=sumit'
    },
    {
        name: 'Sana Hussain',
        role: 'Creative & Group Coach',
        expertise: ['Group Discussion', 'Essays', 'Poetry'],
        icon: MessageSquare,
        color: '#10b981', // Emerald
        image: 'https://i.pravatar.cc/150?u=sana'
    },
    {
        name: 'Ayushi',
        role: 'Creative Writing Specialist',
        expertise: ['Poetry', 'Story Writing', 'Creative Expression'],
        icon: Feather,
        color: '#8b5cf6', // Violet
        image: 'https://i.pravatar.cc/150?u=ayushi'
    },
    {
        name: 'Bulbul Kant',
        role: 'Professional Comm. Expert',
        expertise: ['Research Writing', 'Business Comm.', 'Corporate Skills'],
        icon: Briefcase,
        color: '#06b6d4', // Cyan
        image: 'https://i.pravatar.cc/150?u=bulbul'
    },
];

export default function MentorCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic (Marquee effect)
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        let scrollPos = 0;
        const speed = 0.5; // Pixels per frame

        const scroll = () => {
            if (!isPaused) {
                scrollPos += speed;
                if (scrollPos >= scrollContainer.scrollWidth / 2) {
                    scrollPos = 0; // Reset for seamless loop (assuming duplicated content)
                }
                scrollContainer.scrollLeft = scrollPos;
            }
            animationId = requestAnimationFrame(scroll);
        };

        // Duplicate content for infinite loop illusion is handled in render by rendering list twice
        // Actually, simpler CSS animation is smoother, but JS allows pause on hover easily.
        // Let's stick to CSS for performance if possible, or simple JS. 
        // JS scrollLeft is reliable.

        // animationId = requestAnimationFrame(scroll);

        // return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    return (
        <div style={{ width: '100%', overflow: 'hidden', padding: '2rem 0', position: 'relative' }}>

            {/* Gradient Masks for Fade Effect */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--background), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--background), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>

            {/* Marquee Container */}
            {/* Using CSS Animation logic in globals.css is cleaner, but inline styles work well for quick Marquee */}
            <div
                className="marquee-container"
                style={{
                    display: 'flex',
                    gap: '2rem',
                    width: 'max-content',
                    animation: 'marquee 40s linear infinite',
                    // Pause on hover
                }}
                onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
                {/* Render Twice for seamless loop */}
                {[...MENTORS, ...MENTORS].map((mentor, index) => (
                    <div
                        key={`${mentor.name}-${index}`}
                        className="card"
                        style={{
                            flex: '0 0 320px',
                            padding: '2rem',
                            borderRadius: '24px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            cursor: 'default',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = mentor.color;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                        }}
                    >
                        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '96px',
                                height: '96px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: `3px solid ${mentor.color}`,
                                padding: '3px',
                                background: 'rgba(0,0,0,0.2)'
                            }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={mentor.image} alt={mentor.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                background: mentor.color,
                                borderRadius: '50%',
                                padding: '0.5rem',
                                color: 'white',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                            }}>
                                <mentor.icon size={16} />
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{mentor.name}</h3>
                        <p style={{ color: mentor.color, fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{mentor.role}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                            {mentor.expertise.map((skill, i) => (
                                <span key={i} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'var(--text-muted)' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); } 
            }
        `}</style>
        </div>
    );
}
