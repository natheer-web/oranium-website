"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Particles from "./Particles";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>";

export default function Hero() {
  const [text, setText] = useState("");
  const finalWord = "ORANIUM";
  const [isGlitching, setIsGlitching] = useState(false);
  
  // استخدمنا useRef لحفظ حالة المؤقت وتنظيفه بشكل صحيح لمنع التداخل
  const decryptIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const decryptText = () => {
    // إيقاف أي مؤقت سابق قبل بدء واحد جديد
    if (decryptIntervalRef.current) {
      clearInterval(decryptIntervalRef.current);
    }

    let iteration = 0;
    decryptIntervalRef.current = setInterval(() => {
      setText(
        finalWord
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalWord[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= finalWord.length) {
        if (decryptIntervalRef.current) clearInterval(decryptIntervalRef.current);
      }
      iteration += 1 / 3;
    }, 40);
  };

  useEffect(() => {
    decryptText();

    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 250);
    }, 3500);

    return () => {
      clearInterval(glitchInterval);
      if (decryptIntervalRef.current) clearInterval(decryptIntervalRef.current);
    };
  }, []);

  return (
    // أضفنا مساحة سفلية pb-32 لإعطاء مساحة للتلميح والانتقال الناعم
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden z-10 pt-20 pb-32">
      
      <Particles />

      {/* التدرج اللوني الجديد: شفاف من الأعلى، ويدمج مع لون الموقع الأساسي بنعومة في الأسفل دون أن يطمس الشبكة */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#0a0a0a] pointer-events-none z-0" />
      
      {/* خط وهمي ناعم جداً في أسفل القسم لربطه بالقسم التالي */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent z-10" />

      <style>{`
        .cyber-glitch {
          animation: glitch-skew 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          text-shadow: 4px 0px 0px rgba(249,115,22,0.8), -4px 0px 0px rgba(0,255,255,0.8);
        }
        @keyframes glitch-skew {
          0% { transform: skew(0deg); }
          20% { transform: skew(-15deg); }
          40% { transform: skew(15deg); }
          60% { transform: skew(-5deg); }
          80% { transform: skew(5deg); }
          100% { transform: skew(0deg); }
        }
      `}</style>

      <div className="relative group cursor-crosshair z-20" onMouseEnter={decryptText}>
        <motion.h1
          className={`text-6xl md:text-8xl lg:text-9xl font-black font-mono tracking-[0.15em] relative z-10 transition-all duration-100 uppercase bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300 bg-clip-text text-transparent ${
            isGlitching ? "cyber-glitch text-white" : ""
          }`}
          style={{
            filter: "drop-shadow(0 0 25px rgba(249,115,22,0.35))",
          }}
        >
          {text}
          <span className="text-orange-500 animate-pulse">_</span>
        </motion.h1>

        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_15px_#f97316] z-20 pointer-events-none mix-blend-screen"
          animate={{ top: ["-10%", "110%", "-10%"] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
        />
        
        <div className="absolute -inset-4 border border-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500/50"></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-12 text-center relative z-20"
      >
        <p className="text-orange-500/70 text-sm md:text-base font-mono tracking-widest mb-4">
          [ SYSTEM ARCHITECTURE & CYBER DEFENSE ]
        </p>
        <h2 className="text-2xl md:text-4xl text-gray-300 font-cairo font-bold leading-relaxed">
          <span className="block mb-2">نهندس المستقبل الرقمي</span>
          <span className="block bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent font-extrabold">
            بحلول برمجية آمنة وذكية
          </span>
        </h2>
      </motion.div>

      {/* تلميح الماوس التفاعلي الجديد في أسفل الشاشة */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
      >
        <div className="animate-bounce flex flex-col items-center gap-2">
          {/* أيقونة الماوس مرسومة بـ SVG */}
          <svg className="w-6 h-6 text-orange-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="7" strokeWidth="1.5"></rect>
            <path d="M12 6v4" strokeWidth="1.5" strokeLinecap="round"></path>
          </svg>
          <span className="text-orange-500/70 text-xs font-cairo tracking-widest font-semibold">
            حرك الماوس لاستكشاف النظام
          </span>
        </div>
      </motion.div>

    </section>
  );
}