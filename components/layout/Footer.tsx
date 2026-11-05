
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#702b35] px-6 py-12 text-[#f7f0e5] md:px-12">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-10 md:flex-row md:items-center">
        <div>
          <Link href="/" className="font-serif text-3xl tracking-[0.12em]">
            KANCHALI WALI
          </Link>

          <p className="mt-3 text-[10px] tracking-[0.2em] text-white/60">
            ROOTED IN RAJASTHAN. MADE WITH LOVE.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-white/75">
          <Link href="/">Home</Link>
          <Link href="#collections">Collections</Link>
          <Link href="#story">Our Story</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <Link
          href="https://www.instagram.com/kanchali_wali/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-[#702b35]"
        >
          <FaInstagram size={19} />
        </Link>
      </div>

      <div className="mx-auto mt-12 max-w-[1500px] border-t border-white/20 pt-6 text-center text-[10px] tracking-wider text-white/50 md:text-left">
        © 2026 KANCHALI WALI. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
