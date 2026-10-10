"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CeoProfile() {
  const skills = ["هندسة الشبكات", "الأمن السيبراني", "تطوير الحلول البرمجية", "أتمتة الأنظمة"];

  return (
    <section className="py-24 relative z-20 bg-black overflow-hidden border-b border-gray-900/40">
      
      {/* تأثيرات الإضاءة الجانبية لجمالية القسم */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-orange-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* النصوص والتفاصيل */}
          <div className="flex-1 text-center lg:text-right">
            <span className="text-orange-500 font-bold font-cairo text-sm tracking-wider block mb-3">[ المؤسس ]</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-cairo text-gray-100 mb-6 leading-tight">
              نذير العبادي
            </h2>
            
            <p className="text-gray-400 font-cairo text-base md:text-lg leading-relaxed mb-8 max-w-2xl lg:ml-0 mx-auto">
              مهندس شبكات وأمن سيبراني ومطوّر حلول برمجية متكاملة، يجمع بين عمق الخبرة في البنية التحتية وحماية الأنظمة وبين بناء المنتجات الرقمية من الفكرة حتى الإطلاق. أسّس ORANIUM برؤية واضحة: حلول برمجية موثوقة وآمنة على أساس هندسي متين، تمنح المشاريع القدرة على النمو بثقة في عالم رقمي متسارع.
            </p>

            {/* المهارات على شكل بطاقات */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#050505] border border-gray-800/80 px-4 py-2 rounded-full text-xs md:text-sm font-cairo font-semibold text-gray-400 hover:border-orange-500/30 hover:text-orange-500 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* الروابط المفعلة والمحدثة */}
            <div className="flex justify-center lg:justify-start gap-4">
              
              {/* رابط LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/natheer-aqeel-79731a349"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#080808] border border-gray-800/80 hover:border-orange-500/50 hover:bg-[#111] p-4 rounded-xl text-gray-400 hover:text-orange-500 transition-all duration-300 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] group"
                title="تواصل معي عبر لينكد إن"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.5.09-.68a1.14 1.14 0 0 1 1-.78c.53 0 .76.4.76 1v5.13h2.8M6.5 8.37a1.37 1.37 0 1 0-1.37-1.37A1.37 1.37 0 0 0 6.5 8.37m1.4 10.13V10.13H5.1v8.37h2.8z" />
                </svg>
              </motion.a>

              {/* رابط GitHub */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/NatheerAlAbbadi" // تأكد من استبدال هذا برابط جيت هاب الفعلي الخاص بك لو كان مختلفاً
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#080808] border border-gray-800/80 hover:border-gray-600 hover:bg-[#111] p-4 rounded-xl text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] group"
                title="تصفح مشاريعي على جيت هاب"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </motion.a>

            </div>
          </div>

          {/* الصورة الشخصية مع إطار متوهج */}
          <div className="w-72 h-72 md:w-85 md:h-85 lg:w-96 lg:h-96 shrink-0 relative z-10 group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 to-blue-600 rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition duration-500" />
            <div className="relative w-full h-full bg-[#080808] border border-gray-800 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="/natheer.jpg" // تأكد من أن اسم الصورة في مجلد public يطابق هذا تماماً
                alt="نذير العبادي"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-gray-850 px-4 py-1.5 rounded text-xs font-mono font-bold text-gray-300 pointer-events-none uppercase tracking-wider shadow-lg">
                Founder & CEO
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}