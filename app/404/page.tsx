import CommonHeroBanner from "@/components/CommonHeroBanner";
import Link from "next/link";

export default function Error() {
  return (
    <>
    <CommonHeroBanner 
    title="404"
    subtitle="This page isn’t available."
    />
   <section className="text-[var(--color-light-text)] min-h-[300px] md:min-h-[500px]">
      <div className="mx-auto pt-[60] md:pt-[80] pb-[40] md:pb-[40] px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:md:px-0">
        <div className="text-center max-w-full 2xl:max-w-[1204px] mx-auto">
          <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center mb-[30px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[50px]">
            Error: Page Not Found
          </h2>
          <div className="text-center">
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">
                Return to <Link href="/" className="underline underline-offset-5">Home Page </Link>
                </p>
            </div>
        </div>
      </div>
    </section>
  </>
  );
}
