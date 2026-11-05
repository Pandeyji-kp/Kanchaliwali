
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      id="contact"
      className="bg-[#29231f] px-6 py-24 text-center text-[#f7f0e5] md:py-32"
    >
      <p className="mb-5 text-[10px] tracking-[0.4em] text-[#e8c88e]">
        YOUR NEXT FAVOURITE LOOK AWAITS
      </p>

      <h2 className="font-serif text-5xl md:text-7xl">
        Let's create
        <br />
        <span className="italic text-[#e8c88e]">
          something timeless.
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/65">
        Looking for a traditional look for your special occasion?
        Get in touch with Kanchali Wali.
      </p>

      <Link
        href="https://www.instagram.com/kanchali_wali/"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-3 bg-[#e8c88e] px-9 py-4 text-[10px] tracking-[0.2em] text-[#29231f] transition hover:bg-[#f7f0e5]"
      >
        CONNECT WITH US
        <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
