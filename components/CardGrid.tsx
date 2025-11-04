import { useState } from "react";
import Image from "next/image";

interface Article {
  title: string;
  description: string;
  videoUrl: string;
  timeToRead: string;
  author: string;
  coverImage: string;
}

const CardGrid: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Track which dropdown is open

  const articles: Article[] = [
    {
      title: "A Year in Review: Building Livsee™",
      description:
        "When we incorporated Livsee™ in September 2024, I knew we were embarking on an ambitious journey.",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/Test.jpg",
    },
    {
      title: "Women to Watch in PropTech: Andrea Michele Taylor",
      description:
        "Livsee™ Founder & CEO, Andrea Michele Taylor, was featured on the Women to Watch in Proptech ",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/test2.png",
    },
    {
      title: "Meet Livsee™",
      description:
        "Livsee™ listens, learns, and responds to renter preferences—like a seasoned professional. By integrating with your data, we can",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/test3.png",
    },
    {
      title: "Livsee Selected for Investment by Michigan Rise",
      description:
        "Livsee™ is proud to be among seven innovative startups selected for investment by the Michigan",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/maxres.jpg",
    },
    {
      title: "A Year in Review: Building Livsee™",
      description:
        "When we incorporated Livsee™ in September 2024, I knew we were embarking on an ambitious journey.",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/Test.jpg",
    },
    {
      title: "Women to Watch in PropTech: Andrea Michele Taylor",
      description:
        "Livsee™ Founder & CEO, Andrea Michele Taylor, was featured on the Women to Watch in Proptech ",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/test2.png",
    },
    {
      title: "Meet Livsee™",
      description:
        "Livsee™ listens, learns, and responds to renter preferences—like a seasoned professional. By integrating with your data, we can",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/test3.png",
    },
    {
      title: "Livsee Selected for Investment by Michigan Rise",
      description:
        "Livsee™ is proud to be among seven innovative startups selected for investment by the Michigan",
      videoUrl: "/path/to/video1",
      timeToRead: "1 min read",
      author: "Colby Chilcote",
      coverImage: "images/maxres.jpg",
    },
  ];

  // Toggle dropdown visibility for specific article
  const handleDropdownToggle = (index: number): void => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-[20px]">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden border border-(--Livse-peach) relative"
        >
          {/* Main Article Image */}
          <div className="relative w-full h-64">
            <Image
              src={article.coverImage}
              alt="Cover Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
              priority
            />
          </div>

          {/* Author Info Section */}
          <div className="flex items-center p-[25px] pb-0">
            {/* Author Initial as Avatar */}
            <div className="flex-shrink-0 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              {article.author.split(" ")[0][0]}
            </div>

            {/* Author Name and Time to Read */}
            <div className="ml-2">
              <p className="text-[12px] text-gray-500 font-medium">
                {article.author}
              </p>
              <p className="text-[12px] text-gray-400">{article.timeToRead}</p>
            </div>

            {/* Three dots for more options */}
            <div
              onClick={() => handleDropdownToggle(index)}
              className="ml-auto cursor-pointer text-gray-500 hover:text-gray-700 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                viewBox="0 0 19 19"
                aria-hidden="true"
                className="blog-post-homepage-description-fill blog-post-homepage-link-hashtag-hover-fill"
              >
                <path d="M2.44398805,5.99973295 C1.62345525,5.9690612 0.980075653,5.28418875 1.00047182,4.46312144 C1.02086799,3.64205413 1.69745853,2.98998831 2.51850166,3.0001164 C3.33954478,3.01024449 3.99985313,3.67880182 4,4.50012255 C3.98424812,5.34399206 3.28763905,6.0153508 2.44398805,5.99973295 L2.44398805,5.99973295 Z M2.44398805,10.9997329 C1.62345525,10.9690612 0.980075653,10.2841888 1.00047182,9.46312144 C1.02086799,8.64205413 1.69745853,7.98998831 2.51850166,8.0001164 C3.33954478,8.01024449 3.99985313,8.67880182 4,9.50012255 C3.98424812,10.3439921 3.28763905,11.0153508 2.44398805,10.9997329 L2.44398805,10.9997329 Z M2.44398805,15.9997329 C1.62345525,15.9690612 0.980075653,15.2841888 1.00047182,14.4631214 C1.02086799,13.6420541 1.69745853,12.9899883 2.51850166,13.0001164 C3.33954478,13.0102445 3.99985313,13.6788018 4,14.5001225 C3.98424812,15.3439921 3.28763905,16.0153508 2.44398805,15.9997329 L2.44398805,15.9997329 Z"></path>
              </svg>

              {/* Dropdown Menu */}
              {openDropdown === index && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                  <button
                    onClick={() => alert("Share post clicked!")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Share Post
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-[25px]">
            <h3 className="text-[22px] font-semibold text-black mb-2 leading-[1.2] line-clamp-3">
              {article.title}
            </h3>
            <p className="text-[16px] text-gray-600 leading-[1.4] line-clamp-3">
              {article.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
