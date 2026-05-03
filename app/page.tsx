import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Works from "@/components/Works";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Ticker />
      <Services />
      <Works />
      <About />
      <ContactSection />
      <Footer />
    </main>
  );
}
