'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const pathname = usePathname(); 
    const aboutid = pathname.split('/')[2];
    const reviewid = pathname.split('/')[4];  


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 20;
            const y = (e.clientY / window.innerHeight) * 20;
            setPosition({ x, y });
        };



        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center relative overflow-hidden">
            <div 
                className="text-center p-8 relative z-10"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transition: 'transform 0.2s ease-out'
                }}
            >
                <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-600 mb-6">
                    Oops! Review { reviewid } Not Found for product { aboutid }
                </h2>
                <p className="text-gray-500 mb-8">
                    The page youre looking for seems to have wandered off...
                </p>
                <Link 
                    href="/"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Return Home
                </Link>
            </div>
            <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-9xl font-bold text-gray-800"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: 'rotate(' + Math.random() * 360 + 'deg)',
                        }}
                    >
                        404
                    </div>
                ))}
            </div>
        </div>
    );
}