import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}
