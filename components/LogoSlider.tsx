"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import DMAA from "@/public/images/Affiliations/dmaa.png"
import RETTC from '@/public/images/Affiliations/rett.png';
import NMHC from "@/public/images/Affiliations/nmhc.png";
import NAA from '@/public/images/Affiliations/naa.png';
import AAGD from '@/public/images/Affiliations/aagd.png';
import USProptech from '@/public/images/Affiliations/us.png';
import Home from '@/public/images/Affiliations/home.png';

export type PartnerItem = { src: string; alt: string };

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function LogoSlider({
  items = [
    { src: DMAA.src, alt: "DMAA" },
    { src: RETTC.src, alt: "RETTC" },
    { src: NMHC.src, alt: "NMHC" },
    { src: NAA.src, alt: "NAA" },
    { src: AAGD.src, alt: "AAGD" },
    { src: USProptech.src, alt: "US Proptech Council" },
    { src: Home.src, alt: "Home" },
  ],
  autoPlay = true,
  autoPlayMs = 4000,
}: {
  items?: PartnerItem[];
  autoPlay?: boolean;
  autoPlayMs?: number;
}) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // Responsive: <1024 = 1 logo, >=1024 = 2 logos
  const [cols, setCols] = useState(1);

useEffect(() => {
  const computeCols = () => {
    if (window.innerWidth >= 1280) setCols(2);        // ≥1280px → 2 logos
    else if (window.innerWidth >= 1024) setCols(3);   // 1024–1279px → 3 logos
    else setCols(2);                                  // <1024px → 2 logos
  };
  computeCols();
  window.addEventListener("resize", computeCols);
  return () => window.removeEventListener("resize", computeCols);
}, []);

  const pages = useMemo(() => chunk(items, cols), [items, cols]);
  const [page, setPage] = useState(0);

  // Update active dot while scrolling
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setPage(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Auto play
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => goTo(page + 1), autoPlayMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, autoPlay, autoPlayMs, pages.length]);

  function goTo(i: number) {
    const el = viewportRef.current;
    if (!el) return;
    const next = (i + pages.length) % pages.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setPage(next);
  }

  return (
    <section className="w-full mt-[15px]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative">
          {/* viewport */}
          <div
            ref={viewportRef}
            className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl"
            style={{ scrollbarWidth: "none" }}
          >
            {pages.map((group, i) => (
              <div
                key={i}
                className="w-full shrink-0 snap-center px-1 md:px-2"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${pages.length}`}
              >
                <div
                  className="grid gap-4 md:gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                  }}
                >
                  {group.map((item, j) => (
                    <article
                      key={j}
                      className="relative flex aspect-[16/9] items-center justify-center rounded-xl border border-[var(--logo-bdr)] bg-[var(--logo-bg)]"
                    >
                      <div className="relative h-[62%] w-[70%]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-contain"
                          sizes="(min-width: 768px) 420px, 80vw"
                          priority={i === 0 && j === 0}
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {pages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  page === i
                     ? "scale-110 bg-(--Livsee-champagne)"
                    : "bg-white hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
