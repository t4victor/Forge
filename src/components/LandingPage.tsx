import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Zap, Cloud, SmartphoneIcon as DeviceMobile, ChevronRight } from 'lucide-react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans">
      <div className="bg-pattern">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <motion.header 
    className="p-4 flex justify-between items-center max-w-6xl mx-auto"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-3xl font-bold font-logo text-blue-600">Forge</h1>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
        <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
        <li><a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>
    </nav>
  </motion.header>
);

const Hero: React.FC = () => (
  <section className="text-center py-20 max-w-4xl mx-auto px-4">
    <motion.h2 
      className="text-5xl font-bold mb-4 font-display text-gray-900 leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Forge Your Digital Fortress<br />with Unbreakable Security
    </motion.h2>
    <motion.p 
      className="text-xl mb-8 text-gray-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Secure, streamline, and simplify your digital life with Forge's advanced password management.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <a 
        href="#" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg inline-flex items-center group"
      >
        Start the forge
        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  </section>
);

const Features: React.FC = () => (
  <section id="features" className="py-20">
    <h2 className="text-4xl font-bold text-center mb-12 font-display text-gray-900">Forge Your Perfect Password Ecosystem</h2>
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
        </div>
        <div className="relative z-10">
          <FeatureItem 
            icon={<Shield size={40} />} 
            title="Unbreakable Vault" 
            description="Your data fortress, built with state-of-the-art encryption that keeps your secrets safer than Fort Knox." 
            alignment="left"
          />
          <FeatureItem 
            icon={<Zap size={40} />} 
            title="Lightning-Fast Autofill" 
            description="Access your passwords at the speed of thought. Never struggle with login forms again." 
            alignment="right"
          />
          <FeatureItem 
            icon={<Lock size={40} />} 
            title="Password Blacksmith" 
            description="Forge indestructible passwords with our advanced generator. Create complex keys that even you can't guess." 
            alignment="left"
          />
          <FeatureItem 
            icon={<Users size={40} />} 
            title="Secure Sharing Circles" 
            description="Share passwords safely within your trusted network. Perfect for families and teams." 
            alignment="right"
          />
          <FeatureItem 
            icon={<Cloud size={40} />} 
            title="Seamless Sync" 
            description="Your passwords, everywhere you need them, always up-to-date. Sync across all your devices effortlessly." 
            alignment="left"
          />
          <FeatureItem 
            icon={<DeviceMobile size={40} />} 
            title="Mobile Fortress" 
            description="Carry your secure vault in your pocket. Our mobile app ensures your passwords are always at your fingertips." 
            alignment="right"
          />
        </div>
      </div>
    </div>
  </section>
);

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string; alignment: 'left' | 'right' }> = ({ icon, title, description, alignment }) => (
  <motion.div 
    className={`flex items-center mb-16 ${alignment === 'right' ? 'flex-row-reverse' : ''}`}
    initial={{ opacity: 0, x: alignment === 'left' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`flex-1 ${alignment === 'right' ? 'text-right' : ''}`}>
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 max-w-md mx-auto">{description}</p>
    </div>
    <div className={`w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-8 ${alignment === 'right' ? 'order-first' : ''}`}>
      <div className="text-blue-600">{icon}</div>
    </div>
  </motion.div>
);

const Pricing: React.FC = () => (
  <section id="pricing" className="py-20 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 font-display text-gray-900">Choose Your Forge Plan</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <PriceCard 
          title="Free" 
          price="$0" 
          period="forever" 
          features={[
            "Unlimited passwords",
            "Sync across 2 devices",
            "Basic password generator",
            "Secure notes",
            "Biometric authentication"
          ]} 
        />
        <PriceCard 
          title="Premium" 
          price="$4.99" 
          period="month" 
          features={[
            "Everything in Free",
            "Unlimited devices",
            "Advanced password generator",
            "1GB secure document storage",
            "Priority 24/7 support",
            "Password health report",
            "Dark web monitoring",
            "Emergency access"
          ]} 
          isPopular 
        />
      </div>
    </div>
  </section>
);

const PriceCard: React.FC<{ title: string; price: string; period: string; features: string[]; isPopular?: boolean }> = ({ title, price, period, features, isPopular }) => (
  <motion.div 
    className={`bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm ${isPopular ? 'border-2 border-blue-500 relative overflow-hidden' : ''}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {isPopular && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg text-sm font-bold transform rotate-45 translate-x-6 translate-y-4">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <div className="text-4xl font-bold mb-2 text-blue-600">{price}</div>
    <div className="text-sm mb-6 text-gray-600">per {period}</div>
    <ul className="mb-8 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <Shield size={16} className="mr-2 text-blue-500 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition-colors shadow-lg flex items-center justify-center group">
      <span>{isPopular ? 'Upgrade to Premium' : 'Start for Free'}</span>
      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 font-display text-gray-900">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <TestimonialCard 
          quote="Forge has transformed how I manage my online security. It's intuitive, powerful, and gives me peace of mind."
          author="Sarah L., Tech Enthusiast"
        />
        <TestimonialCard 
          quote="As a business owner, Forge's team sharing feature has been a game-changer for our company's security practices."
          author="Michael R., CEO"
        />
      </div>
    </div>
  </section>
);

const TestimonialCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-gray-800 font-semibold">- {author}</p>
  </motion.div>
);

const CallToAction: React.FC = () => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Ready to Forge Your Digital Security?</h2>
      <p className="text-xl mb-8">Join thousands of users who trust Forge with their digital lives.</p>
      <a 
        href="#" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors shadow-lg inline-flex items-center group"
      >
        Get Started Now
        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer id="contact" className="bg-gray-100 py-12 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>support@forgepassword.com</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-600">© 2023 Forge. All rights reserved.</div>
    </div>
  </footer>
);

export default LandingPage;

