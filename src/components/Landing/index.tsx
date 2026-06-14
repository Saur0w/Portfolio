"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ImageData = {
    src: string;
};

const images: ImageData[] = [
    { src: "/images/arch.jpg" },
    { src: "/images/mountain.jpg" },
    { src: "/images/sand.jpg" },
    { src: "/images/water.jpg" },
];

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
    const designRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        gsap.to(scrollRef.current, {
            opacity: 0,
            y: -20, 
            scrollTrigger: {
                trigger: landingRef.current,
                start: "top top",
                end: "+=300", 
                scrub: true,
            }
        });

        gsap.to(headingRef.current, {
            yPercent: -30, 
            scrollTrigger: {
                trigger: landingRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        imagesRef.current.forEach((image, index) => {
            if (!image) return;
            
            const speedMultiplier = 15 + (index * 10); 

            gsap.to(image, {
                yPercent: -speedMultiplier,
                scrollTrigger: {
                    trigger: landingRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1, 
                }
            });
        });
        gsap.to(designRef.current, {
            yPercent: -80, 
            scrollTrigger: {
                trigger: landingRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.left}>
                <div className={styles.heading} ref={headingRef}>
                    <h4>INTRODUCTION</h4>
                    <h1>Saurow</h1>
                    <p>I design and develop immersive web experiences that feel intuitive, memorable, and alive.</p>
                </div>
                <div className={styles.scroll} ref={scrollRef}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2"/>
                        <path d="M29.2929 41.7071C29.6834 42.0976 30.3166 42.0976 30.7071 41.7071L37.0711 35.3431C37.4616 34.9526 37.4616 34.3195 37.0711 33.9289C36.6805 33.5384 36.0474 33.5384 35.6569 33.9289L30 39.5858L24.3431 33.9289C23.9526 33.5384 23.3195 33.5384 22.9289 33.9289C22.5384 34.3195 22.5384 34.9526 22.9289 35.3431L29.2929 41.7071ZM30 18L29 18L29 41L30 41L31 41L31 18L30 18Z" fill="white"/>
                    </svg>
                </div>
            </div>
            
            <div className={styles.right}>
                <div className={styles.images}>
                   {images.map((image, i) => (
                        <div 
                            ref={(el) => { imagesRef.current[i] = el; }} 
                            key={`img_${i}`} 
                            className={styles.imageContainer}
                        >
                            <Image 
                                src={image.src}
                                alt={`Portfolio abstract scene ${i + 1}`}
                                fill 
                                priority={i === 0}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.text} ref={designRef}>
                    <h4>Design with Purpose</h4>
                    <svg width="66" height="2" viewBox="0 0 66 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.0076914" y1="0.499937" x2="65.0077" y2="1.49994" stroke="white"/>
                    </svg>
                </div>
            </div>
        </section>
    );
}