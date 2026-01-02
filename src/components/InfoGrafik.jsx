"use client";
import { useState } from "react";

export default function InfoGrafik() {
    // Kategori brugeren vælger
    const [category, setCategory] = useState("jacket");

    // Antal køb i den kategori pr. år
    const [qty, setQty] = useState(2);

    // Simple estimater pr. kategori (du kan justere tallene)
    const IMPACT = {
        gloves: { label: "Gloves", co2: 2, water: 200, waste: 0.2 },
        boots: { label: "Ski boots", co2: 20, water: 2000, waste: 2.0 },
        jacket: { label: "Ski jacket", co2: 25, water: 3000, waste: 2.5 },
    };

    // Hent værdier ud fra valgt kategori
    const selected = IMPACT[category];

    // Beregn totals
    const co2Kg = Math.round(qty * selected.co2);
    const water = Math.round(qty * selected.water);
    const waste = Math.round(qty * selected.waste);

    // Donut giver mere mening, hvis den viser et “mål”
    const CO2_GOAL_KG = 200; // fx et årligt mål / benchmark
    let percent = Math.round((co2Kg / CO2_GOAL_KG) * 100);
    if (percent > 100) percent = 100;

    // Lille “bæredygtigheds-føl” linje (super simpel)
    const sustainabilityLine =
        percent >= 100
            ? "Nice! You hit the yearly impact goal."
            : "Every second-hand choice reduces new production.";

    return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="w-full overflow-hidden rounded-3xl bg-[#E5EEFF]/70 p-8 ring-1 ring-[#333840]/10 md:p-12">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    {/* VENSTRE SIDE */}
                    <div>
                        <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#333840]/80">
                            <span className="h-2 w-2 rounded-full bg-[#FF9933]" />
                            IMPACT
                        </p>

                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#333840] md:text-4xl">
                            Small choices. Real impact.
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-[#333840]/80 md:text-base">
                            Choose a category and number of items to see an estimated impact.
                        </p>

                        {/* Bæredygtigheds-følelse: en lille “badge” */}
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F8F8F8] px-4 py-2 text-xs font-semibold text-[#333840]/80 ring-1 ring-[#333840]/10">
                            ♻️ {sustainabilityLine}
                        </div>

                        {/* KATEGORI */}
                        <div className="mt-6 rounded-2xl bg-[#F8F8F8] p-4 ring-1 ring-[#333840]/10">
                            <p className="text-xs font-semibold text-[#333840]/70">
                                Category
                            </p>

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="mt-2 w-full rounded-xl border border-[#333840]/20 bg-white px-3 py-2 text-sm text-[#333840]"
                            >
                                <option value="gloves">Gloves</option>
                                <option value="boots">Ski boots</option>
                                <option value="jacket">Ski jacket</option>
                            </select>
                        </div>

                        {/* SLIDER */}
                        <div className="mt-4 rounded-2xl bg-[#F8F8F8] p-4 ring-1 ring-[#333840]/10">
                            <div className="flex items-center justify-between text-sm text-[#333840]/80">
                                <span>{selected.label} (per year)</span>
                                <span className="font-extrabold text-[#333840]">{qty}</span>
                            </div>

                            <input
                                type="range"
                                min={0}
                                max={10}
                                value={qty}
                                onChange={(e) => setQty(Number(e.target.value))}
                                className="mt-3 w-full accent-[#FF9933]"
                            />

                            <p className="mt-2 text-xs text-[#333840]/60">
                                Tip: We use different estimates per category because the impact varies a lot.
                            </p>
                        </div>

                        {/* FAKTA */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-[#F8F8F8] p-4 ring-1 ring-[#333840]/10">
                                <p className="text-xs font-semibold text-[#333840]/70">CO₂ saved / year</p>
                                <p className="mt-1 text-2xl font-extrabold text-[#333840]">{co2Kg} kg</p>
                                <p className="mt-1 text-xs text-[#333840]/60">estimate</p>
                            </div>

                            <div className="rounded-2xl bg-[#F8F8F8] p-4 ring-1 ring-[#333840]/10">
                                <p className="text-xs font-semibold text-[#333840]/70">Items reused</p>
                                <p className="mt-1 text-2xl font-extrabold text-[#333840]">{qty}</p>
                                <p className="mt-1 text-xs text-[#333840]/60">in this category</p>
                            </div>

                            <div className="rounded-2xl bg-[#F8F8F8] p-4 ring-1 ring-[#333840]/10">
                                <p className="text-xs font-semibold text-[#333840]/70">Water saved (est.)</p>
                                <p className="mt-1 text-2xl font-extrabold text-[#333840]">
                                    {water.toLocaleString("da-DK")} L
                                </p>
                                <p className="mt-1 text-xs text-[#333840]/60">estimate</p>
                            </div>

                            <div className="rounded-2xl bg-[#F8F8F8] p-4 ring-1 ring-[#333840]/10">
                                <p className="text-xs font-semibold text-[#333840]/70">Waste avoided (est.)</p>
                                <p className="mt-1 text-2xl font-extrabold text-[#333840]">{waste} kg</p>
                                <p className="mt-1 text-xs text-[#333840]/60">estimate</p>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-[#333840]/70">
                            *Estimates only. Category values are placeholders and can be updated with real sources.
                        </p>
                    </div>

                    {/* HØJRE SIDE (donut) */}
                    <div className="flex items-center justify-center">
                        <div
                            className="grid place-items-center rounded-full"
                            style={{
                                width: 290,
                                height: 290,
                                background: `conic-gradient(from -90deg, #FF9933 ${percent}%, rgba(51,56,64,0.12) 0)`,
                            }}
                        >
                            <div
                                className="grid place-items-center rounded-full bg-[#333840]"
                                style={{ width: 190, height: 190 }}
                            >
                                <div className="text-center">
                                    <p className="text-xs font-semibold text-[#F8F8F8]/70">CO₂ GOAL</p>
                                    <p className="mt-1 text-6xl font-extrabold leading-none text-[#F8F8F8]">
                                        {percent}
                                        <span className="ml-1 text-base font-semibold text-[#F8F8F8]/70">%</span>
                                    </p>
                                    <p className="mt-2 text-sm text-[#F8F8F8]/70">
                                        of {CO2_GOAL_KG} kg / year
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
