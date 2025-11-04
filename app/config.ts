export const config = {
  isDev: process.env.NEXT_PUBLIC_NODE_ENV === "dev",
  basePath:  process.env.NEXT_PUBLIC_NODE_ENV === "dev" ? "" : process.env.NEXT_PUBLIC_BASE_PATH || "/livsee",
};