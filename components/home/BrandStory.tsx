
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section id="story" className="overflow-hidden bg-[#702b35] text-[#f7f0e5]">
      <div className="mx-auto grid max-w-[1500px] items-center md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="px-7 py-20 md:px-16 md:py-32"
        >
          <p className="mb-6 text-[10px] tracking-[0.4em] text-[#e8c88e]">
            THE STORY OF KANCHALI WALI
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            More than
            <br />
            <span className="italic text-[#e8c88e]">just attire.</span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-8 text-white/75">
            Rajasthan is a world of colours, traditions and timeless
            beauty. Every silhouette tells a story, every detail
            reflects an expression of culture, and every creation
            celebrates the spirit of traditional Indian fashion.
          </p>

          <div className="mt-10 border-t border-white/20 pt-6">
            <p className="font-serif text-2xl italic text-[#e8c88e]">
              A heritage worth wearing.
            </p>
          </div>
        </motion.div>

        <div className="relative min-h-[500px] md:min-h-[750px]">
          <Image
            src="/images/story/heritage.jpg"
            alt="Kanchali Wali traditional Rajasthani fashion"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
