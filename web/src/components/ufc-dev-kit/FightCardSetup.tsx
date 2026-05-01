"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, Crown, ImagePlus, X, Clock, Timer } from "lucide-react";
import { UFCDevKitState, FightMatch } from "@/lib/ufc-dev-kit/types";

interface Props {
  state: UFCDevKitState;
  onStateChange: (updates: Partial<UFCDevKitState>) => void;
}

function addMinutesToTime(time: string, minutes: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  const newH = Math.floor(total / 60) % 24;
  const newM = total % 60;
  return `${String(newH).padStart(2, "0")}:${String(newM).padStart(2, "0")}`;
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const displayH = h % 12 || 12;
  return `${displayH}:${String(m).padStart(2, "0")} ${ampm}`;
}

export function FightCardSetup({ state, onStateChange }: Props) {
  const [expandedCard, setExpandedCard] = useState<string | null>(state.fightCards[0]?.id ?? null);
  const [newFighter1, setNewFighter1] = useState("");
  const [newFighter2, setNewFighter2] = useState("");
  const [newCardType, setNewCardType] = useState<"main" | "prelim">("main");
  const [newIsTitleFight, setNewIsTitleFight] = useState(false);
  const [newTitleImageUrl, setNewTitleImageUrl] = useState<string | null>(null);
  const [addingToCard, setAddingToCard] = useState<string | null>(null);

  const updateCard = (cardId: string, updates: Partial<typeof state.fightCards[0]>) => {
    onStateChange({
      fightCards: state.fightCards.map((c) => (c.id === cardId ? { ...c, ...updates } : c)),
    });
  };

  const updateFight = (cardId: string, fightId: string, updates: Partial<FightMatch>) => {
    onStateChange({
      fightCards: state.fightCards.map((c) =>
        c.id === cardId
          ? { ...c, fights: c.fights.map((f) => (f.id === fightId ? { ...f, ...updates } : f)) }
          : c
      ),
    });
  };

  const removeFight = (cardId: string, fightId: string) => {
    onStateChange({
      fightCards: state.fightCards.map((c) =>
        c.id === cardId ? { ...c, fights: c.fights.filter((f) => f.id !== fightId) } : c
      ),
    });
  };

  const handleDelay = (cardId: string) => {
    const card = state.fightCards.find((c) => c.id === cardId);
    if (!card) return;
    const newDelay = (card.delayMinutes || 0) + 2;
    const updatedFights = card.fights.map((f) => ({
      ...f,
      scheduledTime: addMinutesToTime(f.scheduledTime, 2),
    }));
    onStateChange({
      fightCards: state.fightCards.map((c) =>
        c.id === cardId ? { ...c, delayMinutes: newDelay, fights: updatedFights } : c
      ),
    });
  };

  const addFight = (cardId: string) => {
    if (!newFighter1.trim() || !newFighter2.trim()) return;
    const card = state.fightCards.find((c) => c.id === cardId);
    if (!card) return;

    const prelims = card.fights.filter((f) => f.cardType === "prelim");
    const mains = card.fights.filter((f) => f.cardType === "main");

    let scheduledTime: string;
    if (newCardType === "prelim") {
      const lastPrelim = prelims[prelims.length - 1];
      scheduledTime = lastPrelim
        ? addMinutesToTime(lastPrelim.scheduledTime, 5)
        : addMinutesToTime(card.fights.filter((f) => f.cardType === "main")[0]?.scheduledTime || "22:00", -(mains.length * 5 + 5));
    } else {
      const lastMain = mains[mains.length - 1];
      const lastPrelim = prelims[prelims.length - 1];
      if (lastMain) {
        scheduledTime = addMinutesToTime(lastMain.scheduledTime, 5);
      } else if (lastPrelim) {
        scheduledTime = addMinutesToTime(lastPrelim.scheduledTime, 5);
      } else {
        scheduledTime = "22:00";
      }
    }

    const newFight: FightMatch = {
      id: `fight-${Date.now()}`,
      fighter1: { id: `f-${Date.now()}-1`, name: newFighter1.trim() },
      fighter2: { id: `f-${Date.now()}-2`, name: newFighter2.trim() },
      winnerId: null,
      method: null,
      round: null,
      cardType: newCardType,
      isTitleFight: newCardType === "main" ? newIsTitleFight : false,
      titleImageUrl: newCardType === "main" && newIsTitleFight ? newTitleImageUrl : null,
      scheduledTime,
    };
    onStateChange({
      fightCards: state.fightCards.map((c) =>
        c.id === cardId ? { ...c, fights: [...c.fights, newFight] } : c
      ),
    });
    setNewFighter1("");
    setNewFighter2("");
    setNewIsTitleFight(false);
    setNewTitleImageUrl(null);
    setAddingToCard(null);
  };

  const handleAddImageUpload = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewTitleImageUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleExistingImageUpload = (cardId: string, fightId: string, file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      updateFight(cardId, fightId, { titleImageUrl: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-[#fbbf24]">Fight Card Setup</h3>

      {state.fightCards.map((card) => {
        const isExpanded = expandedCard === card.id;
        const prelimFights = card.fights.filter((f) => f.cardType === "prelim").sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));
        const mainFights = card.fights.filter((f) => f.cardType === "main").sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime));

        return (
          <div key={card.id} className="border border-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedCard(isExpanded ? null : card.id)}
              className="w-full flex items-center justify-between px-3 py-2 bg-[#fbbf24]/10 hover:bg-[#fbbf24]/20 transition-colors"
            >
              <span className="text-xs font-semibold text-[#fbbf24] text-left">{card.name}</span>
              {isExpanded ? <ChevronUp size={14} className="text-[#fbbf24]" /> : <ChevronDown size={14} className="text-[#fbbf24]" />}
            </button>

            {isExpanded && (
              <div className="p-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-white/40">Event Title</label>
                  <input
                    type="text"
                    value={card.name}
                    onChange={(e) => updateCard(card.id, { name: e.target.value })}
                    className="bg-[#0e0e10] border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-[#fbbf24]/50 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-white/40">Date</label>
                    <input
                      type="date"
                      value={card.date.split("T")[0]}
                      onChange={(e) => updateCard(card.id, { date: e.target.value + "T22:00:00Z" })}
                      className="bg-[#0e0e10] border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-[#fbbf24]/50 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-white/40">Start Time</label>
                    <input
                      type="time"
                      value="22:00"
                      className="bg-[#0e0e10] border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-[#fbbf24]/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-white/40">Venue</label>
                  <input
                    type="text"
                    value={card.venue}
                    onChange={(e) => updateCard(card.id, { venue: e.target.value })}
                    className="bg-[#0e0e10] border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-[#fbbf24]/50 focus:outline-none"
                  />
                </div>

                {prelimFights.length > 0 && (
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">Prelims</div>
                    {prelimFights.map((fight, idx) => (
                      <div key={fight.id} className="flex flex-col gap-1.5 bg-white/[0.02] border border-white/5 rounded px-2 py-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs">
                            <span className="text-white/20 font-mono w-4">{idx + 1}.</span>
                            <span className="text-white/70">{fight.fighter1.name}</span>
                            <span className="text-white/20">vs</span>
                            <span className="text-white/70">{fight.fighter2.name}</span>
                          </div>
                          <button onClick={() => removeFight(card.id, fight.id)} className="text-white/20 hover:text-red-400 transition-colors">
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-white/30">
                          <Clock size={10} />
                          <span>{formatTime(fight.scheduledTime)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {mainFights.length > 0 && (
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[10px] uppercase tracking-widest text-[#fbbf24]/80 font-semibold">Main Card</div>
                    {mainFights.map((fight, idx) => (
                      <div key={fight.id} className="bg-[#fbbf24]/5 border border-[#fbbf24]/10 rounded px-2 py-2 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs">
                            <span className="text-white/30 font-mono w-4">{idx + 1}.</span>
                            {fight.isTitleFight && <Crown size={10} className="text-[#fbbf24]" />}
                            <span className="text-white">{fight.fighter1.name}</span>
                            <span className="text-white/30">vs</span>
                            <span className="text-white">{fight.fighter2.name}</span>
                          </div>
                          <button onClick={() => removeFight(card.id, fight.id)} className="text-white/30 hover:text-red-400 transition-colors">
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-[#fbbf24]/60">
                          <Clock size={10} />
                          <span>{formatTime(fight.scheduledTime)}</span>
                        </div>
                        {fight.isTitleFight && fight.titleImageUrl && (
                          <div className="relative group">
                            <img src={fight.titleImageUrl} alt="Title belt" className="h-8 w-auto rounded object-contain" />
                            <button
                              onClick={() => updateFight(card.id, fight.id, { titleImageUrl: null })}
                              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={8} />
                            </button>
                          </div>
                        )}
                        {fight.isTitleFight && !fight.titleImageUrl && (
                          <label className="flex items-center gap-1 text-[10px] text-white/40 hover:text-[#fbbf24] cursor-pointer border border-dashed border-white/10 hover:border-[#fbbf24]/30 rounded px-1.5 py-1 w-fit transition-colors">
                            <ImagePlus size={10} />
                            Belt image
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleExistingImageUpload(card.id, fight.id, e.target.files?.[0] ?? null)}
                            />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {(card.delayMinutes || 0) > 0 && (
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-[#fbbf24]/10 border border-[#fbbf24]/20 rounded text-xs">
                    <Timer size={12} className="text-[#fbbf24]" />
                    <span className="text-[#fbbf24]">+{card.delayMinutes} min delay applied</span>
                  </div>
                )}

                <button
                  onClick={() => handleDelay(card.id)}
                  className="flex items-center justify-center gap-1.5 text-xs text-white/40 hover:text-[#fbbf24] border border-dashed border-white/10 hover:border-[#fbbf24]/30 rounded py-1.5 transition-colors"
                >
                  <Timer size={12} />
                  Delay +2 min
                </button>

                {addingToCard === card.id ? (
                  <div className="flex flex-col gap-2 border border-white/10 rounded p-2 bg-[#0e0e10]">
                    <div className="text-[10px] uppercase tracking-widest text-[#fbbf24]/80 font-semibold">Add Fight</div>
                    <select
                      value={newCardType}
                      onChange={(e) => { setNewCardType(e.target.value as "main" | "prelim"); if (e.target.value === "prelim") { setNewIsTitleFight(false); setNewTitleImageUrl(null); } }}
                      className="bg-[#1a1505] border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-[#fbbf24]/50 focus:outline-none"
                    >
                      <option value="main">Main Card</option>
                      <option value="prelim">Prelim</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Fighter 1"
                      value={newFighter1}
                      onChange={(e) => setNewFighter1(e.target.value)}
                      className="bg-[#0e0e10] border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-[#fbbf24]/50 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Fighter 2"
                      value={newFighter2}
                      onChange={(e) => setNewFighter2(e.target.value)}
                      className="bg-[#0e0e10] border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-[#fbbf24]/50 focus:outline-none"
                    />
                    <div className="flex items-center justify-between text-xs text-white/30 bg-[#1a1505] rounded px-2 py-1.5">
                      <div className="flex items-center gap-1.5">
                        <Clock size={10} />
                        <span>Auto-scheduled 5 min apart</span>
                      </div>
                    </div>
                    {newCardType === "main" && (
                      <label className="flex items-center gap-2 cursor-pointer py-1">
                        <input
                          type="checkbox"
                          checked={newIsTitleFight}
                          onChange={(e) => { setNewIsTitleFight(e.target.checked); if (!e.target.checked) setNewTitleImageUrl(null); }}
                          className="w-3.5 h-3.5 rounded border-white/20 bg-[#0e0e10] text-[#fbbf24] focus:ring-[#fbbf24] focus:ring-offset-0 accent-[#fbbf24]"
                        />
                        <Crown size={12} className={newIsTitleFight ? "text-[#fbbf24]" : "text-white/40"} />
                        <span className={`text-xs ${newIsTitleFight ? "text-[#fbbf24]" : "text-white/50"}`}>Title Fight</span>
                      </label>
                    )}
                    {newCardType === "main" && newIsTitleFight && (
                      <div className="flex flex-col gap-1.5 pl-1">
                        {newTitleImageUrl ? (
                          <div className="relative group">
                            <img src={newTitleImageUrl} alt="Title belt" className="h-10 w-auto rounded object-contain" />
                            <button
                              onClick={() => setNewTitleImageUrl(null)}
                              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={8} />
                            </button>
                          </div>
                        ) : (
                          <label className="flex items-center gap-1.5 text-[10px] text-white/40 hover:text-[#fbbf24] cursor-pointer border border-dashed border-white/10 hover:border-[#fbbf24]/30 rounded px-2 py-1.5 transition-colors">
                            <ImagePlus size={12} />
                            Upload belt image
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleAddImageUpload(e.target.files?.[0] ?? null)}
                            />
                          </label>
                        )}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <button
                        onClick={() => addFight(card.id)}
                        className="flex-1 text-xs font-medium px-2 py-1 rounded bg-[#fbbf24] text-[#0e0e10] hover:bg-[#f59e0b] transition-colors"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => { setAddingToCard(null); setNewFighter1(""); setNewFighter2(""); setNewIsTitleFight(false); setNewTitleImageUrl(null); }}
                        className="flex-1 text-xs font-medium px-2 py-1 rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setAddingToCard(card.id)}
                    className="flex items-center justify-center gap-1 text-xs text-[#fbbf24]/70 hover:text-[#fbbf24] border border-dashed border-[#fbbf24]/20 hover:border-[#fbbf24]/40 rounded py-1.5 transition-colors"
                  >
                    <Plus size={12} />
                    Add Fight
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}