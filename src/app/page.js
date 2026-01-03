import Image from "next/image";
import Link from "next/link";
import ScrollCue from "@/components/ScrollCue";
import SalesGoalBar from "@/components/SalesGoalBar";

export const metadata = {
  title: "Home | SnowSwap",
};

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-4 pb-4 md:py-24 grid gap-12 md:grid-cols-5 items-center">
        {/* TEKST */}
        <div className="md:col-span-2">
          <span className="inline-block mb-4 rounded-full bg-orange-500/10 px-4 py-1 text-sm text-orange-400">Community-driven resale</span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Buy & Sell
            <span className="block text-[#FF9933]">Pre-loved Ski Gear</span>
          </h1>

          <p className="mt-6 text-slate-900 w-full max-w-md">A marketplace built for winter lovers. Quality-checked gear, fair prices and a community-first mindset.</p>

          <div className="mt-8 flex gap-4">
            <Link href="https://www.anarikkelarsen.dk/" className="rounded-full bg-[#FF9933] px-6 py-3 text-sm font-semibold text-black hover:bg-orange-200 transition">
              Explore gear
            </Link>

            <Link href="trade-in" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-500 transition">
              How it works
            </Link>
          </div>
        </div>

        {/* BILLEDE */}
        <div className="relative md:col-span-3 w-full overflow-hidden rounded-3xl h-88 md:h-112">
          <Image src="/glade.webp" alt="Glade ski folk" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      </section>

      <section>
        {/* SCROLL CUE */}
        <ScrollCue />
      </section>

      {/* INFOGRAFIK */}
      <SalesGoalBar />

      {/* VIDEO */}
      <section className="mx-auto max-w-6xl px-6 pt-4 pb-4 md:py-24">
        <div className="relative w-full overflow-hidden rounded-3xl bg-gray-100 aspect-video">
          <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/ieUvrIZVIfU?rel=0&modestbranding=1" title="YouTube video" />
        </div>
      </section>
    </main>
  );
}
