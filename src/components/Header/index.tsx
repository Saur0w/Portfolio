"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <p className={styles.logo}>@Saurow</p>
            </div>
            <div className={styles.right}>
                <nav className={styles.nav}>
                    <Link href="#">About</Link>
                    <Link href="#">Contact</Link>
                </nav>
            </div>        
        </header>
    )
}
