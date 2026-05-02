"use client";

import { useEffect, useState } from "react";

export function FighterAnimation() {
  const [isStance, setIsStance] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsStance(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fighterIntro {
          0% { transform: rotateY(0deg); }
          40% { transform: rotateY(90deg); }
          70% { transform: rotateY(70deg); }
          100% { transform: rotateY(70deg) translateY(-5px); }
        }
        @keyframes fighterBounce {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }
        .fighter-wrap.fighter-stance {
          animation: fighterBounce 0.6s infinite alternate ease-in-out !important;
        }
        .fighter-wrap.fighter-stance .fighter-arm-left {
          transform: rotate(-45deg);
        }
        .fighter-wrap.fighter-stance .fighter-arm-right {
          transform: rotate(45deg);
        }
      `}</style>
      <div
        className={`fighter-wrap ${isStance ? "fighter-stance" : ""}`}
        style={{
          width: 100,
          height: 170,
          position: "relative",
          transformStyle: "preserve-3d" as const,
          animation: "fighterIntro 3s ease forwards",
          perspective: 600,
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            background: "linear-gradient(135deg, #d4a017, #b8860b)",
            borderRadius: "50%",
            position: "absolute",
            top: -40,
            left: 25,
            boxShadow: "0 0 15px rgba(251,191,36,0.3)",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, #92400e, #78350f)",
            borderRadius: 16,
            position: "absolute",
            boxShadow: "0 0 25px rgba(251,191,36,0.15)",
          }}
        />
        <div
          className="fighter-arm-left"
          style={{
            width: 16,
            height: 70,
            background: "linear-gradient(180deg, #b8860b, #92400e)",
            position: "absolute",
            top: 35,
            left: -8,
            transformOrigin: "top center",
            borderRadius: 8,
            transition: "transform 0.5s ease",
          }}
        />
        <div
          className="fighter-arm-right"
          style={{
            width: 16,
            height: 70,
            background: "linear-gradient(180deg, #b8860b, #92400e)",
            position: "absolute",
            top: 35,
            right: -8,
            transformOrigin: "top center",
            borderRadius: 8,
            transition: "transform 0.5s ease",
          }}
        />
      </div>
    </>
  );
}