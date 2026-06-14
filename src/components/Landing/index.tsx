"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className={styles.left}>

            </div>
            <div className={styles.right}>
                
            </div>
        </section>
    );
}

