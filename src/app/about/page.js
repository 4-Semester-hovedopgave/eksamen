import Image from "next/image";

export const metadata = {
  title: "About | SnowSwap",
};

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Row 1 */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="m-0 p-0 text-left text-2xl font-extrabold tracking-tight">ABOUT SNOWSWAP</h1>

          <p className="mt-6 text-base leading-relaxed text-gray-700">SnowSwap is a new service introduced by Snowminds with a clear purpose: to make it easier and safer to give ski gear a second life. The platform is built on the idea that quality equipment doesn’t lose its value after one season and that resale should be just as trustworthy and simple as buying new. In an industry where large amounts of gear are produced and replaced every year, much of it still has plenty of life left. SnowSwap aims to reduce waste by extending the lifespan of ski clothing and equipment, while offering a transparent and curated alternative to traditional resale platforms.</p>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image src="/about.jpg" alt="Skihill" fill className="object-cover" priority />
        </div>
      </section>

      {/* Quote */}
      <p className="mx-auto my-14 max-w-3xl text-center text-xl font-medium leading-snug md:text-3xl">“Good gear deserves more than one season. SnowSwap exists to extend the life of quality ski equipment.”</p>

      {/* Row 2 + 3 */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        {/* Row 2 image */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image src="/fits.webp" alt="Fit and conditions" fill className="object-cover object-top" />
        </div>

        {/* Row 2 text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Condition & Fit</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">Before an item appears on SnowSwap, it is received and reviewed by Snowminds. Each piece of ski gear is carefully checked and assessed to ensure that its condition is accurately described. This extra step helps create a more transparent and trustworthy resale experience, where users know what to expect when buying pre-owned equipment.</p>
        </div>
      </section>
    </main>
  );
}
