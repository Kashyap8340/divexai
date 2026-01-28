'use client';

import { MOCK_CLASSES } from '@/lib/data';
import { ChevronDown, ChevronRight, FileText, Video, PenTool } from 'lucide-react';
import { useState } from 'react';

export default function ScheduleView() {
    const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

    // Group classes by week
    const weeks = Array.from({ length: 12 }, (_, i) => i + 1);
    const classesByWeek = MOCK_CLASSES.reduce((acc, cls) => {
        if (!acc[cls.week]) acc[cls.week] = [];
        acc[cls.week].push(cls);
        return acc;
    }, {} as Record<number, typeof MOCK_CLASSES>);

    return (
        <div className="animate-fade-in">
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Course Schedule</h1>
                <p style={{ color: 'var(--text-muted)' }}>Manage the curriculum for the 12-week program.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {weeks.map(week => (
                    <div key={week} className="card" style={{ padding: '0', overflow: 'hidden' }}>

                        <div
                            onClick={() => setExpandedWeek(expandedWeek === week ? null : week)}
                            style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', background: expandedWeek === week ? 'rgba(99,102,241,0.05)' : 'transparent' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '32px', height: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                    {expandedWeek === week ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Week {week}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{classesByWeek[week]?.length || 0} Sessions</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(16,185,129,0.1)', color: 'var(--success)', borderRadius: '20px', fontSize: '0.85rem' }}>Active</span>
                            </div>
                        </div>

                        {expandedWeek === week && (
                            <div style={{ borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
                                {classesByWeek[week]?.map(session => (
                                    <div key={session.id} style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            <div style={{ minWidth: '100px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                                {new Date(session.date).toLocaleDateString()}
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{session.title}</h4>
                                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{session.description}</p>

                                                <div style={{ display: 'flex', gap: '1rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                        <Video size={16} /> No Video
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                        <FileText size={16} /> 0 Materials
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                                            <PenTool size={16} /> Edit Content
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
