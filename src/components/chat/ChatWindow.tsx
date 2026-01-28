'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface Message {
    id: string;
    senderId: string;
    text: string;
    timestamp: string;
}

export default function ChatWindow() {
    const { user } = useAuth();
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', senderId: 'm1', text: 'Hi Alex, how are you finding Week 3 content?', timestamp: new Date(Date.now() - 86400000).toISOString() },
        { id: '2', senderId: 's1', text: 'It is a bit challenging, especially the advanced grammar part.', timestamp: new Date(Date.now() - 82000000).toISOString() },
        { id: '3', senderId: 'm1', text: 'No worries! We can go over it in our next session. Did you check the supplementary materials?', timestamp: new Date(Date.now() - 80000000).toISOString() },
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim() || !user) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            senderId: user.id, // 's1' or 'm1' depending on login
            text: inputText,
            timestamp: new Date().toISOString(),
        };

        setMessages([...messages, newMessage]);
        setInputText('');

        // Mock reply if needed
        if (user.role === 'student') {
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: (Date.now() + 1).toString(),
                    senderId: 'm1',
                    text: 'Thanks for the update. Keep practicing!',
                    timestamp: new Date().toISOString()
                }]);
            }, 3000);
        }
    };

    return (
        <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column', background: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--background)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--primary)' }}>
                        <UserIcon size={24} />
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', background: 'var(--success)', borderRadius: '50%', border: '2px solid var(--surface)' }}></div>
                </div>
                <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{user?.role === 'student' ? 'Sarah Drasner (Mentor)' : 'Alex Johnson (Student)'}</h2>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Online now</div>
                </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {messages.map((msg) => {
                    const isMe = msg.senderId === user?.id; // Determine if message is from logged-in user
                    // For demo: if I am student(s1), messages from s1 are mine.
                    // Realistically, user.id should match senderId.
                    // Note: In data.ts, Student is 's1', Mentor is 'm1'.

                    return (
                        <div key={msg.id} style={{ alignSelf: isMe ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                            <div style={{
                                padding: '1rem',
                                borderRadius: '16px',
                                borderBottomRightRadius: isMe ? '4px' : '16px',
                                borderBottomLeftRadius: isMe ? '16px' : '4px',
                                background: isMe ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                color: isMe ? 'white' : 'var(--text)',
                                lineHeight: '1.5'
                            }}>
                                {msg.text}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', textAlign: isMe ? 'right' : 'left' }}>
                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your message..."
                        className="input"
                        style={{ marginBottom: '0', flex: 1 }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ padding: '0 1.5rem' }}>
                        <Send size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
}
