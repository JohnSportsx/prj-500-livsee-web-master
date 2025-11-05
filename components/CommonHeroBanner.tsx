"use client";
interface HeroBannerProps {
  title: string;
  subtitle: string;
}
export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
       <section
          className={`
            relative isolate overflow-hidden
            min-h-[300px] md:min-h-[400px] h-[300px]
            bg-(--Livsee-emerald)                          
            bg-[url('${
            process.env.NEXT_PUBLIC_NODE_ENV == "dev"
              ? "/"
              : process.env.NEXT_PUBLIC_BASE_PATH + "/"
          }images/hero/hero-secondary.jpg')]       
            bg-no-repeat bg-center bg-cover                   
            before:content-[''] before:absolute before:inset-0
            before:pointer-events-none
            before:bg-[linear-gradient(90deg,var(--Livsee-emerald)_0%,rgba(54,90,70,0)_18%,rgba(54,90,70,0)_82%,var(--Livsee-emerald)_100%)]
            border-b-[6px] xl:border-b-[8px] border-(--Livse-peach)
          `}
        >
      {/* Green overlay */}

      <div className="relative mx-auto max-w-full px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:px-[100px] text-(--Livsee-champagne)">
        <div className="grid grid-cols-1 md:grid-cols-1">
          {/* Text content */}
          <div className="pt-[148px] md:pt-[180px] xl:pt-[190px] 2xl:pt-[200px]">
            <h1 className="font-dm-serif leading-[1.2] font-500 text-xl md:text-[54px] 2xl:text-[64px]">
              {title}
            </h1>
            <div className="mt-[15px] md:mt-[20px] h-1 w-[50px] bg-[var(--Livse-peach)]" /></div>
            <p className="mt-[20px] md:mt-[30px] 2xl:mt-[30px] w-full md:w-[100%] text-[20px] md:text-[24px] 2xl:text-[28px] leading-[1.4]">
                {subtitle}
            </p>
        </div>
      </div>

    </section>
  );
}
