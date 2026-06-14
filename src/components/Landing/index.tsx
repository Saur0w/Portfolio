"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

type ImageData = {
    src: string;
};

const images: ImageData[] = [
    { src: "/images/sand.jpg" },
    { src: "/images/mountain.jpg" },
    { src: "/images/water.jpg" },
    { src: "/images/arch.jpg" }
];

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.left}>
                <div className={styles.heading}>
                    <h4>INTRODUCTION</h4>
                    <h1>Saurow</h1>
                    <p>I design and develop immersive web experiences that feel intuitive, memorable, and alive.</p>
                </div>
            </div>
            <div className={styles.right}>

            </div>
        </section>
    );
}

