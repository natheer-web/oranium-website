"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// نقل الروابط خارج الـ Component لتحسين الأداء
const navLinks = [
  { name: "الرئيسية", href: "#" },
  { name: "المؤسس", href: "#ceo-profile" },
  { name: "التقنيات", href: "#tech-stack" },
  { name: "المشاريع", href: "#case-studies" },
  { name: "الطرفيات", href: "#terminal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-orange-500/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <div className="font-mono text-2xl font-black tracking-widest text-white cursor-pointer group">
            ORANIUM<span className="text-orange-500 group-hover:text-amber-400 transition-colors">.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-cairo text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-500 transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* تعديل الزر ليوجه الزائر نحو قسم التذييل (الاتصال) */}
            <a 
              href="#contact"
              className="ml-4 font-mono text-xs tracking-widest bg-orange-500/10 border border-orange-500 text-orange-500 px-5 py-2 rounded-sm hover:bg-orange-500 hover:text-black transition-all shadow-[0_0_10px_rgba(249,115,22,0.2)] hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]"
            >
              [ INITIATE CONTACT ]
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 border border-gray-800 rounded bg-[#050505] text-orange-500 z-50"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-cairo font-bold text-gray-200 hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 w-full flex justify-center border-t border-gray-800 pt-8"
              >
                <a 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-sm tracking-widest bg-orange-500 text-black px-8 py-3 rounded-sm shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                >
                  [ INITIATE CONTACT ]
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}