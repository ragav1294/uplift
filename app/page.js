import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/hero/hero";

export default function Home() {
  return (
      <>
        <Navbar/>
        <HeroSection/>
      </>
    );
}
