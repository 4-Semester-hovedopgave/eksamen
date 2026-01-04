import Image from "next/image";

export const metadata = {
  title: "Trade-In | SnowSwap",
};

export default function TradeIn() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Trade-In</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Trade in your ski gear</h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">Send in pre-loved ski gear and let us handle the rest. We review each item before it’s listed, so the process feels simple and transparent.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#how-it-works" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800">
              How it works
            </a>
            <a href="#faq" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              FAQ
            </a>
          </div>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image src="/trade.webp" alt="Trade-in hero" fill className="object-cover" priority />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {/* STEP 1 */}
          <article>
            <div className="rounded-3xl bg-[#e6eeff] p-10">
              <div className="relative mx-auto aspect-video w-full max-w-[320px]">
                <Image src="/step1.png" alt="Step 1" fill className="object-contain" />
              </div>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">STEP 1</p>
            <h3 className="mt-3 text-2xl font-extrabold">IS YOUR GEAR TRADE-IN READY?</h3>
            <p className="mt-4 text-base text-slate-700">We accept most clothing and gear from all brands that’s completely functional, clean and in good condition.</p>
          </article>

          {/* STEP 2 */}
          <article>
            <div className="rounded-3xl bg-[#e6eeff] p-10">
              <div className="relative mx-auto aspect-video w-full max-w-[320px]">
                <Image src="/step2.png" alt="Step 2" fill className="object-contain" />
              </div>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">STEP 2</p>
            <h3 className="mt-3 text-2xl font-extrabold">GET YOUR ESTIMATED TRADE-IN CREDIT.</h3>
            <p className="mt-4 text-base text-slate-700">Before you get the shipping label we will review the information you send about your item.</p>
          </article>

          {/* STEP 3 */}
          <article>
            <div className="rounded-3xl bg-[#e6eeff] p-10">
              <div className="relative mx-auto aspect-video w-full max-w-[320px]">
                <Image src="/step3.png" alt="Step 3" fill className="object-contain" />
              </div>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">STEP 3</p>
            <h3 className="mt-3 text-2xl font-extrabold">MAIL IT IN.</h3>
            <p className="mt-4 text-base text-slate-700">Send us your items and we’ll handle the rest.</p>
          </article>
        </div>

        <div className="mt-12">
          <a href="/trade-in/mail-in" className="inline-flex rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800">
            Start Trade-In
          </a>
        </div>
      </section>

      {/* VIDEO */}
      <Video />

      {/* FAQ */}
      <section id="faq" className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>

        <div className="mt-6 space-y-3">
          <details className="rounded-2xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer text-sm font-semibold">How much credit will I receive?</summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">Your credit is based on the condition and original value of your gear. Once we inspect your item, we’ll confirm the amount. Eligible items earn SnowSwap credit to use on pre-loved gear.</p>
          </details>

          <details className="rounded-2xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer text-sm font-semibold">How will I receive my credit?</summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">After we check your items, you’ll receive an email with your SnowSwap credit. You can use it on snowswap.dk for up to one year.</p>
          </details>

          <details className="rounded-2xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer text-sm font-semibold">Do you accept all items?</summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">We accept clean, usable ski gear. Items that can’t be renewed will be responsibly recycled or donated as part of our circular approach.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
