"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "#collections" },
    { label: "Our Story", href: "#story" },
    { label: "Craftsmanship", href: "#craftsmanship" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-50 bg-[#f7f0e5]">
      <div className="flex h-20 items-center justify-between px-5 md:px-12">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2"
          aria-label="Toggle navigation"
        >
          <Menu size={21} />
          <span className="hidden text-xs tracking-widest sm:block">
            MENU
          </span>
        </button>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="whitespace-nowrap font-serif text-2xl font-semibold tracking-[0.12em] text-[#702b35] md:text-3xl">
            KANCHALI WALI
          </span>
        </Link>

        <button aria-label="Shopping bag">
          <ShoppingBag size={21} />
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-full w-full border-t border-[#c7a77b]/30 bg-[#f7f0e5] px-8 py-8 shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl text-[#702b35] hover:text-[#b08a4f]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}