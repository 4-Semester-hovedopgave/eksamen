import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
        {/* TEXT */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-orange-500/10 px-4 py-1 text-sm text-orange-400">Community-driven resale</span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Buy & Sell
            <span className="block text-orange-300">Used Ski Gear</span>
          </h1>

          <p className="mt-6 max-w-xl text-slate-900">A marketplace built for ski instructors and winter lovers. Quality-checked gear, fair prices and a community-first mindset.</p>

          <div className="mt-8 flex gap-4">
            <Link href="https://www.anarikkelarsen.dk/" className="rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-black hover:bg-orange-200 transition">
              Explore gear
            </Link>

            <Link href="trade-in" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-500 transition">
              How it works
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-105 w-full overflow-hidden rounded-3xl">
          <Image src="/forside.png" alt="Ski community" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative w-full overflow-hidden rounded-3xl bg-gray-100 aspect-video">
          <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/ieUvrIZVIfU?rel=0&modestbranding=1" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </section>
    </main>
  );
}
