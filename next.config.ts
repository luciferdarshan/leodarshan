import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optimize images and clean output
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 14400,
  },
};

const withMDX = createMDX({
  // Optionally add remark/rehype plugins here
});

export default withMDX(nextConfig);
