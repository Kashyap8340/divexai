'use client';

import { useState } from 'react';
import { UploadCloud, File, Video, X } from 'lucide-react';

export default function ContentUploader() {
    const [files, setFiles] = useState<{ name: string, type: 'video' | 'file' }[]>([]);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        // Mock file drop
        setFiles([...files, { name: 'New_Lesson_Material.pdf', type: 'file' }]);
    };

    return (
        <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Upload Class Content</h1>
                <p style={{ color: 'var(--text-muted)' }}>Add videos, PDFs, or other resources for your students.</p>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    style={{ border: '2px dashed var(--border)', borderRadius: 'var(--radius)', padding: '3rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s', background: 'rgba(255,255,255,0.02)' }}
                >
                    <div style={{ padding: '1rem', background: 'rgba(99,102,241,0.1)', borderRadius: '50%', width: 'fit-content', margin: '0 auto 1.5rem auto', color: 'var(--primary)' }}>
                        <UploadCloud size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Click or drag file to this area to upload</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
                </div>
            </div>

            {files.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    {files.map((file, i) => (
                        <div key={i} className="card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {file.type === 'video' ? <Video size={20} color="var(--secondary)" /> : <File size={20} color="var(--primary)" />}
                                <span>{file.name}</span>
                            </div>
                            <button onClick={() => setFiles(files.filter((_, fi) => fi !== i))} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><X size={18} /></button>
                        </div>
                    ))}
                </div>
            )}

            <div style={{ textAlign: 'right' }}>
                <button className="btn btn-primary" disabled={files.length === 0} style={{ opacity: files.length === 0 ? 0.5 : 1 }}>
                    Upload {files.length} Files
                </button>
            </div>

        </div>
    );
}
