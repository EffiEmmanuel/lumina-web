export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0b] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#e53223]/25 blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-80px] h-[380px] w-[380px] rounded-full bg-white/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <section className="flex w-full max-w-2xl flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            Lumina for Desktop
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[56px]">
            Lumina — the floating Bible narrator for focused moments.
          </h1>
          <h2 className="text-lg font-semibold text-white/80 sm:text-xl lg:text-2xl">
            If you’re like me, not just any audio Bible will do—I need something
            that fits how I learn, both seeing and hearing. That’s exactly why I
            made Lumina.
          </h2>
          <p className="text-sm font-normal text-white/60 sm:text-base">
            It sits in the corner of your screen like a gentle companion. You
            select a book, chapter, and verse. Lumina loads instantly and reads
            with a natural voice — perfect for reflection, focus, and a few
            minutes of stillness in a busy day.
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#e53223] px-6 text-base font-bold text-white transition-colors hover:bg-[#c62b1f]"
              href="/downloads/lumina-mac.dmg"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M17.564 13.862c-.022-2.21 1.806-3.266 1.888-3.315-1.03-1.504-2.634-1.711-3.201-1.733-1.363-.138-2.66.8-3.35.8-.686 0-1.747-.78-2.87-.76-1.475.022-2.835.857-3.59 2.178-1.54 2.671-.394 6.63 1.107 8.797.734 1.063 1.607 2.256 2.756 2.212 1.106-.044 1.523-.715 2.858-.715 1.33 0 1.707.715 2.87.693 1.192-.022 1.945-1.081 2.673-2.147.847-1.238 1.196-2.44 1.218-2.502-.027-.011-2.332-.896-2.354-3.508z" />
                <path d="M15.36 6.273c.61-.74 1.026-1.768.915-2.794-.88.036-1.946.586-2.577 1.326-.566.654-1.063 1.697-.93 2.697.983.078 1.98-.5 2.592-1.229z" />
              </svg>
              Download for Mac
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-base font-bold text-white transition-colors hover:border-transparent hover:bg-white/10"
              href="/downloads/lumina-windows.exe"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M2 3.5 11.5 2v9.25H2V3.5zM12.5 1.875 22 0v11.25h-9.5V1.875zM2 12.75h9.5V22L2 20.5v-7.75zM12.5 12.75H22V24l-9.5-1.5v-9.75z" />
              </svg>
              Download for Windows
            </a>
          </div>
          <p className="text-xs font-normal uppercase tracking-[0.2em] text-white/50">
            Free. Lightweight. No sign-up required.
          </p>
        </section>

        <section className="relative flex w-full max-w-md flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-[12px]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
              <span>Now Reading</span>
              <span>00:28</span>
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold text-white/70">
                John 15:5 (NIV)
              </p>
              <p className="text-lg font-semibold leading-relaxed text-white">
                “If you remain in me and I in you, you will bear much fruit.”
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-[#e53223]" />
              </div>
              <button
                aria-label="Play"
                className="ml-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e53223] text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M8 5.5v13l10-6.5-10-6.5z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70 backdrop-blur-[12px]">
            Always-on-top. Minimal UI. Gentle voice.
          </div>
        </section>
      </main>
    </div>
  );
}
