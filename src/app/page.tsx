'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Sparkles, BookOpen, GraduationCap, ArrowRight, X, MessageCircle, CheckCircle, Star } from 'lucide-react';
import MentorCarousel from '@/components/MentorCarousel';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const { login } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Login Logic moved to Modal
  const [role, setRole] = useState<'student' | 'mentor' | null>(null);
  const [email, setEmail] = useState('');

  const handleRoleSelect = (selectedRole: 'student' | 'mentor') => {
    setRole(selectedRole);
    if (selectedRole === 'student') setEmail('alex@student.com');
    if (selectedRole === 'mentor') setEmail('sarah@mentor.com');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  const LoginModal = () => (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }}>
      <div className="card animate-fade-in" style={{ maxWidth: '500px', width: '90%', position: 'relative', background: '#1e293b', border: '1px solid var(--border)' }}>
        <button onClick={() => { setShowLoginModal(false); setRole(null); }} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><X size={24} /></button>

        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>Welcome to Divexa</h2>

        {!role ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
              onClick={() => handleRoleSelect('student')}
              style={{ padding: '2rem', background: 'rgba(99,102,241,0.1)', border: '1px solid var(--primary)', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', color: 'white', transition: 'transform 0.2s' }}
            >
              <GraduationCap size={40} style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
              <div style={{ fontWeight: 600 }}>Student Login</div>
            </button>
            <button
              onClick={() => handleRoleSelect('mentor')}
              style={{ padding: '2rem', background: 'rgba(20,184,166,0.1)', border: '1px solid var(--secondary)', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', color: 'white', transition: 'transform 0.2s' }}
            >
              <BookOpen size={40} style={{ marginBottom: '1rem', color: 'var(--secondary)' }} />
              <div style={{ fontWeight: 600 }}>Mentor Login</div>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '1rem' }}>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Login <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => setRole(null)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', width: '100%', marginTop: '1rem', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Go back
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return (
    <main style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <ParticlesBackground />
      {showLoginModal && <LoginModal />}

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Navbar */}
        <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 10, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px' }}></div>
            Divexa
          </div>
          <button onClick={() => setShowLoginModal(true)} className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Login</button>
        </nav>

        {/* Hero Section */}
        <section className="container" style={{ padding: '6rem 1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-fade-in">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Divexa — Learn English With Mentors, Not Guesswork
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Divexa is a mentor-driven English learning platform offering a structured 12-week program with 2 classes per week, designed to improve your English through guided practice, feedback, and performance tracking.
            </p>
            <button onClick={() => setShowLoginModal(true)} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              ➡️ Login
            </button>
          </div>

          {/* Hero Visual Mockup */}
          <div className="animate-fade-in" style={{ position: 'relative', perspective: '1000px', animationDelay: '0.2s' }}>
            <div style={{ background: '#1e293b', borderRadius: '20px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', transform: 'rotateY(-5deg) rotateX(5deg)' }}>
              {/* Fake UI Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                <div style={{ width: '100px', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                </div>
              </div>
              {/* Fake Content: Video + Chat */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ width: '100%', height: '150px', background: 'linear-gradient(to bottom right, #3730a3, #312e81)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>▶</div>
                  </div>
                  <div style={{ width: '150px', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                  <div style={{ width: '100px', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.5rem' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>MENTOR CHAT</div>
                  <div style={{ marginBottom: '0.5rem', fontSize: '0.7rem', background: 'rgba(99,102,241,0.2)', padding: '0.4rem', borderRadius: '4px', color: '#e0e7ff' }}>Good job on the quiz!</div>
                  <div style={{ marginBottom: '0.5rem', fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem', borderRadius: '4px', textAlign: 'right' }}>Thanks!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Divexa Section */}
        <section style={{ padding: '6rem 1rem', background: 'rgba(0,0,0,0.2)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem' }}>WHAT IS DIVEXA?</h2>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Built for Systematic Growth</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Divexa is an English learning platform built to help students and professionals improve their English in a systematic and guided way.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Every learner follows a 12-week structured roadmap, ensuring consistent growth in grammar, fluency, vocabulary, and confidence.
                </p>
              </div>
              <div className="card" style={{ border: 'none', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Unlike traditional courses, Divexa focuses on:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Regular mentor-led classes',
                    'Class-wise content and attendance',
                    'Continuous performance evaluation',
                    'Personalized feedback for improvement'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                      <CheckCircle size={20} color="var(--success)" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section style={{ padding: '6rem 1rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <h2 style={{ color: 'var(--secondary)', fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem' }}>MENTORS & GUIDED LEARNING</h2>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Learn With Experienced Mentors</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>At Divexa, mentors play a central role in your learning journey. With Divexa, learners are never left alone — mentors guide every step of improvement.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
              {[
                { icon: BookOpen, title: 'Live English Classes', desc: 'Interactive sessions conducted by experts.' },
                { icon: ArrowRight, title: 'Content & Resources', desc: 'Access class content uploaded after each session.' },
                { icon: CheckCircle, title: 'Track Progress', desc: 'Attendance, participation, and test results tracked.' },
                { icon: MessageCircle, title: 'Personalized Feedback', desc: 'Suggestions tailored to your weak areas.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(20,184,166,0.1)', borderRadius: '50%', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <item.icon size={30} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Meet Our Expert Mentors</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>A team of dedicated professionals to guide you through every aspect of English communication.</p>
            </div>

            <MentorCarousel />
          </div>
        </section>

        {/* Chat Feature Section */}
        <section style={{ padding: '6rem 1rem', background: 'linear-gradient(to right, rgba(30,27,75,0.8), rgba(0,0,0,0))' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Visual for Chat */}
            <div className="card" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '50%' }}></div>
                <div>
                  <div style={{ fontWeight: 600 }}>Mentor Sarah</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--success)' }}>Online</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                  Hello! Any doubts from today's class?
                </div>
                <div style={{ alignSelf: 'flex-end', background: 'var(--primary)', padding: '0.75rem', borderRadius: '12px' }}>
                  Yes, I was confused about the second rule.
                </div>
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                  No problem! Let's review it together...
                </div>
              </div>
            </div>

            <div>
              <h2 style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem' }}>IN-APP CHAT FEATURE</h2>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Chat Directly With Your Mentor</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Divexa includes an in-built chat system that allows students and mentors to connect directly within the platform. This ensures learning continues even after the class ends.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'One-to-one student-mentor communication',
                  'Doubt clearing and practice support',
                  'Feedback discussions',
                  'Continuous guidance beyond classes'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                    <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section style={{ padding: '6rem 1rem' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ color: 'var(--secondary)', fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem' }}>STUDENT REVIEWS</h2>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 700 }}>What Students Say About Divexa</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { text: "The mentor feedback after every class helped me understand my mistakes clearly. My confidence has improved a lot." },
                { text: "Divexa is different from other English apps because mentors actually guide you personally and track your progress." },
                { text: "The chat feature made it easy to ask doubts anytime. I finally feel supported while learning English." }
              ].map((review, i) => (
                <div key={i} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', color: '#fbbf24', marginBottom: '1.5rem' }}>
                    <Star fill="#fbbf24" size={20} />
                    <Star fill="#fbbf24" size={20} />
                    <Star fill="#fbbf24" size={20} />
                    <Star fill="#fbbf24" size={20} />
                    <Star fill="#fbbf24" size={20} />
                  </div>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-muted)', flex: 1 }}>"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '3rem 1rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)' }}>
          <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Divexa</h4>
          <p>© 2024 Divexa Inc. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
