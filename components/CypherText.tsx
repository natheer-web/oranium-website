"use client";
import { useState, useEffect } from "react";

// الرموز التي ستظهر أثناء تأثير التشويش والاختراق
const chars = "01!@#$%^&*()_+{}:<>?|~-=/[]01";

interface CypherTextProps {
  text: string;
  className?: string;
}

export default function CypherText({ text, className }: CypherTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovering) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " "; // الحفاظ على المسافات
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3; // التحكم بسرعة التشفير
      }, 30);
    } else {
      setDisplayText(text); // العودة للنص الأصلي عند إبعاد الماوس
    }

    return () => clearInterval(interval);
  }, [isHovering, text]);

  return (
    <span
      className={`inline-block cursor-crosshair transition-colors duration-300 ${
        isHovering ? "text-orange-500" : ""
      } ${className || ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}