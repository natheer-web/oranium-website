"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const mockLogs = [
  "[SYS] Initializing ORANIUM Security Operations Center...",
  "[INFO] Loading Python vulnerability scanner modules...",
  "[OK] Cisco OSPF routing protocols synchronized.",
  "[WARN] Suspicious ping request detected. Source: 192.168.1.105",
  "[ACTION] Blocking IP via firewall rules...",
  "[SUCCESS] Threat mitigated successfully.",
  "[INFO] Triggering n8n automation workflow: 'Client Alert'.",
  "[OK] Webhook dispatched to Make.com scenario.",
  "[SYS] Vercel Blob storage connected. Fetching latest assets...",
  "[INFO] Network topology mapping complete. 4 nodes active.",
  "[EXEC] Running nmap -sS -O target_network...",
  "[OK] Automation tasks completed in 2.4s.",
  "[SYS] Awaiting next event..."
];

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  // قمنا بتغيير المرجع ليكون للصندوق بالكامل بدلاً من أسفل الصفحة
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < mockLogs.length) {
        setLines((prev) => {
          if (!mockLogs[index]) return prev;
          return [...prev, mockLogs[index]];
        });
        index++;
      } else {
        setLines((prev) => [...prev.slice(1), `[SYS] System heartbeat... OK. ${new Date().toLocaleTimeString()}`]);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // تعديل التمرير: التمرير يحدث داخل صندوق الأوامر فقط وليس في المتصفح
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 font-cairo"
        >
          مركز <span className="text-orange-500">المراقبة والأتمتة</span> الحية
        </motion.h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          محاكاة حية لمسارات العمل المؤتمتة وبروتوكولات الفحص الأمني التي نستخدمها في حماية بنيتنا التحتية.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl overflow-hidden border border-gray-800 bg-[#050505] shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)]"
      >
        <div className="bg-[#111] px-4 py-3 flex items-center border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto text-xs text-gray-500 font-mono tracking-widest">
            root@oranium-soc:~#
          </div>
        </div>

        {/* تم ربط المرجع بهذا الصندوق */}
        <div ref={scrollContainerRef} className="p-6 h-72 overflow-y-auto font-mono text-sm sm:text-base text-green-500 scrollbar-hide smooth-scroll">
          {lines.map((line, i) => {
            if (!line) return null;

            let color = "text-green-500";
            if (line.includes("[WARN]")) color = "text-yellow-400";
            if (line.includes("[ACTION]")) color = "text-orange-500";
            if (line.includes("[SUCCESS]") || line.includes("[OK]")) color = "text-cyan-400";
            if (line.includes("[SYS]")) color = "text-gray-400";

            return (
              <div key={i} className="mb-2 opacity-90 font-medium">
                <span className="text-gray-600 mr-3">{'>_'}</span>
                <span className={color}>{line}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}