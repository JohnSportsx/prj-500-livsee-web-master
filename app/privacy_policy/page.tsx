import CommonHeroBanner from "@/components/CommonHeroBanner";
import termsData from "@/privacy_policy.json"; // Assuming your data file is named privacy_policy.json
import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Type Definitions (Re-declared for context, as they were provided in the prompt) ---
export interface SubSubSection {
  type: "SubSubSection";
  title: string;
  content: string;
  media_url?: string;
  media_alt_text?: string;
}

export interface SubSectionData {
  type: "SubSection" | "Definition" | "ListSection";
  title: string;
  content: string | null;
  list_items?: string[] | null;
  media_url?: string;
  media_alt_text?: string;
  sub_sub_sections: SubSubSection[] | null;
}

export interface DocumentSection {
  type: "Section";
  title: string;
  content: string | null;
  sub_sections: SubSectionData[];
}

const policyData: DocumentSection[] = termsData as DocumentSection[];

// --- Helper Component: Handles multi-paragraph text ---
const ContentRenderer = ({ content }: { content: string | null }) => {
  if (!content) return null;

  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const paragraphs = content.split("\n").map((paragraphText, pIndex) => {
    const parts = paragraphText.split(urlRegex);

    const paragraphContent = parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <Link
            key={index}
            href={part}
            target="_blank" // Open in new tab for external links
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-400" // Tailwind classes for link styling
          >
            {part}
          </Link>
        );
      }
      // Otherwise, it's just regular text
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });

    return (
      // Use a paragraph tag for each line, which correctly handles large blocks of text
      <p key={pIndex} className="mb-[10px] last:mb-0 text-justify">
        {paragraphContent}
      </p>
    );
  });

  return <>{paragraphs}</>;
};


// --- Helper Component: Renders an Image if media_url is present ---
const MediaRenderer = ({ url, alt }: { url?: string; alt?: string }) => {
  if (!url) return null;

  // Determine if the URL is from a static/local source (optional, but good practice)
  const isExternal = url.startsWith("http");

  return (
    // Use a div to constrain the image size, useful for large remote images
    <div className="my-[20px] max-w-full mx-auto" style={{ maxWidth: "600px" }}>
      <Image
        src={url}
        alt={alt || "Policy-related image"}
        layout="responsive"
        width={700}
        height={850}
        unoptimized={isExternal}
        className="w-full h-auto rounded-lg shadow-md"
      />
      {alt && (
        <p className="text-sm text-gray-500 mt-2 italic text-center">{alt}</p>
      )}
    </div>
  );
};

// --- Helper Component: Renders a Bulleted/Unordered List ---
const ListRenderer = ({ items }: { items?: string[] | null }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className="list-disc ml-[20px] my-[10px] space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <ContentRenderer content={item} />
        </li>
      ))}
    </ul>
  );
};

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
  list_items,
  media_url,
  media_alt_text,
  children,
}: SubSectionData & { children: React.ReactNode }) => {

  return (
    <div className="mb-[20px]">
      <h3 className="text-[18px] md:text-[22px] 2xl:text-[24px] font-semibold mb-[15px]">
        {/* Render title with potential underline applied */}
        <span>{title}</span>
      </h3>
      <div className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4]">
        {/* 1. Render the main content (paragraphs) */}
        <ContentRenderer content={content} />

        {/* 2. Render any image */}
        <MediaRenderer url={media_url} alt={media_alt_text} />

        {/* 3. Render any bulleted list items */}
        <ListRenderer items={list_items} />

        {/* 4. Render nested children (SubSubSections) */}
        {children}
      </div>
    </div>
  );
};

const SubSubSection = (
  {
    title,
    content,
    list_items,
    media_url,
    media_alt_text,
  }: SubSubSection & { list_items?: string[] | null } // <- ADDED list_items to props interface
) => (
  <div className="mb-[15px] pl-5">
    {" "}
    {/* Added left padding for visual nesting */}
    <h4 className="text-[16px] md:text-[20px] 2xl:text-[22px] font-medium mb-[12px]">
      {title}
    </h4>
    <div className="text-[14px] md:text-[16px] 2xl:text-[18px] leading-[1.4]">
      {/* Render content */}
      <ContentRenderer content={content} />

      {/* Render list items at SubSubSection level */}
      <ListRenderer items={list_items} />

      {/* Render any image at the sub-sub-section level */}
      <MediaRenderer url={media_url} alt={media_alt_text} />
    </div>
  </div>
);

// --- Main Component ---

export default function PrivacyPolicy() {
  return (
    <>
      <CommonHeroBanner
        title="Privacy Policy"
        subtitle="Livsee’s Privacy Policy"
      />

      <section className="text-[var(--color-light-text)]">
        <div className="mx-auto pt-[50px] md:pt-[80px] pb-[30px] md:pb-[60px] px-5 md:px-10 lg:px-10 xl:px-[100px] 2xl:md:px-0">
          <div className="text-center max-w-full 2xl:max-w-[1204px] mx-auto">
            <h2 className="font-serif text-[24px] md:text-[40px] 2xl:text-[47px] leading-[1.2] text-center mb-[30px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[50px]">
              Privacy Policy
            </h2>
            <div className="text-left">
              <p className="text-[16px] md:text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px]">
                Last Updated: March 24, 2025
              </p>
              <div>
                {/* Main Mapping Logic: Map through the top-level DocumentSection array */}
                {policyData.map((section, sectionIndex) => (
                  <Section key={sectionIndex} title={section.title}>
                    {/* Render the optional main Section content if it exists (e.g., section 1 intro) */}
                    <div className="text-[18px] 2xl:text-[20px] leading-[1.4] mb-[20px]">
                      <ContentRenderer content={section.content} />
                    </div>

                    {/* Map through the SubSection array inside the Section */}
                    {section.sub_sections &&
                      section.sub_sections.map(
                        (subSection, subSectionIndex) => (
                          <SubSection
                            key={subSectionIndex}
                            // Pass all properties of SubSectionData
                            {...subSection}
                          >
                            {/* If sub_sub_sections exist, map and render them as children */}
                            {subSection.sub_sub_sections &&
                              subSection.sub_sub_sections.map(
                                (subSubSection, subSubSectionIndex) => (
                                  <SubSubSection
                                    key={subSubSectionIndex}
                                    // Pass all properties of SubSubSection
                                    {...subSubSection}
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
