"use client";
import { useRef, useEffect } from "react";

export default function LightningEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let h = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const mouse = { x: null as number | null, y: null as number | null };
    let strikeTimer = 0;
    let animationFrameId: number; // متغير لحفظ رقم الأنيميشن لإيقافه لاحقاً

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      w = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      h = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // دالة إنشاء البرق المتعرج
    function drawLightning(
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      color: string,
      thickness: number
    ) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(startX, startY);

      let currentX = startX;
      let currentY = startY;

      const steps = 15; // عدد التعرجات
      for (let i = 1; i <= steps; i++) {
        const progress = i / steps;
        const targetX = startX + (endX - startX) * progress;
        const targetY = startY + (endY - startY) * progress;

        if (i < steps) {
          // تعرج عشوائي
          currentX = targetX + (Math.random() - 0.5) * 35;
          currentY = targetY + (Math.random() - 0.5) * 20;
        } else {
          currentX = endX;
          currentY = endY;
        }

        ctx.lineTo(currentX, currentY);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#f97316"; // توهج برتقالي
      ctx.stroke();
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // 1. صواعق تنجذب للماوس (إذا كان داخل المربع)
      if (mouse.x !== null && mouse.y !== null) {
        if (Math.random() < 0.25) {
          // تكرار الصواعق
          const originX = Math.random() * w; // انطلاق الصاعقة من أي مكان علوي
          drawLightning(originX, 0, mouse.x, mouse.y, "rgba(249, 115, 22, 0.9)", 2.5); // البرق الرئيسي
          drawLightning(originX, 0, mouse.x, mouse.y, "#fff", 1); // الوهج الداخلي الأبيض
        }
      }

      // 2. صواعق طبيعية تسقط في الخلفية عشوائياً
      strikeTimer++;
      if (strikeTimer > Math.random() * 80 + 40) {
        // تظهر كل فترة عشوائية
        const startX = Math.random() * w;
        const targetX = startX + (Math.random() - 0.5) * 150;
        drawLightning(startX, 0, targetX, h * 0.7, "rgba(251, 146, 60, 0.7)", 2);
        strikeTimer = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId); // تنظيف الأنيميشن لمنع استهلاك الذاكرة
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
}