import CommonHeroBanner from "@/components/CommonHeroBanner";

export default function Faq() {
  return (
    <>
    <CommonHeroBanner 
    title="FAQ"
    subtitle="Get answers to your questions."
    />
    <section className="text-[var(--color-light-text)]">
      <div className="mx-auto pt-[60] md:pt-[80] pb-[40] md:pb-[40] px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:md:px-0">
        <div className="text-center max-w-full 2xl:max-w-[1204px] mx-auto">
          <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center mb-[30px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[50px]">
            Frequently Asked Questions
          </h2>
          <div className="text-left">
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">What is Livsee?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Livsee is an agentic AI platform designed just for multifamily leasing. It integrates first-party data with real-time pricing, workflows, and full-cycle automation—helping properties close more leases, faster, with unprecedented precision.</p>
            
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">How does Livsee’s AI chat improve leasing?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Livsee’s chat was built from scratch for multifamily—not adapted from another vertical. It engages prospects in natural, multi-lingual conversations (with tone matching), instantly capturing preferences, budget, urgency, and building a first-party dataset for smarter follow-up. Every prospect gets a thoughtful, personalized experience—no robotic responses or missed leads.</p>
           
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">How does Livsee help with pricing decisions?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Livsee’s data-powered portal blends first-party lead details and real-time market data, facilitating adjustments instantly. </p>
            
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">What kind of reporting does Livsee provide?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Livsee’s data-powered portal blends first-party lead details and real-time market data, facilitating adjustments instantly. </p>
            
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">What makes Livsee different from other leasing bots or assistants?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Livsee is agentic AI, not just a chatbot or scripted response system. It supports the entire renter journey—lead nurturing, deal closing, renewals, resident communication, and compliance—automated, deeply integrated, and driven by live portfolio data for real revenue results.</p>
            
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">Does Livsee support multi-lingual conversations?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Yes. Livsee chat adapts language and tone to each prospect, creating a more inclusive and effective experience, and capturing every detail operators need to convert more leases with your brand in mind.</p>
           
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">Is Livsee easy to integrate with my current tools?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Absolutely. Livsee was engineered to integrate directly with leading property management such as Yardi and Rentcafe, CRM, and marketing platforms so your data flows seamlessly and every process runs smoothly.</p>
           
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">Who is Livsee for?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Livsee was built for multifamily owners, REITs, owner-operators, and site teams who need smarter leasing, better data, and fewer headaches—from new development lease-ups to ongoing resident retention.</p>
           
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">How does Livsee handle compliance and fee transparency?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Livsee includes built-in automated fee transparency tools to keep properties compliant and renters informed. Its data-driven workflows mean specials and pricing always align with compliance rules and corporate guidelines.</p>
            
              <h3 className="font-serif text-[18px] md:text-[26px] leading-[1.2] md:text-[30px]">How do I see Livsee in action?</h3>
              <p className="mt-[9px] text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px] md:mb-[40] ">Book a personalized demo—see how agentic AI, live data, and next-gen analytics can transform your leasing ops.</p>
            </div>
        </div>
      </div>
    </section>
  </>
  );
}
