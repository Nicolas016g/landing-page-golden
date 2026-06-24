"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GoldenCityLogo } from "../ui/GoldenCityLogo";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "Plantas", href: "#plantas" },
  { label: "Lazer", href: "#lazer" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#" className="shrink-0">
          <GoldenCityLogo
            variant="header"
            className={`transition-all ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-text-muted hover:bg-primary/5 hover:text-primary"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+5515996642444"
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "border-border text-primary"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <Phone className="h-4 w-4" />
            (15) 99664-2444
          </a>
          <a
            href="#contato"
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
              scrolled ? "btn-primary !py-2.5" : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Fale com um corretor
          </a>
        </div>

        <button
          className={`rounded-lg p-2 lg:hidden ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-semibold text-primary-dark"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary mt-3 w-full text-center" onClick={() => setOpen(false)}>
            Fale com um corretor
          </a>
        </div>
      )}
    </header>
  );
}
