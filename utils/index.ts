export function getImageUrl(relativePath: string): string {
  const trimmedPath = relativePath.startsWith("/")
    ? relativePath.substring(1)
    : relativePath;

  return `/${trimmedPath}`;
}


export const ARUL_LINKEDIN = process.env.ARUL_LINKEDIN! 
export const ANDREA_LINKEDIN = process.env.ANDREA_LINKEDIN!
export const ANDREA_MAIL= process.env.ANDREA_MAIL!
export const ARUL_MAIL= process.env.ARUL_MAIL!
export const NEWS_URL = process.env.NEWS_URL!
export const BLOG_URL = process.env.BLOG_URL!