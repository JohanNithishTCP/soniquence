"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 brand-gradient py-4 h-[80px] flex items-center transition-all duration-300 transform ${isScrolled ? 'translate-y-0 opacity-100 shadow-lg' : '-translate-y-full opacity-0'}`}>
            <div
                className="site-container flex items-center justify-between w-full"
            >
                {/* Logo */}
                <div className="shrink-0 flex items-center gap-2 text-white font-bold text-2xl tracking-tighter">
                    <img src="/logo.png" alt="Logo" width={150} />
                </div>


                {/* Navigation */}
                <nav className="hidden md:flex text-[16px] space-x-10">
                    <Link href="/" className="text-white font-bold tracking-wide">Home</Link>
                    <Link href="/technology" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">Technology</Link>
                    <Link href="/media" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">Media</Link>
                    <Link href="/resources" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">Resources</Link>
                    <Link href="/about" className="text-white/90 hover:text-white transition-colors font-medium tracking-wide">About Us</Link>
                </nav>

                {/* Contact Button */}
                <div>
                    <button className="px-8 py-2.5 rounded-lg bg-[#B000F5] border border-white text-white font-bold transition-colors text-sm tracking-wide shadow-sm hover:bg-[#E54DFF]">
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    );
}
