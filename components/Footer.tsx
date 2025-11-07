import Image from "next/image";
import Link from "next/link";
import LivseeLogomarkRGBreverse from "@/public/images/logo/Livsee-Logomark-RGB_reverse.svg";
import { COMPANY_EMAIL, INSTAGRAM, LINKDIN, NEWSLETTER } from "@/utils";
export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-full px-5 md:px-[40px] xl:px-[80px] 2xl:px-[100px] text-(--Livsee-champagne) pt-[40] pb-[40] bg-(--Livsee-emerald) text-white py-8 px-4">
        <div className="">
          <Image
            src={LivseeLogomarkRGBreverse.src}
            alt="Logo"
            width={90}
            height={90}
            className="rounded-full w-[60px] md:w-20 lg:w-[90px] h-auto"
            sizes="(min-width:1024px) 90px, (min-width:768px) 80px, 60px"
            priority
          />
          <p className="mt-[15px] md:mt-[15px] xl:mt-[15px] 2xl:mt-5 max-w-3xl text-[16px] md:text-[16px] 2xl:text-[18px] leading-[1.4]">
            Ann Arbor, Michigan
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          <div className="">
            <div className="">
              <h5 className="font-serif mt-[20px] md:mt-[30px] 2xl:mt-[36px] text-[20px] md:text-[20px] 2xl:text-[24px] leading-[1.2]">
                Write Us
              </h5>
              <p className="mt-[5px] max-w-3xl text-[16px] md:text-[24px] 2xl:text-[27px] leading-[1.4]">
                <Link
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="group inline-flex text-(--Livsee-champagne) hover:text-white"
                  aria-label="Mail"
                >
                  info@livsee.com
                </Link>
              </p>

              <div className="mt-[20px] md:mt-[30px] 2xl:mt-[34px]  flex items-center gap-3">
                <Link
                  href={LINKDIN}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-(--Livsee-champagne) transition-all duration-300 hover:bg-transparent hover:border-white"
                  aria-label="Mail"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="text-(--Livsee-champagne) transition-colors duration-300 group-hover:text-white"
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
                  href={INSTAGRAM}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-(--Livsee-champagne) transition-all duration-300 hover:bg-transparent hover:border-white"
                  aria-label="Mail"
                >                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className="text-(--Livsee-champagne) transition-colors duration-300 group-hover:text-white">
                    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z" />
                      <path d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full left-0">
            <div className="w-[280px] sm:max-w-md sm:ml-auto sm:w-[395px] md:w-[365px]">
              <h5 className="font-serif mt-[10px] md:mt-[30px] 2xl:mt-[36px] text-[24px] md:text-[22px] 2xl:text-[24px] leading-[1.2]">
                The Livsee Newsletter
              </h5>
              <p className="mb-[12px] md:mb-[15px] xl:mb-[15px] 2xl:mb-[15px] mt-[10px] md:mt-[20px] xl:mt-[20px] 2xl:mt-[20px] max-w-3xl text-[16px] md:text-[16px] 2xl:text-[18px] leading-[1.4]">
                Follow our journey.
              </p>
              <div className="">
                   <iframe
                      src={NEWSLETTER}
                      data-test-id="beehiiv-embed"
                      height="52"
                      frameBorder="0"
                      scrolling="no"
                      style={{
                        margin: 0,
                        borderRadius: 0,
                        backgroundColor: "transparent",
                        width: "100%",
                      }}
                    ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto max-w-full md:px-[40px] xl:px-[80px] 2xl:px-[100px] bg-[color:var(--Livsee-champagne)] pt-[15px] pb-[15px]">
        <p className="text-[14px] text-[#7a755f] leading-none text-center md:text-left">
          Copyright © 2025 Livsee®
        </p>
        <div className="flex gap-2 text-right justify-center md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
          <Link
            href="/privacy_policy"
            className="text-(--Livsee-emerald) hover:text-black text-[14px] leading-none"
          >
            Privacy
          </Link>
          <span className="text-(--Livsee-emerald) leading-none">|</span>
          <Link
            href="/terms_and_conditions"
            className="text-(--Livsee-emerald) hover:text-black text-[14px] leading-none"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
