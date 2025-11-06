"use client";
import CommonHeroBanner from "@/components/CommonHeroBanner";
import CardGrid from "@/components/CardGrid";

export default function Connect() {
  return (
    <>
      <CommonHeroBanner
        title="Connect"
        subtitle="Livsee news, updates, and more."
      />
      <section className="text-(--color-light-text)">

        <div className="mx-auto pt-[50px] lg:pt-[80px] pb-[30px] md:pb-[47px] px-5 md:px-0">
          <div className="text-center max-w-full md:max-w-[90%] lg:max-w-[100%] xl:max-w-[65%] 2xl:max-w-[55%] mx-auto">
            <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2]">
              Livsee News
            </h2>
            <p className="mt-[9px] text-[16px] md:text-[20px] 2xl:text-[23px] px-0 md:px-[70px] leading-[1.4]">
              Follow our journey as we innovate the rental market.
            </p>
          </div>
        </div>

        <div className="max-w-full 2xl:max-w-[79.74%] mx-auto pb-[50px] md:pb-[80px] px-5 md:px-10 lg:px-10 xl:px-[80px] 2xl:md:px-0">
          <CardGrid />
        </div>
      </section>
    </>
  );
}
