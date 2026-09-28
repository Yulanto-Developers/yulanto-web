'use client';

import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Protector() {
    useEffect(() => {
        const handleCopy = (e: ClipboardEvent) => {
            e.preventDefault();
            toast.error("Functions are Disable", {
                position: "top-right",
                autoClose: 3000,
            });
        };

        const handleCut = (e: ClipboardEvent) => {
            e.preventDefault();
            toast.error("Functions are Disable", {
                position: "top-right",
                autoClose: 3000,
            });
        };

        const handlePaste = (e: ClipboardEvent) => {
            e.preventDefault();
            toast.error("Functions are Disable", {
                position: "top-right",
                autoClose: 3000,
            });
        };

        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            toast.error("Functions are Disable", {
                position: "top-right",
                autoClose: 3000,
            });
        };

        const keyshift = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && ['I', 'C', 'J', 'U'].includes(e.key.toUpperCase())) {
                e.preventDefault();
                toast.error("Functions are Disable", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
        const keyshiftU = (e: KeyboardEvent) => {
            if (e.ctrlKey && ['U'].includes(e.key.toUpperCase())) {
                e.preventDefault();
                toast.error("Functions are Disable", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }

       
        // document.addEventListener('copy', handleCopy);
        // document.addEventListener('cut', handleCut);
        // document.addEventListener('paste', handlePaste);
        // document.addEventListener('contextmenu', handleContextMenu);
        // document.addEventListener('keydown', keyshift);
        // document.addEventListener('keydown', keyshiftU);

       
        // return () => {
        //     document.removeEventListener('copy', handleCopy);
        //     document.removeEventListener('cut', handleCut);
        //     document.removeEventListener('paste', handlePaste);
        //     document.removeEventListener('contextmenu', handleContextMenu);
        //     document.removeEventListener('keydown', keyshiftU);
        // };
    }, []);

    return null;
}