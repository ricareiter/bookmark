import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
    </div>
  );
}
