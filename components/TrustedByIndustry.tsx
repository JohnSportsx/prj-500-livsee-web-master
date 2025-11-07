import Image from "next/image";
import LogoSlider from "@/components/LogoSlider";
import Link from "next/link";

import DMAA from "@/public/images/Affiliations/dmaa.png"
import RETTC from '@/public/images/Affiliations/rett.png';
import NMHC from "@/public/images/Affiliations/nmhc.png";
import NAA from '@/public/images/Affiliations/naa.png';
import AAGD from '@/public/images/Affiliations/aagd.png';
import USProptech from '@/public/images/Affiliations/us.png';
import Home from '@/public/images/Affiliations/home.png';
import Yardi from '@/public/images/Affiliations/yardi.png';

export default function TrustedByIndustry() {
  const logos = [
    { src: DMAA.src, alt: "DMAA" },
    { src: RETTC.src, alt: "RETTC" },
    { src: NMHC.src, alt: "NMHC" },
    { src: NAA.src, alt: "NAA" },
    { src: AAGD.src, alt: "AAGD" },
    { src: USProptech.src, alt: "US Proptech Council" },
    { src: Home.src, alt: "Home" },
    { src: Yardi.src, alt: "Yardi" }    
  ];

  return (
    <section className="mx-auto max-w-full px-5 md:px-[40px] xl:px-[80px] 2xl:px-[100px] bg-(--Livsee-emerald) text-(--Livsee-champagne) pt-[40] pb-[40] border-b-[6px] xl:border-b-[8px] border-(--Livse-peach)">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3">
        {/* Left column (text) */}
        <div className="w-full xl:w-auto">
          <p className="text-[14px] md:text-[16px] 2xl:text-[16px] leading-[1.4]">
            Affiliations &amp; Technology Partners
          </p>
          <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2]">
            Trusted by the Industry
          </h2>
          <div className="w-10 h-1 bg-(--Livse-peach) mt-[15px] md:mt-[15px] lg:mt-[15px] xl:mt-2.5 2xl:mt-2.5"></div>
          <p className="mt-[15px] md:mt-[15px] xl:mt-[15px] 2xl:mt-5 mb-8 text-white text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
            Livsee’s affiliations and technology partners are trusted throughout
            the industry.
          </p>
          <Link
            href="/contact"
            className="rounded-full border-2 border-[--Livsee-champagne] text-(--Livsee-champagne) font-semibold
            text-[14px] md:text-[16px] 2xl:text-[20px] px-5 md:px-6 2xl:px-[28px] py-[8.5px] md:py-[9.5px] 2xl:py-[10.5px]  
            hover:border-white hover:text-white hover:bg-transparent transition-colors duration-300"
          >
            Partner With Us
          </Link>
        </div>

        {/* Right column (logos) - Desktop */}
        <div className="col-span-2 hidden xl:block">
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[20px] max-w-6xl">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex w-40 lg:w-45 xl:w-40 2xl:w-65 items-center justify-center bg-[var(--logo-bg)] border border-[var(--logo-bdr)] rounded-xl"
                >
                  <div className="relative w-full md:h-[120px] lg:h-[135px] xl:h-[145px] 2xl:h-[160px] p-0">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        sizes="(min-width:1536px) 260px, (min-width:768px) 160px, 100vw"
                        loading="lazy"
                      />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="block lg:block xl:hidden 2xl:hidden demo mt-2">
          <div className="w-full flex justify-center">
            {/* <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[20px] max-w-6xl">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex aspect-[4/3] w-40 md:w-40 2xl:w-60 items-center justify-center bg-[var(--logo-bg)] border border-[var(--logo-bdr)] rounded-xl"
                >
                  <div className="relative w-full h-full p-4">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        sizes="(min-width:1536px) 240px, (min-width:768px) 160px, 100vw"
                        loading="lazy"
                      />
                  </div>
                </div>
              ))}
            </div> */}
             <LogoSlider
                items={[
                  { src: "images/Affiliations/dmaa.png", alt: "DMAA" },
                  { src: "images/Affiliations/rett.png", alt: "RETTC" },
                  { src: "images/Affiliations/nmhc.png", alt: "NMHC" },
                  { src: "images/Affiliations/naa.png", alt: "NAA" },
                  { src: "images/Affiliations/aagd.png", alt: "AAGD" },
                  { src: "images/Affiliations/us.png", alt: "US Proptech Council" },
                  { src: "images/Affiliations/home.png", alt: "Home" },
                   { src: Yardi.src, alt: "Yardi" } 
                ]}
              />
          </div>
        </div>
      </div>
    </section>
  );
}
