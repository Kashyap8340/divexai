'use client';

import { MOCK_CLASSES } from '@/lib/data';
import { Calendar, CheckCircle, Clock, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
    const upcomingClasses = MOCK_CLASSES.filter(c => new Date(c.date) > new Date()).slice(0, 2);
    const completedClasses = MOCK_CLASSES.filter(c => c.completed).length;
    const totalClasses = MOCK_CLASSES.length;
    const progress = Math.round((completedClasses / totalClasses) * 100);

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Learning Path</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Track your progress through the 12-week intensive course.</p>
                </div>
            </div>

            {/* Progress Section */}
            <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(to right, #1e293b, #0f172a)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Course Progress</h3>
                    <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{progress}% Completed</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '6px' }}></div>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem' }}>
                    <div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Classes Attended</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{completedClasses}/{totalClasses}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Current Streak</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            3 Weeks <Trophy size={20} color="#fbbf24" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                {/* Next Up */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Next Sessions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {upcomingClasses.map((session, i) => (
                            <div key={session.id} className="card" style={{ display: 'flex', alignItems: 'center', borderLeft: i === 0 ? '4px solid var(--primary)' : '1px solid var(--border)' }}>
                                <div style={{ marginRight: '1.5rem', textAlign: 'center', minWidth: '60px' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 600 }}>Week</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{session.week}</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>{session.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{session.description}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {new Date(session.date).toLocaleDateString()}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} /> 2:00 PM</span>
                                    </div>
                                </div>
                                <Link href={`/dashboard/student/class/${session.id}`}>
                                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                                        Start Class <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mentor Suggestions */}
                <div className="card">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Mentor Feedback</h3>
                    <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <div style={{ fontWeight: 600, color: '#fca5a5', marginBottom: '0.5rem' }}>Area for Improvement</div>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                            Focus on using more complex sentence structures in your speaking practice. Avoid simple "Subject-Verb-Object" patterns repeatedly.
                        </p>
                    </div>
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', padding: '1rem', borderRadius: '8px' }}>
                        <div style={{ fontWeight: 600, color: '#6ee7b7', marginBottom: '0.5rem' }}>Well Done</div>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                            Great vocabulary usage in the last quiz!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
