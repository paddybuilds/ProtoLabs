"use client";

import { Crown } from "lucide-react";
import { UFCDevKitState } from "@/lib/ufc-dev-kit/types";

interface Props {
  state: UFCDevKitState;
}

const weightClassAcronyms: Record<string, string> = {
  "Heavyweight": "HW",
  "Light Heavyweight": "LHW",
  "Middleweight": "MW",
  "Welterweight": "WW",
  "Lightweight": "LW",
  "Featherweight": "FW",
  "Bantamweight": "BW",
  "Flyweight": "FLW",
  "Women's Flyweight": "WFLW",
  "Women's Bantamweight": "WBW",
  "Women's Strawweight": "WSW",
  "Women's Featherweight": "WFW",
};

export function WeightClasses({ state }: Props) {
  const sorted = [...state.weightClasses].sort((a, b) => a.limit - b.limit);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-[#fbbf24]">Weight Classes</h3>
      <div className="flex flex-col gap-1.5">
        {sorted.slice(0, 8).map((wc) => {
          const isChampion = wc.champion !== null;
          return (
            <div
              key={wc.class}
              className={`relative rounded-lg overflow-hidden ${
                isChampion
                  ? "bg-[#fbbf24]/[0.07] border border-[#fbbf24]/20"
                  : "bg-white/[0.02] border border-white/[0.06]"
              }`}
            >
              {isChampion && (
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#fbbf24]/40 to-transparent" />
              )}
              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold font-mono w-8 text-center ${
                    isChampion ? "text-[#fbbf24]" : "text-white/30"
                  }`}>
                    {weightClassAcronyms[wc.class] || wc.class}
                  </span>
                  <div className="flex flex-col">
                    <span className={`text-xs font-medium ${isChampion ? "text-white" : "text-white/60"}`}>
                      {wc.class}
                    </span>
                    <span className="text-[10px] text-white/30 mt-0.5">{wc.limit} lbs</span>
                  </div>
                </div>
                {isChampion ? (
                  <div className="flex items-center gap-1.5">
                    <Crown size={10} className="text-[#fbbf24]" />
                    <span className="text-xs font-semibold text-[#fbbf24]">{wc.champion}</span>
                  </div>
                ) : (
                  <span className="text-[10px] text-white/25 italic">Vacant</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}