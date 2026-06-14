"use client"; 

import styles from "./page.module.css";
import Landing from "../components/Landing";
import Header from "../components/Header";
import Des from "@/components/Des"
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);
  return (
    <div className={styles.page}>
      <Header />
      <Landing />
      <Des />
    </div>
  );
}
