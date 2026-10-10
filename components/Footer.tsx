"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentYear, setCurrentYear] = useState("2026"); // قيمة افتراضية لتجنب أخطاء البناء

  useEffect(() => {
    // تحديث السنة تلقائياً فقط بعد تحميل الصفحة في المتصفح
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative z-20 bg-[#020202] pt-16 pb-8 overflow-hidden">
      
      {/* حركة شريط نقل البيانات (الليزر العلوي) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-900">
        <motion.div
          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </div>

      {/* توهج سفلي خافت */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          {/* الشعار والوصف */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h2 
              className="text-3xl font-black font-mono tracking-widest text-gray-200 mb-2 cursor-default transition-colors duration-300 hover:text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              ORANIUM
              <motion.span 
                animate={{ color: isHovered ? "#f97316" : "#ea580c" }} 
                className="text-orange-500"
              >
                .
              </motion.span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs font-cairo leading-relaxed">
              نبتكر حلولاً برمجية، ونصمم بنيات تحتية آمنة تعتمد على أحدث تقنيات الأمن السيبراني والشبكات.
            </p>
          </motion.div>

          {/* روابط التواصل */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end gap-3 font-mono text-sm"
          >
            <span className="text-gray-500 mb-1 tracking-widest">[ SECURE CHANNELS ]</span>
            
            <a href="mailto:contact@oranium.tech" className="group relative text-gray-300 hover:text-orange-400 transition-colors duration-300 pb-1">
              contact@oranium.tech
              <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-orange-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
            
            <div className="flex gap-6 mt-2">
              <a 
                href="https://www.linkedin.com/in/natheer-aqeel-79731a349" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative text-gray-500 hover:text-gray-200 transition-colors duration-300 group pb-1"
              >
                LinkedIn
                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-gray-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>

              <a 
                href="https://github.com/NatheerAlAbbadi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative text-gray-500 hover:text-gray-200 transition-colors duration-300 group pb-1"
              >
                GitHub
                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-gray-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* حقوق النشر وحالة النظام */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600"
        >
          <p>© {currentYear} ORANIUM. All rights reserved.</p>
          
          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-gray-800/80 px-4 py-2 rounded-md hover:border-gray-700 transition-colors cursor-default">
            <span className="tracking-wider">SYS_STATUS:</span>
            <div className="flex items-center gap-2 text-green-500 font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              ONLINE
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}