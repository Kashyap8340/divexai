'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function TestTaker() {
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        {
            id: 1,
            text: "Which sentence uses the present perfect tense correctly?",
            options: [
                "I have went to the store.",
                "I have gone to the store.",
                "I has gone to the store.",
                "I go to the store."
            ],
            correct: 1
        },
        {
            id: 2,
            text: "Select the synonym for 'Eloquent'.",
            options: [
                "Silent",
                "Articulate",
                "Confusing",
                "Shy"
            ],
            correct: 1
        }
    ];

    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>

            {!submitted ? (
                <>
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Week 3 Grammar Assessment</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Attempt all questions. 20 minutes remaining.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {questions.map((q, i) => (
                            <div key={q.id} className="card">
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>{i + 1}. {q.text}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {q.options.map((opt, oIndex) => (
                                        <label key={oIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
                                            <input type="radio" name={`q${q.id}`} />
                                            <span>{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <button onClick={() => setSubmitted(true)} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Submit Assessment</button>
                    </div>
                </>
            ) : (
                <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <div style={{ width: '80px', height: '80px', background: 'rgba(16,185,129,0.2)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                        <CheckCircle size={40} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Assessment Submitted!</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Your answers have been recorded. Your mentor will review them shortly.</p>
                    <Link href="/dashboard/student">
                        <button className="btn btn-primary">Return to Dashboard</button>
                    </Link>
                </div>
            )}

        </div>
    );
}
