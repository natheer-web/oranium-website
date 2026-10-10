"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LightningEffect from "./LightningEffect";

// تعريف أنواع البيانات لضمان عدم وجود أخطاء برمجية (بدل استخدام any)
interface TargetData {
  os: string;
  cores: number | string;
  resolution: string;
  timezone: string;
  language: string;
  connection: string;
}

export default function OsintScanner() {
  const [scanState, setScanState] = useState<number>(0);
  const [targetData, setTargetData] = useState<TargetData | null>(null);

  useEffect(() => {
    // جمع البصمة الرقمية للزائر (بشكل آمن من المتصفح)
    const getOS = () => {
      const ua = window.navigator.userAgent;
      if (ua.includes("Windows")) return "Windows OS";
      if (ua.includes("Mac")) return "MacOS";
      if (ua.includes("Linux")) return "Linux System";
      if (ua.includes("Android")) return "Android Device";
      if (ua.includes("iPhone") || ua.includes("iPad")) return "Apple iOS";
      return "Unknown Target";
    };

    const gatherData = () => {
      setTargetData({
        os: getOS(),
        cores: navigator.hardwareConcurrency || "Hidden",
        resolution: `${window.screen.width} x ${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        connection: navigator.onLine ? "Active (Connected)" : "Offline",
      });
    };

    gatherData();

    // برمجة تسلسل الحركات لتبدو كعملية اختراق حقيقية
    const t1 = setTimeout(() => setScanState(1), 1500); // إغلاق الهدف
    const t2 = setTimeout(() => setScanState(2), 3500); // استخراج البيانات
    const t3 = setTimeout(() => setScanState(3), 5500); // اكتملت العملية

    // تنظيف المؤقتات لتجنب استهلاك الذاكرة
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto relative overflow-hidden z-10">
      
      {/* تأثير الصاعقة والبرق التفاعلي */}
      <LightningEffect />

      <div className="text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 font-cairo"
        >
          نظام الاستطلاع والبصمة <span className="text-orange-500">الرقمية</span>
        </motion.h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          أولى خطوات الأمن السيبراني هي جمع المعلومات (Reconnaissance). نظامنا يحلل بيئتك الآن.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-lg overflow-hidden border border-orange-500/30 bg-[#0a0a0a] shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]"
      >
        {/* شريط أدوات الشاشة */}
        <div className="bg-[#111] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
          <div className="text-orange-500 text-xs font-mono">ORANIUM OSINT MODULE v1.0</div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-gray-600"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-gray-600"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-orange-500"></div>
          </div>
        </div>

        {/* شاشة العرض */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[280px]">
          {/* الخطوة 0: تهيئة */}
          <div className="text-gray-400 mb-2">
            <span className="text-green-500 mr-2">[+]</span> Initializing OSINT tracker...
          </div>

          {/* الخطوة 1: قفل الهدف */}
          {scanState >= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-yellow-400 mb-4 font-bold">
              <span className="text-orange-500 mr-2">[!]</span> TARGET LOCKED: Extracting digital footprint...
            </motion.div>
          )}

          {/* الخطوة 2: عرض البيانات المستخرجة */}
          {scanState >= 2 && targetData && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="pl-4 border-l-2 border-orange-500/50 space-y-3 mb-6"
            >
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-gray-500 w-32">OS_SYSTEM:</span>
                <span className="text-cyan-400">{targetData.os}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-gray-500 w-32">CPU_CORES:</span>
                <span className="text-cyan-400">{targetData.cores} Logical Processors</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-gray-500 w-32">RESOLUTION:</span>
                <span className="text-cyan-400">{targetData.resolution}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-gray-500 w-32">TIMEZONE:</span>
                <span className="text-cyan-400">{targetData.timezone}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-gray-500 w-32">STATUS:</span>
                <span className="text-green-500">{targetData.connection}</span>
              </div>
            </motion.div>
          )}

          {/* الخطوة 3: اكتمال الفحص */}
          {scanState >= 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500">
              <span className="mr-2">[*]</span> Footprint mapping complete. Connection logged.
              <span className="inline-block w-2 h-4 bg-orange-500 ml-2 animate-pulse"></span>
            </motion.div>
          )}

          {/* مؤشر التحميل (يختفي عند الاكتمال) */}
          {scanState < 3 && (
            <div className="mt-4 text-orange-500 animate-pulse">
              _ <span className="text-xs">Processing...</span>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}