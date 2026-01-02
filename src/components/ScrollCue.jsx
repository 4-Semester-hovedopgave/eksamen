"use client";
// Gør komponenten til en client component, så vi kan bruge state og browser-events

import { useEffect, useState } from "react";

export default function ScrollCue() {
    // State der styrer om scroll-pilen vises eller ej

    const [show, setShow] = useState(true);

    useEffect(() => {
        // Funktion der tjekker hvor langt brugeren har scrollet
        const handleScroll = () => {
            // Hvis vi er helt i toppen (mindre end 10px scroll),
            // vises pilen – ellers skjules den
            setShow(window.scrollY < 10);
        };

        // Lytter efter scroll på vinduet
        window.addEventListener("scroll", handleScroll);

        // Rydder event listener igen når komponenten fjernes
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);     // Tom dependency array betyder, at effekten kun kører én gang

    // Hvis show er false, returneres null (ingen rendering)
    if (!show) return null;

    return (
        <button
            aria-label="Scroll down"
            onClick={() =>
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                })
            }
            className="
               hidden md:block
                fixed bottom-8 left-1/2 -translate-x-1/2
                text-5xl
                text-black-800
                animate-bounce
                opacity-90
                transition
                hover:opacity-100 hover:scale-110
                focus:outline-none
      "
        >
            ↓
        </button>
    );
}
