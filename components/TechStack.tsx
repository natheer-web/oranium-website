"use client";
import { motion } from "framer-motion";

// تقسيم الأدوات إلى صفين لتنويع الحركة
const row1 = [
  { name: "Python", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "Cisco Packet Tracer", category: "Networking" },
  { name: "Wireshark", category: "Security" },
  { name: "ESP32", category: "Hardware/IoT" },
  { name: "Arduino", category: "Hardware/IoT" },
];

const row2 = [
  { name: "n8n", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "Next.js", category: "Web Dev" },
  { name: "Firebase", category: "Database" },
  { name: "Vercel", category: "Deployment" },
  { name: "Render", category: "Deployment" },
];

export default function TechStack() {
  // مضاعفة المصفوفات لضمان انسيابية حركة الدوران اللانهائية (Infinite Marquee)
  const doubleRow1 = [...row1, ...row1, ...row1];
  const doubleRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-20 relative z-20 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="border-r-4 border-orange-500 pr-4 text-right">
          <h2 className="text-3xl font-bold text-gray-200 font-cairo">
            ترسانة <span className="text-orange-500">التقنيات</span>
          </h2>
          <p className="text-gray-500 mt-2 font-mono text-sm">[ TECHNOLOGICAL STACK & TOOLS ]</p>
        </div>
      </div>

      {/* الحاوية الكلية للصفوف المتحركة */}
      <div className="flex flex-col gap-6 relative">
        
        {/* تدرج ظلي جانبي (Fade Effect) لجعل الفقاعات تختفي وتظهر بنعومة عند الحواف */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* الصف الأول: يتحرك من اليمين إلى اليسار */}
        <div className="flex overflow-hidden relative py-2">
          <motion.div 
            className="flex gap-4 shrink-0"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {doubleRow1.map((tech, idx) => (
              <div 
                key={`r1-${idx}`}
                className="bg-[#0a0a0a]/85 backdrop-blur-md border border-gray-800/80 px-6 py-3 rounded-full flex items-center gap-3 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300 group cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <div>
                  <span className="text-gray-300 font-semibold text-sm font-inter">{tech.name}</span>
                  <span className="text-[10px] text-gray-500 font-mono block leading-none mt-0.5">{tech.category}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* الصف الثاني: يتحرك من اليسار إلى اليمين */}
        <div className="flex overflow-hidden relative py-2">
          <motion.div 
            className="flex gap-4 shrink-0"
            animate={{ x: ["-33.33%", 0] }}
            transition={{
              repeat: Infinity,
              duration: 25, // سرعة مختلفة قليلاً لتوليد حركة تباينية غنية
              ease: "linear",
            }}
          >
            {doubleRow2.map((tech, idx) => (
              <div 
                key={`r2-${idx}`}
                className="bg-[#0a0a0a]/85 backdrop-blur-md border border-gray-800/80 px-6 py-3 rounded-full flex items-center gap-3 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300 group cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <div>
                  <span className="text-gray-300 font-semibold text-sm font-inter">{tech.name}</span>
                  <span className="text-[10px] text-gray-500 font-mono block leading-none mt-0.5">{tech.category}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}