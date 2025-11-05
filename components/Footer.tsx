import Image from "next/image";
import Link from "next/link";
import LivSeeLogoMarkRGB from "@/public/images/logo/Livsee-Logomark-RGB_champagne.svg";
export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-full px-5 md:px-[40px] xl:px-[100px] 2xl:px-[100px] text-(--Livsee-champagne) pt-[40] pb-[40] bg-(--Livsee-emerald) text-white py-8 px-4">
        <div className="">
          <Image
            src={LivSeeLogoMarkRGB.src}
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
                  href="#"
                  className="group inline-flex text-(--Livsee-champagne) hover:text-white"
                  aria-label="Mail"
                >
                  info@livsee.com
                </Link>
              </p>

              <div className="mt-[20px] md:mt-[30px] 2xl:mt-[34px]  flex items-center gap-3">
                <Link
                  href="#"
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
                  href="#"
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
          </div>

          <div className="w-full left-0">
            <div className="w-[280px] sm:max-w-md sm:ml-auto sm:w-[395px] md:w-[365px]">
              <h5 className="font-serif mt-[10px] md:mt-[30px] 2xl:mt-[36px] text-[24px] md:text-[22px] 2xl:text-[24px] leading-[1.2]">
                The Livsee Newsletter
              </h5>
              <p className="mb-[12px] md:mb-[15px] xl:mb-[15px] 2xl:mb-[15px] mt-[10px] md:mt-[20px] xl:mt-[20px] 2xl:mt-[20px] max-w-3xl text-[16px] md:text-[16px] 2xl:text-[18px] leading-[1.4]">
                Follow our journey.
              </p>
              <div className="flex items-center border bg-white rounded-full ">
                <input
                  type="email"
                  placeholder="Subscribe with your email"
                  className="h-[48px] md:h-full w-full px-5 bg-transparent text-(--Livsee-emerald) outline-none text-[14px] md:text-[16px] 2xl:text-[18px] py-3"
                />
                <button className="px-2 py-2 md:px-[13px] md:py-[13px] 2xl:px-[15px] 2xl:py-[15px] bg-(--Livsee-emerald) text-white rounded-full hover:bg-[#507360] hover:text-(--Livsee-champagne) m-[4px] cursor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12l-7 -7M16 12l-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto max-w-full md:px-[40px] xl:px-[100px] 2xl:px-[100px] bg-[color:var(--Livsee-champagne)] pt-[15px] pb-[15px]">
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
