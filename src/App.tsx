import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Founder from '@/components/Founder';
import Partners from '@/components/Partners';
import Clients from '@/components/Clients';
import WhyVeera from '@/components/WhyVeera';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import QuoteModal from '@/components/QuoteModal';
import { useScrollReveal } from '@/hooks';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <div className="border-x border-navy-900/10">
      <Navbar onQuote={() => setQuoteOpen(true)} />
      <main>
        <Hero onQuote={() => setQuoteOpen(true)} />
        <Stats />
        <About />
        <Solutions />
        <Process />
        <Projects />
        <Founder />
        <Partners />
        <Clients />
        <WhyVeera />
        <Contact />
      </main>
      <Footer />
      </div>
      <FloatingContact onQuote={() => setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}

export default App;
