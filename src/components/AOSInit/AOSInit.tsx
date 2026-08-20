// components/AOSInit/AOSInit.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
    useEffect(() => {
        // Small delay to ensure DOM is ready
        const initAOS = () => {
            if (typeof window !== 'undefined') {
                AOS.init({
                    duration: 800,
                    once: true,
                    offset: 50,
                    easing: 'ease-in-out',
                    mirror: false,
                });
            }
        };

        // Initialize after a small delay
        const timer = setTimeout(initAOS, 100);

        // Refresh AOS on route changes
        const handleRouteChange = () => {
            if (typeof window !== 'undefined') {
                AOS.refresh();
            }
        };

        window.addEventListener('popstate', handleRouteChange);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return null;
}