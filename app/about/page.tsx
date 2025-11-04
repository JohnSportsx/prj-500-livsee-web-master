import CommonHeroBanner from "@/components/CommonHeroBanner";
import TeamMembers from "@/components/TeamMembers";

export default function AboutPage() {
  return (
    <>
    <CommonHeroBanner 
    title="About Us"
    subtitle="Livsee Mission, Values, and Team."
    />
    <section className="text-[var(--color-light-text)]">
      <div className="mx-auto pt-[50px] md:pt-[80px] pb-[0] px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:md:px-0">
        <div className="text-center max-w-full 2xl:max-w-[1204px] mx-auto">
          <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center mb-[30px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[50px]">
            Who We Are
          </h2>
          <div className="text-left ">
            <div className="">
              <h3 className="font-serif text-[20px] md:text-[30px] lg:text-[37px] pb-[15px] md:pb-[20px] leading-none">Our Mission</h3>
              <div className="h-1 w-[50px] bg-[var(--Livse-peach)]"></div>
              <p className="mt-[15px] md:mt-[30px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] pb-[15px] md:pb-[30px]">Our mission is to increase occupancy in the most competitive markets by leveraging advanced AI and deep industry knowledge to connect with more prospective renters and deliver strategic incentives based on real-time insights.</p>

              <h3 className="font-serif text-[20px] md:text-[30px] lg:text-[37px] pb-[15px] md:pb-[20px] leading-none ">Our Values</h3>
              <div className="h-1 w-[50px] bg-[var(--Livse-peach)] mb-[15px] md:mb-[30px]"></div>
              
                <h4 className="font-serif text-[18px] md:text-[26px] leading-[1.2] ">Innovation with Purpose</h4>
                <p className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mt-[5px] pb-[15px] md:pb-[30px]">We relentlessly pursue new ways to apply technology and data, always focused on delivering real, measurable value for apartment communities.</p>
             
                <h4 className="font-serif text-[18px] md:text-[26px] leading-[1.2]">Operational Insight and Integration</h4>
                <p className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mt-[5px] pb-[15px] md:pb-[30px]">We draw on our firsthand experience as former owner-operators to design solutions that not only fit seamlessly into existing technology stacks, but also enhance the day-to-day operational efficiency of every property.</p>
             
                <h4 className="font-serif text-[18px] md:text-[26px] leading-[1.2]">Partnership and Support</h4>
                <p className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mt-[5px] pb-[0px] md:pb-[30px]">We are dedicated to being a true partner for apartment owners and site teams, taking on the heavy lifting so they can focus on
                  what matters most - building thriving communities and delivering exceptional resident experiences.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <TeamMembers />
  </>
  );
}
