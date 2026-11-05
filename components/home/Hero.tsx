
"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const videos = [
  "/videos/video-01.mp4",
  "/videos/video-02.mp4",
  "/videos/video-03.mp4",
  "/videos/video-04.mp4",
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-[#211b17] text-[#fff8ed]">

      {/* FOUR VIDEOS PLAYING TOGETHER */}
      <div className="absolute inset-0 grid grid-cols-4 overflow-hidden">

        {videos.map((video, index) => (
          <div
            key={video}
            className="relative h-full min-w-0 overflow-hidden border-r border-white/10 last:border-r-0"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover object-center"
            />

            {/* Individual video overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

      </div>

      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70" />

      {/* DECORATIVE FRAME */}
      <div className="pointer-events-none absolute inset-4 z-10 border border-[#e8c88e]/35 md:inset-8" />

      {/* HERO CONTENT */}
      <div className="relative z-20 flex min-h-[calc(100svh-80px)] flex-col items-center justify-center px-5 py-24 text-center">

        <p className="mb-7 text-[10px] tracking-[0.45em] text-[#f2d7a0] sm:text-xs">
          AN EXPRESSION OF RAJASTHAN
        </p>

        <h1 className="font-serif text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-[112px]">
          Kanchali
          <br />
          <span className="italic text-[#e8c88e]">
            Wali.
          </span>
        </h1>

        <p className="mt-7 max-w-md text-xs leading-7 tracking-[0.12em] text-white/90 sm:text-sm">
          The timeless beauty of Rajasthani attire.
          <br />
          A heritage expressed through every detail.
        </p>

        <Link
          href="#collections"
          className="group mt-9 inline-flex items-center gap-4 border border-[#e8c88e] px-8 py-4 text-[10px] tracking-[0.25em] transition-all duration-300 hover:bg-[#e8c88e] hover:text-[#29231f]"
        >
          EXPLORE COLLECTION
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <div className="absolute bottom-10 flex items-center gap-3 text-[9px] tracking-[0.3em] text-white/75">
          <span>ROOTED IN HERITAGE</span>
          <span className="text-[#e8c88e]">✦</span>
          <span>CRAFTED WITH ELEGANCE</span>
        </div>

      </div>
    </section>
  );
}
