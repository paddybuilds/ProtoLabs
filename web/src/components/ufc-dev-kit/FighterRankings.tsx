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

function parseRecord(record: string) {
  const parts = record.split("-");
  return { w: parts[0] || "0", l: parts[1] || "0", d: parts[2] || "0" };
}

export function FighterRankings({ state }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-[#fbbf24]">Fighter Rankings</h3>
      <div className="rounded-lg overflow-hidden border border-white/10">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#1a1505]">
              <th className="px-2 py-2 text-left text-[10px] uppercase tracking-wider text-[#fbbf24]/80 font-semibold w-7">#</th>
              <th className="px-2 py-2 text-left text-[10px] uppercase tracking-wider text-[#fbbf24]/80 font-semibold">Fighter</th>
              <th className="px-2 py-2 text-center text-[10px] uppercase tracking-wider text-[#fbbf24]/80 font-semibold w-10">Wt</th>
              <th className="px-2 py-2 text-center text-[10px] uppercase tracking-wider text-white/40 font-semibold w-5">W</th>
              <th className="px-2 py-2 text-center text-[10px] uppercase tracking-wider text-white/40 font-semibold w-5">D</th>
              <th className="px-2 py-2 text-center text-[10px] uppercase tracking-wider text-white/40 font-semibold w-5">L</th>
            </tr>
          </thead>
          <tbody>
            {state.fighterStandings.slice(0, 5).map((standing, idx) => {
              const { w, d, l } = parseRecord(standing.record);
              return (
                <tr
                  key={standing.fighterId}
                  className={idx % 2 === 0 ? "bg-[#0e0e10]" : "bg-[#1a1a1a]"}
                >
                  <td className="px-2 py-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-5">
                      {standing.position === 1 ? (
                        <Crown size={10} className="text-[#fbbf24]" />
                      ) : standing.position <= 3 ? (
                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${
                          standing.position === 2
                            ? "bg-white/10 text-white/80"
                            : "bg-[#b45309]/20 text-[#d97706]"
                        }`}>
                          {standing.position}
                        </span>
                      ) : (
                        <span className="text-white/40 font-mono text-[10px]">{standing.position}</span>
                      )}
                    </span>
                  </td>
                  <td className="px-2 py-2.5 text-white font-medium">{standing.fighterName}</td>
                  <td className="px-2 py-2.5 text-center text-white/50 font-mono text-xs">{weightClassAcronyms[standing.weightClass] || standing.weightClass}</td>
                  <td className="px-2 py-2.5 text-center text-green-400 font-semibold">{w}</td>
                  <td className="px-2 py-2.5 text-center text-white/40">{d}</td>
                  <td className="px-2 py-2.5 text-center text-red-400">{l}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}