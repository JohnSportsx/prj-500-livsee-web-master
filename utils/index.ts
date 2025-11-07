export function getImageUrl(relativePath: string): string {
  const trimmedPath = relativePath.startsWith("/")
    ? relativePath.substring(1)
    : relativePath;

  return `/${trimmedPath}`;
}


export const ARUL_LINKEDIN = process.env.ARUL_LINKEDIN ||  "https://www.linkedin.com/in/aselvan/"
export const ANDREA_LINKEDIN = process.env.ANDREA_LINKEDIN || "https://www.linkedin.com/in/andreamhumanic/"
export const ANDREA_MAIL= process.env.ANDREA_MAIL || "andrea@livsee.com"
export const ARUL_MAIL= process.env.ARUL_MAIL || "arul@livsee.com"
export const NEWS_URL = process.env.NEWS_URL || "https://news.livsee.com"
export const BLOG_URL = process.env.BLOG_URL || "https://blog.livsee.com"
export const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "info@livsee.com"
export const LOGIN_URL = process.env.LOGIN_URL || "https://portal.livsee.com/sign-in"
export const BOOK_DEMO=process.env.BOOK_DEMO || "https://calendly.com/jacob-livsee/30min"
export const INSTAGRAM=process.env.INSTAGRAM || "https://www.instagram.com/livsee.ai"
export const LINKDIN=process.env.LINKDIN || "https://www.linkedin.com/company/livsee1/"
export const NEWSLETTER=process.env.NEWSLETTER ||"https://embeds.beehiiv.com/f0e5913d-5804-4bcb-9429-bbe2c744603e?slim=true"