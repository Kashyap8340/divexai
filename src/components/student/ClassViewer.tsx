'use client';

import { MOCK_CLASSES } from '@/lib/data';
import { PlayCircle, FileText, Download, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ClassViewer() {
    const params = useParams();
    const classId = params.id as string;
    const session = MOCK_CLASSES.find(c => c.id === classId) || MOCK_CLASSES[0];

    return (
        <div className="animate-fade-in">
            <Link href="/dashboard/student" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '2rem' }}>

                {/* Main Content Area */}
                <div>
                    {/* Video Player Placeholder */}
                    <div style={{ aspectRatio: '16/9', background: 'black', borderRadius: 'var(--radius)', overflow: 'hidden', position: 'relative', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
                        {session.videoUrl ? (
                            <video src={session.videoUrl} controls style={{ width: '100%', height: '100%' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', background: 'linear-gradient(to bottom, #1f2937, #111827)' }}>
                                <PlayCircle size={64} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p>Video content loading...</p>
                            </div>
                        )}
                    </div>

                    <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{session.title}</h1>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                        {session.description} In this session, we will cover the intricacies of advanced English grammar, focusing on conditional sentences and subjunctive mood.
                    </p>

                    {/* Tabs / Materials */}
                    <div className="card">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Session Materials</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <FileText size={20} color="var(--primary)" />
                                    <span>Grammar Worksheet.pdf</span>
                                </div>
                                <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}><Download size={14} /> Download</button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <FileText size={20} color="var(--primary)" />
                                    <span>Vocabulary List - Week {session.week}.pdf</span>
                                </div>
                                <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}><Download size={14} /> Download</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Completion Status</h3>
                        <button className="btn btn-primary" style={{ width: '100%' }}>
                            <CheckCircle size={18} /> Mark as Completed
                        </button>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Instructor</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://i.pravatar.cc/150?u=m1" alt="Mentor" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                            <div>
                                <div style={{ fontWeight: 600 }}>Sarah Drasner</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Senior Mentor</div>
                            </div>
                        </div>
                        <Link href="/dashboard/student/chat">
                            <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>Message Mentor</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
