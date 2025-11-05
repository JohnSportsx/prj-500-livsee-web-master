import CommonHeroBanner from "@/components/CommonHeroBanner";
import termsData from "@/terms_and_conditions.json";
import React from "react";

// The types are correctly defined in your original component, but I'll redefine them here
// for completeness and consistency within this response's code block.
export interface SubSubSection {
  type: "SubSubSection";
  title: string;
  content: string;
}

export interface SubSectionData {
  type: "SubSection" | "Definition";
  title: string;
  content: string | null;
  sub_sub_sections: SubSubSection[] | null;
}

export interface DocumentSection {
  type: "Section";
  title: string;
  content: string | null;
  sub_sections: SubSectionData[];
}

// Assert the shape of the imported data
const terms: DocumentSection[] = termsData as DocumentSection[];

/**
 * Helper component to render content, preserving line breaks for paragraphs (e.g., in disclaimers).
 */
const ContentRenderer = ({ content }: { content: string | null }) => {
  if (!content) return null;

  // Split content by newline characters and map each part to a paragraph or div
  const paragraphs = content.split('\n').map((text, index) => (
    // Use a <p> tag for general content, which provides better semantic structure
    <p key={index} className="mb-[10px] last:mb-0 text-justify">
      {text}
    </p>
  ));

  return <>{paragraphs}</>;
};


export default function TermsAndConditions() {
  // --- Component Definitions ---

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="mb-[40px]">
      <h2 className="text-[20px] md:text-[28px] 2xl:text-[32px] font-bold mb-[20px]">
        {title}
      </h2>
      {children}
    </div>
  );

  const SubSection = ({
    title,
    content,
    children, // Added children to allow rendering nested elements (SubSubSections)
  }: {
    title: string;
    content: string | null; // Now accepts string or null
    children: React.ReactNode;
  }) => (
    <div className="mb-[20px]">
      <h3 className="text-[18px] md:text-[22px] 2xl:text-[24px] font-semibold mb-[15px]">
        {title}
      </h3>
      <div className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
        {/* Render content first, if present */}
        <ContentRenderer content={content} />
        {/* Render nested children (SubSubSections) if present */}
        {children}
      </div>
    </div>
  );

  const SubSubSection = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => (
    <div className="mb-[15px] pl-5"> {/* Added left padding for visual nesting */}
      <h4 className="text-[16px] md:text-[20px] 2xl:text-[22px] font-medium mb-[12px]">
        {title}
      </h4>
      <div className="text-[14px] md:text-[16px] 2xl:text-[18px] leading-[1.4]">
        <ContentRenderer content={content} />
      </div>
    </div>
  );

  // --- Main Render Function ---

  return (
    <>
      <CommonHeroBanner
        title="Terms &amp; Conditions"
        subtitle="Livsee’s Terms &amp; Conditions"
      />

      <section className="text-[var(--color-light-text)]">
        <div className="mx-auto pt-[50px] md:pt-[80px] pb-[30px] md:pb-[60px] px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:md:px-0">
          <div className="text-center max-w-full 2xl:max-w-[1204px] mx-auto">
            <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center mb-[30px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[50px]">
              Terms &amp; Conditions
            </h2>
            <div className="text-left">
              <p className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px]">
                Last Updated: March 24, 2025
              </p>
              <div>
                {/* Map through the main Section array */}
                {terms.map((section, sectionIndex) => (
                  <Section key={sectionIndex} title={section.title}>
                    {/* Map through the SubSection array inside the Section */}
                    {section.sub_sections &&
                      section.sub_sections.map(
                        (subSection, subSectionIndex) => (
                          <SubSection
                            key={subSectionIndex}
                            title={subSection.title}
                            content={subSection.content}
                          >
                            {/* If sub_sub_sections exist, render them as children */}
                            {subSection.sub_sub_sections &&
                              subSection.sub_sub_sections.map(
                                (subSubSection, subSubSectionIndex) => (
                                  <SubSubSection
                                    key={subSubSectionIndex}
                                    title={subSubSection.title}
                                    content={subSubSection.content}
                                  />
                                )
                              )}
                          </SubSection>
                        )
                      )}
                  </Section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}