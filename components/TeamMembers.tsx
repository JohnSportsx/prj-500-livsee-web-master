import Image from "next/image";
import Link from "next/link";
import Andrea from "@/public/images/Bio/Andrea_Michele_Taylor.png";
import Arul from "@/public/images/Bio/Arul_Selvan.png";
import { ANDREA_LINKEDIN, ANDREA_MAIL, ARUL_LINKEDIN, ARUL_MAIL } from "@/utils";

export default function TeamMembers() {
  return (
    <main className="text-(--color-light-text) antialiased mx-auto pt-[50] md:pt-[80] pb-[50] md:pb-[80] px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:md:px-0">
      <section className="max-w-full 2xl:max-w-[1204px] mx-auto">
        <h3 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center">
          Our Team
        </h3>

        {/* Andrea Michele Taylor */}
        <article className="mt-[30px] lg:mt-[40px] xl:mt-[40px] 2xl:mt-[60px] flex flex-col items-center lg:flex-row lg:items-center gap-[20px] md:gap-[20px] 2xl:gap-[30px]">
          <div className="flex-none h-[220px] md:h-[200px] lg:h-[200px] 2xl:h-[280px] w-[220px] md:w-[200px] lg:w-[200px] 2xl:w-[280px] relative">
            <Image
              src={Andrea.src}
              alt="Andrea Michele Taylor"
              fill
              className="object-cover"
              priority
              sizes="(min-width:1536px) 280px, (min-width:1024px) 200px, (min-width:768px) 200px, 220px"
            />
          </div>

          <div className="flex-grow w-full">
            <h4 className="font-serif text-[20px] md:text-[30px] 2xl:text-[37px] leading-[1.2]">
              Andrea Michele Taylor
            </h4>
            <p className="font-serif mt-[10px] md:mt-[10px] 2xl:mt-[12px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.2]">
              Founder &amp; CEO
            </p>
            <div className="mt-[15px] md:mt-[15px] xl:mt-[15px] 2xl:mt-5 h-1 w-12 bg-(--Livse-peach)" />
            <p className="mt-[15px] md:mt-[15px] xl:mt-[15px] 2xl:mt-5 text-[16px] md:text-[16px] 2xl:text-[18px] leading-[1.4] text-justify">
              With over 15 years in the multifamily real estate industry, Andrea founded
              Livsee to transform the rental experience with tools that simplify leasing for
              renters and optimize occupancy for operators. Before launching Livsee, Andrea
              led innovation and ancillary services for leading operators, including Morgan
              Properties and Waterton. A graduate of Michigan State University, she combines
              industry expertise with a passion for innovation and entrepreneurship — driving
              solutions that deliver measurable impact.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href={ANDREA_LINKEDIN}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--color-light-text) ring-1 ring-black/5 border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:border-(--color-light-text)"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-white transition-colors duration-300 group-hover:text-(--color-light-text)"
                >
                  <circle cx="4" cy="4" r="2" fill="currentColor" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path d="M4 10v10" />
                    <path d="M10 10v10" />
                    <path d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5" />
                  </g>
                </svg>
              </Link>

              <Link
                href={`mailto:${ANDREA_MAIL}`}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-light-text)] ring-1 ring-black/5 border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:border-[var(--color-light-text)]"
                aria-label="Mail"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-white transition-colors duration-300 group-hover:text-[var(--color-light-text)]"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z" />
                    <path d="M3 6.5l9 5.5l9 -5.5" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </article>

        {/* Arul Selvan */}
        <article className="mt-[30px] lg:mt-[40px] xl:mt-[40px] 2xl:mt-[60px] flex flex-col items-center lg:flex-row lg:items-center gap-[20px] md:gap-[20px] 2xl:gap-[30px]">
          <div className="flex-none h-[220px] md:h-[200px] lg:h-[200px] 2xl:h-[280px] w-[220px] md:w-[200px] lg:w-[200px] 2xl:w-[280px] relative">
            <Image
              src={Arul.src}
              alt="Arul Selvan"
              fill
              className="object-cover"
              sizes="(min-width:1536px) 280px, (min-width:1024px) 200px, (min-width:768px) 200px, 220px"
            />
          </div>

          <div className="flex-grow w-full">
            <h4 className="font-serif text-[20px] md:text-[30px] 2xl:text-[37px] leading-[1.2]">
              Arul Selvan
            </h4>
            <p className="font-serif mt-[10px] md:mt-[10px] 2xl:mt-[12px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.2]">
              Chief Technology Advisor
            </p>
            <div className="mt-[15px] md:mt-[15px] xl:mt-[15px] 2xl:mt-5 h-1 w-12 bg-(--Livse-peach)" />
            <p className="mt-[15px] md:mt-[15px] xl:mt-[15px] 2xl:mt-5 text-[16px] md:text-[16px] 2xl:text-[18px] leading-[1.4] text-justify">
             Arul is a seasoned technology executive with over 30 years of experience spanning proptech, fintech, cybersecurity, healthcare, and other sectors. He combines deep technical expertise with a proven track record of driving innovation at scale, having led high-performing engineering teams for more than 15 years. His leadership at companies like RealPage highlights his ability to accelerate growth and deliver operational excellence in the property technology domain.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href={ARUL_LINKEDIN}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--color-light-text) ring-1 ring-black/5 border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:border-(--color-light-text)"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-white transition-colors duration-300 group-hover:text-(--color-light-text)"
                >
                  <circle cx="4" cy="4" r="2" fill="currentColor" />
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path d="M4 10v10" />
                    <path d="M10 10v10" />
                    <path d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5" />
                  </g>
                </svg>
              </Link>

              <Link
                href={`mailto:${ARUL_MAIL}`}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-light-text)] ring-1 ring-black/5 border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:border-[var(--color-light-text)]"
                aria-label="Mail"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="text-white transition-colors duration-300 group-hover:text-[var(--color-light-text)]"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z" />
                    <path d="M3 6.5l9 5.5l9 -5.5" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
