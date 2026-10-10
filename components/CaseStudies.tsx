"use client";
import { motion } from "framer-motion";

const cases = [
  {
    title: "أداة فحص ثغرات الويب (Web Security Scanner)",
    context: "مشروع أكاديمي - أمن سيبراني",
    problem: "الحاجة إلى نظام آلي لاكتشاف الثغرات الأمنية في تطبيقات الويب بدلاً من الفحص اليدوي البطيء والمعرض للخطأ.",
    solution: "تمت برمجة وتكوين سكربتات متقدمة بلغة Python لفحص المنافذ وتحليل الثغرات، مما يوفر تقريراً أمنياً دقيقاً لنقاط الضعف.",
    tech: ["Python", "Security Scanning", "Network Protocols"],
  },
  {
    title: "نظام الاتصال الهجين (RF-WiFi Hybrid)",
    context: "مشروع هندسي - إنترنت الأشياء",
    problem: "انقطاع الاتصال وفقدان البيانات في البيئات التي تعاني من مناطق ميتة (Dead Zones) لشبكات الـ WiFi.",
    solution: "تصميم منطق وظيفي وتوصيل دوائر لدمج موجات الراديو (RF) مع الـ WiFi، بحيث يتحول النظام برمجياً للراديو عند ضعف إشارة الشبكة والعكس.",
    tech: ["ESP32", "Arduino", "C++", "RF Modules"],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 relative z-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 border-l-4 border-orange-500 pl-4">
          <h2 className="text-3xl font-bold text-gray-200 font-cairo">
            دراسات <span className="text-orange-500">حالة</span>
          </h2>
          <p className="text-gray-500 mt-2 font-mono text-sm">
            [ ENGINEERING CASE STUDIES ]
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#080808] border border-gray-800/80 p-8 rounded-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.03)] transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-800 pb-4">
                <h3 className="text-2xl font-bold text-gray-200 font-cairo">
                  {item.title}
                </h3>
                <span className="text-orange-500/80 font-mono text-sm mt-2 md:mt-0">
                  {item.context}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-red-400 font-bold mb-2 font-cairo">
                    المشكلة:
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-bold mb-2 font-cairo">
                    الحل الهندسي:
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#111] border border-gray-700 text-gray-400 text-xs px-3 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}