// Image import removed (not used)

import Link from "next/link";
import { config } from "@/app/config";
const { basePath } = config;

const bgImage = `${basePath}/images/hero/hero-mobile.jpg`;
const lgBgImage = `${basePath}/images/hero/hero-desktop.jpg`;

export default function CommonHeroBanner() {
  return (
    <section
      className={`relative isolate overflow-hidden text-[var(--Livsee-champagne)]
              bg-[var(--Livsee-emerald)]  
              bg-[url('${bgImage}')] 
              lg:bg-[url('${lgBgImage}')] 
              bg-cover bg-center min-h-[850px] md:min-h-[1024px] lg:min-h-[1024px] xl:min-h-[900px] 2xl:min-h-[1080px]
              border-b-[6px] xl:border-b-[8px] border-[var(--Livse-peach)]`}
    >
      {/* Green overlay */}

      <div className="relative mx-auto max-w-full px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:px-[100px]text-(--Livsee-champagne)">
        <div className="grid grid-cols-1 md:grid-cols-1">
          {/* Text content */}
          <div className="pt-[200px] md:pt-[250px] 2xl:pt-[300px]">
            <h1 className="font-dm-serif leading-[1.2] font-500 text-[40px] md:text-[58px] 2xl:text-[81px]">
              Go beyond the conversation.
            </h1>
            <div className="mt-5 h-1 w-24 bg-(--Livse-peach)" />
            <p className="mt-5 md:mt-8 2xl:mt-10 w-full md:w-[50%] text-[16px] md:text-[26px] 2xl:text-[36px] leading-[1.4]">
              Grow revenue and increase occupancy at every stage of the resident
              journey with Livsee®.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="#meet_livsee"
                className="rounded-full border-2 border-(--Live-see-btn) text-(--Livsee-emerald) font-semibold
                          text-[14px] md:text-[16px] 2xl:text-[20px] px-5 md:px-6 2xl:px-[27px] py-[8.5px] md:py-[9.5px] 2xl:py-[10.5px]
                          hover:border-(--Live-see-btn-hover) hover:text-(--Live-see-btn-hover) bg-(--Livsee-champagne) hover:bg-transparent
                          transition-colors duration-300 inline-block text-centerrounded-full text-center"
              >
                See How
              </Link>

              <Link
                href="#demo"
                className="rounded-full border-2 border-(--Live-see-btn) text-(--Live-see-btn) font-semibold
                          text-[14px] md:text-[16px] 2xl:text-[20px] px-5 md:px-6 2xl:px-[29px] py-[8.5px] md:py-[9.5px] 2xl:py-[10.5px]
                          hover:border-(--Live-see-btn-hover) hover:text-(--Live-see-btn-hover) hover:bg-transparent
                          transition-colors duration-300"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
