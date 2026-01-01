import Image from "next/image";

export const metadata = {
  title: "Events | SnowSwap",
};

export default function Events() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* INTRO */}
      <section className="mb-14 ">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-4xl">Events</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">At SnowSwap, we create events as spaces for the community to come together. We host everything from hands-on workshops to quiz nights and informal gatherings. Our events are about shared experiences, conversations, and time spent together — whether you come alone or with friends. Along the way, you might meet new people, form connections, or even find your next best friends.</p>
      </section>

      {/* EVENTS */}
      <section className="grid gap-16">
        {/* EVENT 1 */}
        <article className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image src="/reapir.jpg" alt="Care & Repair" fill className="object-cover object-center" priority />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Workshop · In-person</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Care & Repair</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">Learn how to care for and repair your ski gear to extend its lifespan. The workshop focuses on simple maintenance, minor repairs, and practical tips that help keep gear in use for longer rather than replacing it.</p>
            <p className="mt-4 text-sm text-gray-700">More information will come.</p>
          </div>
        </article>

        {/* EVENT 2 (image right on desktop) */}
        <article className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="md:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image src="/afterski.jpg" alt="Afterski bytur" fill className="object-cover object-center" />
          </div>

          <div className="md:order-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Social · Community</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Afterski Nightout</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">A casual city night inspired by afterski culture, bringing together the SnowSwap and Snowminds community. The event focuses on good company, shared ski stories, and connecting beyond the slopes.</p>
            <p className="mt-4 text-sm text-gray-700">More information will come.</p>
          </div>
        </article>

        {/* EVENT 3 */}
        <article className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image src="/quiz.jpg" alt="Quiz Night" fill className="object-cover object-center" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Social · Evening event</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Quiz Night</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">Join a relaxed quiz night with a focus on ski culture, winter destinations, and sustainability. Participants can come as a team or join one on the night, with the emphasis on fun rather than competition.</p>
            <p className="mt-4 text-sm text-gray-700">More information will come.</p>
          </div>
        </article>
      </section>
    </main>
  );
}
