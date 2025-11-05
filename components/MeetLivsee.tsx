import Image from "next/image";
import MeetMobile1 from "@/public/images/MeetLivSee/Meet_mobile1.png";
import MeetMobile2 from "@/public/images/MeetLivSee/Meet_mobile2.png";
import AIChat from "@/public/images/MeetLivSee/AI-Chat.png";
import LiveData from "@/public/images/MeetLivSee/Live-data.png"
import Deep from "@/public/images/MeetLivSee/deep.png"
import Comprehensive from "@/public/images/MeetLivSee/Comprehensive.png";
export default function MeetLivsee() {
  return (
    <section
      className="text-(--color-light-text) border-b-[6px] xl:border-b-[8px] border-(--Livse-peach)"
      id="meet_livsee"
    >
      <div className="mx-auto pt-[50px] lg:pt-[80px] pb-[30px] md:pb-[47px] px-5 md:px-0">
        <div className="text-center max-w-full md:max-w-[90%] lg:max-w-[100%] xl:max-w-[65%] 2xl:max-w-[55%]  mx-auto">
          <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2]">
            Meet Livsee: Agentic AI for Multifamily Leasing
          </h2>
          <p className="mt-[9px] text-[16px] md:text-[20px] 2xl:text-[23px] px-0 md:px-[70px] leading-[1.4]">
            Livsee is the next generation of agentic AI, purpose-built for
            multifamily. It connects first-party prospect data with real-time
            pricing workflows—empowering properties to close more leases,
            faster, and with unmatched precision.
          </p>
          <p className="text-[16px] md:text-[20px] 2xl:text-[23px] px-0 md:px-[70px] font-semibold">
            Let’s go beyond the conversation.
          </p>
        </div>
      </div>

      <div className="block xl:hidden pb-[30px]">
        <div className="grid grid-cols-2 gap-4 xl:flex xl:justify-center xl:items-center xl:gap-8">
          {/* First image */}
          <div className="relative overflow-hidden xl:w-[50%]">
            <Image
              src={MeetMobile1.src}
              alt="Mobile preview"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              sizes="(min-width:1280px) 50vw, 50vw"
            />
          </div>

          {/* Second image */}
          <div className="relative overflow-hidden xl:w-[50%]">
            <Image
              src={MeetMobile2.src}
              alt="Dashboard preview"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              sizes="(min-width:1280px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-fill pb-[50px] lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] gap-[15px] lg:gap-[0px] items-center">
          <div className="hidden xl:block">
            <div className="relative w-[635px] md:w-[500px] 2xl:w-[635px] aspect-[635/500]">
              <Image
                src={MeetMobile1.src}
                alt="AI Chat Demo"
                fill
                className="object-contain"
                sizes="(min-width:1536px) 635px, (min-width:1280px) 500px, 100vw"
                priority
              />
            </div>
          </div>

          <div className="space-y-8 pr-5 md:pr-[20px] lg:pr-[40px] xl:pr-[100px] 2xl:pr-[200px] pl-5 md:pl-[20px] lg:pl-[40px]">
            <div className="flex gap-5 md:gap-[30px]">
              <div className="shrink-0">
                <div className="relative w-[60px] md:w-[90px] 2xl:w-[125px] h-auto">
                  <Image
                    src={AIChat.src}
                    alt="Chat Icon"
                    width={125}
                    height={125}
                    className="w-[60px] md:w-[90px] 2xl:w-[125px] h-auto object-contain"
                    sizes="(min-width:1536px) 125px, (min-width:768px) 90px, 60px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-[20px] md:text-[28px]  2xl:text-[30px] leading-[1.2]">
                  AI Chat That Understands and Converts
                </h3>
                <p className="mt-2 text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
                  Livsee’s chat is engineered exclusively for multifamily. It
                  does more than just answer questions—it engages prospects in
                  natural, intuitive conversations, learning their preferences,
                  budget, and urgency right from the first interaction. Every
                  chat automatically builds your first-party dataset, capturing
                  unique details that generic solutions miss. Livsee not only
                  has multi-lingual support, but matches tone as well for a
                  unique and thoughtful renter experience.
                </p>
              </div>
            </div>

            <div className="flex gap-5 md:gap-[30px]">
              <div className="shrink-0">
                <div className="relative w-[60px] md:w-[90px] 2xl:w-[125px] h-auto">
                  <Image
                    src={LiveData.src}
                    alt="Data Icon"
                    width={125}
                    height={125}
                    className="w-[60px] md:w-[90px] 2xl:w-[125px] h-auto object-contain"
                    sizes="(min-width:1536px) 125px, (min-width:768px) 90px, 60px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-[20px] md:text-[28px]  2xl:text-[30px] leading-[1.2]">
                  Live Data Portal for Pricing and Deal Flow
                </h3>
                <p className=" mt-2 text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
                  The Livsee portal pulls in first-party lead and market data to
                  drive pricing decisions dynamically as new information
                  arrives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-[30px] lg:mt-[60px] grid grid-cols-1 lg:grid-cols-[auto_auto] gap-[15px] lg:gap-[30px] items-center">
          <div className="space-y-8 pr-5 lg:pr-0 2xl:pr-0 lg:pl-[40px] xl:pl-[100px] 2xl:pl-[200px] pl-5">
            <div className="flex gap-5 md:gap-[30px]">
              <div className="shrink-0">
                <div className="relative w-[60px] md:w-[90px] 2xl:w-[125px] h-auto">
                  <Image
                    src={Deep.src}
                    alt="Insights Icon"
                    width={125}
                    height={125}
                    className="w-[60px] md:w-[90px] 2xl:w-[125px] h-auto object-contain"
                    sizes="(min-width:1536px) 125px, (min-width:768px) 90px, 60px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-[20px] md:text-[28px]  2xl:text-[30px] leading-[1.2]">
                  Deep Performance Reporting &amp; Actionable Insights
                </h3>
                <p className=" mt-2 text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
                  Livsee’s in-depth reporting translates every chat, decision,
                  and leasing action into actionable insights on conversion
                  rates, campaign impact, and operational benchmarks.
                  Multifamily owner/operators get detailed visibility into which
                  strategies drive results, which amenities matter, and where
                  pricing can be fine-tuned. Livsee equips property leaders to
                  make smarter decisions—far beyond what other bots or basic
                  virtual assistants offer.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-5 md:gap-[30px]">
              <div className="shrink-0">
                <div className="relative w-[60px] md:w-[90px] 2xl:w-[125px] h-auto">
                  <Image
                    src={Comprehensive.src}
                    alt="Communication Icon"
                    width={125}
                    height={125}
                    className="w-[60px] md:w-[90px] 2xl:w-[125px] h-auto object-contain"
                    sizes="(min-width:1536px) 125px, (min-width:768px) 90px, 60px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-[20px] md:text-[28px]  2xl:text-[30px] leading-[1.2]">
                  Comprehensive Leasing &amp; Resident Communication
                </h3>
                <p className=" mt-2 text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
                  Livsee doesn’t stop at lease signing: the platform manages
                  renewals, resident check-ins, real-time policy changes, and
                  incentive opportunities automatically—all tailored to a
                  property’s goals and compliance needs, not just basic
                  follow-up.
                </p>
                <p className=" mt-2 text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
                  Livsee is the only multifamily platform that combines smart
                  chat, real-time operational control, and deep, property-first
                  analytics for true revenue leadership in leasing.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden xl:block">
            <div className="relative w-[635px] md:w-[500px] 2xl:w-[635px] aspect-[635/500]">
              <Image
                src={MeetMobile2.src}
                alt="Dashboard Insights"
                fill
                className="object-contain"
                sizes="(min-width:1536px) 635px, (min-width:1280px) 500px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
