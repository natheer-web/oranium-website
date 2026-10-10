"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface HoloCardProps {
  title: string;
  category: string;
  description: string;
  tech: string[];
}

export default function HoloCard({
  title,
  category,
  description,
  tech,
}: HoloCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [holoPos, setHoloPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // تم تكبير زاوية الميلان قليلاً لتكون واضحة جداً (20 درجة)
    const rX = ((mouseY - height / 2) / (height / 2)) * -20;
    const rY = ((mouseX - width / 2) / (width / 2)) * 20;

    setRotateX(rX);
    setRotateY(rY);

    const hX = (mouseX / width) * 100;
    const hY = (mouseY / height) * 100;
    
    setHoloPos({ x: hX, y: hY });
    setOpacity(0.6); // تمييز اللمعان أكثر
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      // إعدادات فيزيائية ناعمة وسريعة للاستجابة للماوس
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      // أزلنا transition-all و overflow-hidden
      className="relative bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl p-8 border border-gray-800/60 hover:border-orange-500/80 hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.2)] group cursor-crosshair"
    >
      {/* طبقة اللمعان الهولوغرامي */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl mix-blend-screen"
        style={{
          opacity: opacity,
          background: `radial-gradient(circle at ${holoPos.x}% ${holoPos.y}%, rgba(249, 115, 22, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 80%)`,
          transition: "opacity 0.3s ease", // انتقال سلس فقط للشفافية وليس للحركة
        }}
      />

      {/* المحتوى البارز للأمام (TranslateZ) يعطي عمق 3D حقيقي */}
      <div
        style={{ transform: "translateZ(40px)" }}
        className="relative z-10 h-full flex flex-col pointer-events-none"
      >
        <div className="text-orange-500 text-sm font-semibold mb-4 tracking-wider">
          {category}
        </div>
        <h3 className="text-2xl font-bold text-slate-200 mb-4 font-cairo">
          {title}
        </h3>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-gray-900 border border-gray-800/80 text-xs text-gray-300 px-3 py-1.5 rounded-md font-inter"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}