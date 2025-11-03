"use client";

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';


const NAV = [
  { label: "Meet Livsee®", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Connect", href: "/connect" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
   <div className="absolute w-full z-50 max-w-full">
  <div className="mx-auto max-w-full px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:px-[100px]">
    <div className="flex pt-[25px] xl:pt-0 items-center justify-between">
      {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
      {/* Mobile Logo */}
      <div className="relative block xl:hidden rounded-full w-[60px] md:w-20 lg:w-[90px] aspect-square">
        <Image
          src="/images/logo/Livsee-Logomark-RGB_champagne.svg"
          alt="Logo"
          fill
          className="rounded-full object-contain"
          sizes="(min-width:1024px) 90px, (min-width:768px) 80px, 60px"
          priority
        />
      </div>

      {/* Desktop Logo */}
      <div className="relative hidden xl:block rounded-full w-[100px] md:w-[150px] 2xl:w-[190px] aspect-square">
        <Image
          src="/images/logo/Livsee-Logo-RGB_champagne.svg"
          alt="Logo"
          fill
          className="rounded-full object-contain"
          sizes="(min-width:1536px) 190px, (min-width:1024px) 150px, 100px"
          priority
        />
      </div>
    </Link>

      {/* Right group: Nav + CTAs (Desktop ≥1280px) */}
      <div className="ml-auto hidden xl:flex items-center gap-[20px] md:gap-[30px] 2xl:gap-[60px]">
        <nav className="flex items-center gap-[20px] md:gap-[30px] 2xl:gap-[60px] ">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              prefetch={false}
              className="font-semibold text-[16px] md:text-[18px] 2xl:text-[20px] text-(--Live-see-btn) hover:-(--Live-see-btn-hover)"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="rounded-full border-2 border-(--Live-see-btn) text-(--Live-see-btn) font-semibold
              text-[16px] md:text-[16px] 2xl:text-[20px] px-5 md:px-6 2xl:px-[29px] py-[8.5px] md:py-[9.5px] 2xl:py-[10.5px]
              hover:border-(--Live-see-btn-hover) hover:text-(--Live-see-btn-hover) hover:bg-transparent
              transition-colors duration-300"
          >
            Book a Demo
          </a>
          <a
            href="#login"
            className="rounded-full border-2 border-(--Live-see-btn) text-(--Live-see-btn) font-semibold
              text-[16px] md:text-[16px] 2xl:text-[20px] px-5 md:px-6 2xl:px-[29px] py-[8.5px] md:py-[9.5px] 2xl:py-[10.5px]
              hover:border-(--Live-see-btn-hover) hover:text-(--Live-see-btn-hover) hover:bg-transparent
              transition-colors duration-300"
          >
            Login
          </a>
        </div>
      </div>

      {/* Mobile toggle (Visible below 1280px) */}
      <button
        onClick={() => setOpen(true)}
        className="xl:hidden inline-flex items-center justify-center rounded-full border-2 border-(--Livsee-champagne) text-(--Livsee-champagne) p-2"
        aria-label="Open menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile sheet */}
  {open && (
    <div className="fixed inset-0 bg-[#2e4d3c] z-50">
      <div className="flex items-center justify-between pt-[25px] md:pt-10 px-5 md:px-[40px] lg:px-[40px] xl:px-[100px] 2xl:px-[100px]">
        <a href="/" className="flex items-center gap-2">
          <div className="relative block xl:hidden rounded-full w-[60px] md:w-20 lg:w-[90px] aspect-square">
        <Image
          src="/images/logo/Livsee-Logomark-RGB_champagne.svg"
          alt="Logo"
          fill
          className="rounded-full object-contain"
          sizes="(min-width:1024px) 90px, (min-width:768px) 80px, 60px"
          priority
        />
      </div>
        </a>
        <button
          onClick={() => setOpen(false)}
          className="rounded-full border-2 border-(--Livsee-champagne) text-(--Livsee-champagne) p-2"
          aria-label="Close menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" />
          </svg>
        </button>
      </div>
      <nav className="mt-6 divide-y divide-[#548c6d] bg-[#365a46]">
        {NAV.map((n) => (
          <Link
            key={n.label}
            href={n.href}
            prefetch={false}
            onClick={() => setOpen(false)}
            className="block px-4 py-4 text-[16px] text-(--Livsee-champagne)  hover:bg-white/5"
          >
            {n.label}
          </Link>
        ))}
        <a href="#demo" className="block px-4 py-4 text-[16px] text-(--Livsee-champagne) hover:bg-white/5">
          Book a Demo
        </a>
        <a href="#login" className="block px-4 py-4 text-[16px] text-(--Livsee-champagne) hover:bg-white/5">
          Login
        </a>
      </nav>
    </div>
  )}
</div>

  );
}
