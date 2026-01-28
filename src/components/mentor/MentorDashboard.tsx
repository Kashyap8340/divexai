'use client';

import { MOCK_CLASSES } from '@/lib/data';
import { Calendar, Users, TrendingUp, Clock, PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function MentorDashboard() {
    const upcomingClasses = MOCK_CLASSES.filter(c => new Date(c.date) > new Date()).slice(0, 3);
    const totalClasses = MOCK_CLASSES.length;
    // Mock data calculations
    const totalStudents = 12;
    const avgAttendance = '94%';

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Dashboard</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Overview of your 12-week course progress.</p>
                </div>
                <button className="btn btn-primary">
                    <PlusCircle size={20} />
                    <span>New Assessment</span>
                </button>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(99,102,241,0.2)', borderRadius: '12px', color: 'var(--primary)' }}>
                            <Users size={24} />
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>Total Students</span>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700 }}>{totalStudents}</div>
                </div>
                <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(20,184,166,0.2)', borderRadius: '12px', color: 'var(--secondary)' }}>
                            <Calendar size={24} />
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>Scheduled Classes</span>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700 }}>{totalClasses}</div>
                </div>
                <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(16,185,129,0.2)', borderRadius: '12px', color: 'var(--success)' }}>
                            <TrendingUp size={24} />
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>Avg. Attendance</span>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700 }}>{avgAttendance}</div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                {/* Upcoming Classes */}
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Upcoming Classes</h3>
                        <Link href="/dashboard/mentor/schedule" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 500 }}>View All</Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {upcomingClasses.map(session => (
                            <div key={session.id} style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ marginRight: '1rem', padding: '0.75rem', background: 'var(--surface)', borderRadius: '8px', textAlign: 'center', minWidth: '60px' }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{new Date(session.date).toLocaleString('default', { month: 'short' })}</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{new Date(session.date).getDate()}</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>Week {session.week}</div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{session.title}</h4>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={14} /> 2:00 PM - 4:00 PM
                                    </div>
                                </div>
                                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Edit View</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Notifications */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #4338ca 100%)', border: 'none' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>Weekly Report</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                            Week 5 performance report is ready for review.
                        </p>
                        <button style={{ background: 'white', color: 'var(--primary)', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', width: '100%' }}>Review Now</button>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Pending Grading</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No pending assessments.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
