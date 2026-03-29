'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  FileText, 
  UserPlus, 
  Menu, 
  X,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Timings', href: '#timings' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-playfair text-xl md:text-2xl font-bold text-primary leading-tight">Dr. Umesh Chowdhury</span>
          <span className="text-[10px] md:text-xs font-montserrat tracking-widest text-gold font-semibold">M.B.B.S., M.D.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-text-dark hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-dark border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent text-white text-center py-3 rounded-xl font-bold mt-2"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-warm-white" />
        <div className="absolute inset-0 bg-accent/5 skew-x-12 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-label">ESTABLISHED MEDICAL CARE</span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-6">
            Trusted Medical Care <br />
            <span className="text-accent italic">in the Heart of Kolkata</span>
          </h1>
          <p className="text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
            Expert diagnosis & compassionate treatment since decades. Serving College Street & surrounding areas with a commitment to patient-centered excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+919830006969" 
              className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg text-center"
            >
              <Phone size={18} /> Call Now — 098300 06969
            </a>
            <a 
              href="https://maps.google.com/?q=13A+Madan+Mohan+Burman+Street+Kolkata+700007" 
              target="_blank"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all text-center"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center relative"
        >
          {/* Doctor Image */}
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse" />
            <div className="absolute inset-10 border-2 border-gold/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent z-10" />
                <img src="/doctor-image.png" alt="Dr. Umesh Chowdhury" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const metrics = [
    { icon: <Star className="text-gold" fill="currentColor" />, value: '5.0', label: 'Google Rating' },
    { icon: <UserPlus className="text-accent" />, value: '10k+', label: 'Patients Treated' },
    { icon: <MapPin className="text-primary" />, value: 'Kolkata', label: 'West Bengal' },
    { icon: <Clock className="text-success" />, value: '6 Days', label: 'Open Weekly' },
  ];

  return (
    <div className="bg-white border-b-4 border-gold py-10 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3">{m.icon}</div>
              <span className="text-2xl font-bold text-primary font-playfair">{m.value}</span>
              <span className="text-xs font-montserrat tracking-wider text-text-muted uppercase">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-white rounded-2xl border-2 border-accent/20 p-4 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
            <img src="/doctor-image.png" alt="Dr. Umesh Chowdhury" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-8 left-8 bg-gold text-white px-4 py-2 rounded-lg font-bold shadow-lg transform -rotate-3">
              Est. Practice
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">ABOUT THE DOCTOR</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Dr. Umesh Chowdhury</h2>
          <div className="space-y-4 mb-8">
            {['Expert in General Medicine', 'Over 20 Years of Clinical Experience', 'Dedicated to Community Health', 'Personalized Patient Care'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-text-dark font-medium">
                <CheckCircle2 className="text-accent" size={20} />
                {item}
              </div>
            ))}
          </div>
          <p className="text-text-muted leading-relaxed mb-8">
            Dr. Umesh Chowdhury is a highly respected physician based in Kolkata, known for his compassionate approach and precise diagnostic skills. With decades of experience serving the College Street area, he has built a reputation for excellence in primary healthcare. His practice is founded on the principles of trust, integrity, and a deep commitment to the well-being of every patient who walks through his doors.
          </p>
          <div className="flex flex-wrap gap-3">
            {['MBBS', 'MD', 'Registered Practitioner'].map((badge) => (
              <span key={badge} className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Stethoscope size={32} />, name: 'General Consultation', desc: 'Comprehensive health assessments and expert medical advice.' },
    { icon: <Activity size={32} />, name: 'Diagnosis & Treatment', desc: 'Precise identification and management of acute and chronic conditions.' },
    { icon: <HeartPulse size={32} />, name: 'Preventive Health Check', desc: 'Proactive screenings to maintain your long-term wellness.' },
    { icon: <CheckCircle2 size={32} />, name: 'Chronic Disease Management', desc: 'Specialized care for diabetes, hypertension, and more.' },
    { icon: <FileText size={32} />, name: 'Health Certificates', desc: 'Official medical documentation for employment or travel.' },
    { icon: <UserPlus size={32} />, name: 'Follow-up Care', desc: 'Continuous monitoring to ensure your recovery is on track.' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Comprehensive Care for Every Patient</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-warm-white rounded-2xl border-t-4 border-transparent hover:border-accent hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{s.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimingsAndLocation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday
      const hour = now.getHours();
      const mins = now.getMinutes();
      const time = hour + mins / 60;

      if (day === 0) {
        setIsOpen(false);
      } else {
        // Mon-Sat: 10:00 AM – 2:00 PM (10-14) | 5:00 PM – 8:00 PM (17-20)
        const morningOpen = time >= 10 && time < 14;
        const eveningOpen = time >= 17 && time < 20;
        setIsOpen(morningOpen || eveningOpen);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timings" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Timings */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <span className="section-label">CLINIC HOURS</span>
              <h2 className="text-3xl font-bold text-primary">Weekly Schedule</h2>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${isOpen ? 'bg-success/10 text-success' : 'bg-red-50 text-red-500'}`}>
              <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-success animate-pulse' : 'bg-red-500'}`} />
              {isOpen ? 'Currently Open' : 'Currently Closed'}
            </div>
          </div>

          <div className="space-y-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <div key={day} className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="font-semibold text-text-dark">{day}</span>
                <span className="text-text-muted text-sm text-right">10:00 AM – 2:00 PM | 5:00 PM – 8:00 PM</span>
              </div>
            ))}
            <div className="flex justify-between items-center py-3">
              <span className="font-semibold text-text-dark">Sunday</span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Closed</span>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="bg-primary text-white p-8 md:p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="text-accent" /> Visit the Clinic
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              13A, Madan Mohan Burman Street, M.G. Road, Raja Katra, Koluttola, College Street, Kolkata – 700007
            </p>
            <div className="space-y-4 mb-8">
              <a href="tel:+919830006969" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-lg font-bold">098300 06969</span>
              </a>
            </div>
            <a 
              href="https://maps.google.com/?q=13A+Madan+Mohan+Burman+Street+Kolkata+700007" 
              target="_blank"
              className="w-full bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all"
            >
              Get Directions on Google Maps <ChevronRight size={18} />
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="flex-grow bg-gray-200 rounded-3xl overflow-hidden min-h-[250px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.35!3d22.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzQ4LjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-primary font-bold text-sm flex items-center gap-2">
                 <MapPin size={16} /> College Street, Kolkata
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: 'Amitava Banerjee', text: 'Dr. Chowdhury is extremely patient and explains the diagnosis clearly. One of the most trusted doctors in College Street.', rating: 5 },
    { name: 'Soma Mukherjee', text: 'Very professional and caring. The clinic is clean and the staff is helpful. Highly recommended for general health issues.', rating: 5 },
    { name: 'Rahul Gupta', text: 'I have been visiting Dr. Umesh for years. His treatment is always effective and he never over-prescribes medicines.', rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">WHAT PATIENTS SAY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">5.0 ★ on Google Reviews</h2>
          <div className="flex justify-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-warm-white rounded-2xl relative shadow-sm"
            >
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
              </div>
              <p className="text-text-dark italic mb-6 leading-relaxed">&quot;{r.text}&quot;</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">{r.name}</span>
                <span className="text-[10px] font-montserrat uppercase tracking-widest text-text-muted">Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/maps/search/Dr+Umesh+Chowdhury+Clinic+Kolkata" 
            target="_blank"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors border-b-2 border-primary/20 pb-1"
          >
            Read All Reviews on Google <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to See the Doctor?</h2>
          <p className="text-white/70 text-lg">Call us or visit the clinic — walk-ins welcome during open hours</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <a 
            href="tel:+919830006969" 
            className="bg-white text-primary py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-xl"
          >
            <Phone size={24} /> Call 098300 06969
          </a>
          <a 
            href="https://wa.me/919830006969" 
            target="_blank"
            className="bg-[#25D366] text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-[#25D366]/90 transition-all shadow-xl"
          >
            <MessageCircle size={24} /> WhatsApp Us
          </a>
        </div>

        <form className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-xs font-montserrat uppercase tracking-widest text-white/50">Your Name</label>
              <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Full Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-montserrat uppercase tracking-widest text-white/50">Phone Number</label>
              <input type="tel" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="098300 06969" />
            </div>
          </div>
          <div className="space-y-2 mb-8">
            <label className="text-xs font-montserrat uppercase tracking-widest text-white/50">Message / Preferred Time</label>
            <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us how we can help..." />
          </div>
          <button type="submit" className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-20 pb-10 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex flex-col mb-6">
            <span className="font-playfair text-2xl font-bold text-white">Dr. Umesh Chowdhury</span>
            <span className="text-xs font-montserrat tracking-widest text-gold font-semibold">M.B.B.S., M.D.</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Trusted care in Kolkata since decades. Providing compassionate and expert medical services to the community.
          </p>
        </div>

        <div>
          <h4 className="font-montserrat text-xs uppercase tracking-[0.2em] text-accent font-bold mb-6">QUICK LINKS</h4>
          <ul className="space-y-3 text-sm text-white/70">
            {['Home', 'About', 'Services', 'Timings', 'Reviews', 'Contact'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-montserrat text-xs uppercase tracking-[0.2em] text-accent font-bold mb-6">CONTACT</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold shrink-0 mt-1" />
              <span>13A, Madan Mohan Burman Street, Kolkata – 700007</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+919830006969" className="hover:text-white transition-colors">098300 06969</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-montserrat uppercase tracking-widest text-white/30">
        <span>© 2025 Dr. Umesh Chowdhury&apos;s Clinic · Kolkata, West Bengal</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function ClinicPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <TimingsAndLocation />
      <Reviews />
      <ContactCTA />
      <Footer />
    </main>
  );
}
