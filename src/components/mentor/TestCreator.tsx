'use client';

import { useState } from 'react';
import { PlusCircle, Trash2, Save } from 'lucide-react';

export default function TestCreator() {
    const [questions, setQuestions] = useState([{ id: 1, text: '', options: ['', '', '', ''], correct: 0 }]);

    const addQuestion = () => {
        setQuestions([...questions, { id: questions.length + 1, text: '', options: ['', '', '', ''], correct: 0 }]);
    };

    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Create New Assessment</h1>
                <p style={{ color: 'var(--text-muted)' }}>Design a quiz for your students.</p>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Assessment Title</label>
                    <input type="text" className="input" placeholder="e.g. Week 4 Grammar Quiz" />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
                    <textarea className="input" style={{ minHeight: '100px' }} placeholder="Instructions for the students..."></textarea>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {questions.map((q, qIndex) => (
                    <div key={q.id} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Question {qIndex + 1}</h3>
                            <button style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer' }}><Trash2 size={18} /></button>
                        </div>
                        <input type="text" className="input" placeholder="Enter question text here..." style={{ marginBottom: '1rem' }} />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {q.options.map((opt, oIndex) => (
                                <div key={oIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input type="radio" name={`q${q.id}`} checked={q.correct === oIndex} onChange={() => { }} />
                                    <input type="text" className="input" placeholder={`Option ${oIndex + 1}`} style={{ marginBottom: '0', fontSize: '0.9rem', padding: '0.5rem' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={addQuestion} className="btn btn-outline" style={{ borderStyle: 'dashed' }}>
                    <PlusCircle size={20} /> Add Question
                </button>
                <button className="btn btn-primary">
                    <Save size={20} /> Publish Assessment
                </button>
            </div>

        </div>
    );
}
