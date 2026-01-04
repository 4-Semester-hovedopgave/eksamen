export default function Video() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12">
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-black/5 ring-1 ring-black/10">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/ytvideo.mp4"
                    controls
                    playsInline
                    preload="metadata"
                />
            </div>
        </section>
    );
}
