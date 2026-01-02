"use client";

import Link from "next/link";

import { useState } from "react";

export default function CommunityGoalDonut() {
    const goal = 300;
    const [sold] = useState(127);

    // Procent (0-100)
    let percent = Math.round((sold / goal) * 100);
    if (percent > 100) percent = 100;

    const remaining = goal - sold;

    // Tekst til brugeren (nem at forklare)
    const statusText =
        remaining > 0
            ? `Only ${remaining} items left to reach our yearly goal.`
            : "Goal reached! Thank you for supporting circular gear.";

    return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            {/* Grøn baggrund + stregtegning */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f8f8f8] p-8 md:p-12">

                {/* Indhold ovenpå baggrunden */}
                <div className="relative">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#333840]/80">
                        <span className="h-2 w-2 rounded-full bg-[#8FAE7B]" />
                        SUSTAINABLE MILESTONE
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#333840] md:text-5xl">
                        Help us reach <span className="text-[#8FAE7B]">{goal} reused</span> items in 2026
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#333840]/80 md:text-base">
                        Every second-hand purchase keeps gear in use longer and reduces the need for new production.
                    </p>

                    <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
                        {/* DONUT */}
                        <div className="flex items-center justify-center">
                            <div
                                className="grid place-items-center rounded-full"
                                style={{
                                    width: 300,
                                    height: 300,
                                    background: `conic-gradient(from -90deg, #8FAE7B ${percent}%, rgba(51,56,64,0.12) 0)`,
                                }}
                            >
                                <div
                                    className="grid place-items-center rounded-full bg-[#333840]"
                                    style={{ width: 200, height: 200 }}
                                >
                                    <div className="text-center">
                                        <p className="text-xs font-semibold text-[#F8F8F8]/70">PROGRESS</p>

                                        <p className="mt-2 text-6xl font-extrabold leading-none text-[#F8F8F8]">
                                            {percent}
                                            <span className="ml-1 text-base font-semibold text-[#F8F8F8]/70">%</span>
                                        </p>

                                        <p className="mt-3 text-sm text-[#F8F8F8]/70">
                                            {sold} / {goal} items
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TEKSTBOKS */}
                        <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-[#333840]/10">
                            <p className="text-xs font-semibold text-[#333840]/70">Community impact so far</p>

                            <p className="mt-2 text-3xl font-extrabold text-[#333840]">
                                {sold} items reused
                            </p>

                            <p className="mt-3 text-sm text-[#333840]/80">{statusText}</p>

                            {/* KNAP */}
                            <div className="mt-5">
                                <Link
                                    href="https://www.anarikkelarsen.dk"
                                    className="
                                                inline-flex items-center justify-center
                                                rounded-full
                                                bg-[#9FBF8A]
                                                px-5 py-2.5
                                                text-sm font-semibold text-[#333840]
                                                transition
                                                hover:bg-[#8FAE7B]
                                                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9FBF8A]
                                            "
                                >
                                    Go to shop →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
