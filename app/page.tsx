import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Message from "@/components/Message";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Header />
      <Hero />
      <Ticker />
      <Services />
      <Works />
      <Message />
      <About />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
