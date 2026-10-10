"use client";

const skills = [
  "هندسة الشبكات",
  "الأمن السيبراني",
  "تطوير الحلول البرمجية",
  "أتمتة الأنظمة",
];

export default function CeoProfile() {
  return (
    <section className="py-20 md:py-32 relative z-20 bg-transparent overflow-hidden border-y border-gray-900/30">
      
      {/* تأثيرات الإضاءة الجانبية الخلفية (تمنح الشاشة عمقاً دون حجب النقرات) */}
      <div className="absolute top-0 -right-64 w-96 h-96 bg-orange-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-64 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* قسم النصوص والتفاصيل */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <span className="inline-block text-orange-500 font-bold font-cairo text-sm tracking-widest mb-4 uppercase bg-orange-500/10 px-4 py-1 rounded-full border border-orange-500/20">
              [ المؤسس ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-cairo text-gray-100 mb-6 leading-tight">
              نذير عقيل
            </h2>
            
            <p className="text-gray-400 font-cairo text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              مهندس شبكات وأمن سيبراني ومطوّر حلول برمجية متكاملة، يجمع بين عمق الخبرة في البنية التحتية وحماية الأنظمة وبين بناء المنتجات الرقمية من الفكرة حتى الإطلاق. أسّس ORANIUM برؤية واضحة: حلول برمجية موثوقة وآمنة على أساس هندسي متين، تمنح المشاريع القدرة على النمو بثقة في عالم رقمي متسارع.
            </p>

            {/* المهارات */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#050505] border border-gray-800/80 px-4 py-2 rounded-md text-sm font-cairo font-semibold text-gray-400 cursor-default shadow-inner"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* الأزرار الاجتماعية النشطة */}
            <div className="flex justify-center lg:justify-start gap-5 relative z-40">
              
              <a
                href="https://www.linkedin.com/in/natheer-aqeel-79731a349"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0a0a] border border-gray-800 hover:border-orange-500/80 p-4 rounded-xl text-gray-400 hover:text-orange-500 hover:bg-[#111] transition-all duration-300 flex items-center justify-center shadow-lg group"
                title="تواصل معي عبر لينكد إن"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.5.09-.68a1.14 1.14 0 0 1 1-.78c.53 0 .76.4.76 1v5.13h2.8M6.5 8.37a1.37 1.37 0 1 0-1.37-1.37A1.37 1.37 0 0 0 6.5 8.37m1.4 10.13V10.13H5.1v8.37h2.8z" />
                </svg>
              </a>

              <a
                href="https://github.com/NatheerAlAbbadi" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0a0a] border border-gray-800 hover:border-gray-500 p-4 rounded-xl text-gray-400 hover:text-white hover:bg-[#111] transition-all duration-300 flex items-center justify-center shadow-lg group"
                title="تصفح مشاريعي على جيت هاب"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>

            </div>
          </div>

          {/* قسم الصورة الشخصية المربع */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-orange-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700" />
              <div className="relative w-full h-full bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/me.jpg" 
                  alt="نذير عقيل"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-6 right-6 bg-[#020202]/90 backdrop-blur-md border border-gray-700/50 px-5 py-2 rounded-md text-xs font-mono font-bold text-gray-200 pointer-events-none uppercase tracking-widest shadow-2xl">
                  Founder & CEO
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}