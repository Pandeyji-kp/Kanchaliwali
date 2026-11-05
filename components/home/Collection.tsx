
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    title: "The Royal Rajputi",
    subtitle: "A timeless royal expression",
    image: "/images/collections/navy-royal.jpg",
    number: "01",
  },
  {
    title: "Ivory & Gold",
    subtitle: "Elegance in every detail",
    image: "/images/collections/ivory-gold.jpg",
    number: "02",
  },
  {
    title: "The Mustard Edit",
    subtitle: "Tradition with a modern soul",
    image: "/images/collections/mustard-look.jpg",
    number: "03",
  },
  {
    title: "Festive Colours",
    subtitle: "Made for unforgettable moments",
    image: "/images/collections/pink-look.jpg",
    number: "04",
  },
];

export default function Collection() {
  return (
    <section id="collections" className="bg-[#f7f0e5] px-5 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#8c6842]">
              DISCOVER OUR WORLD
            </p>
            <h2 className="font-serif text-5xl text-[#702b35] md:text-7xl">
              Collections <span className="italic">&</span> Stories
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#766b60]">
            Every creation carries a story of heritage, beauty and
            the timeless artistry of Rajasthan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href="#contact">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e7ddcd]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[#f7f0e5] px-3 py-2 text-[10px] tracking-widest text-[#702b35]">
                    {item.number}
                  </span>
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f0e5] text-[#702b35]">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="pt-5">
                  <h3 className="font-serif text-2xl text-[#702b35]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs tracking-wide text-[#82776a]">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
