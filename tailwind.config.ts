import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#21302d",
        muted: "#65726f",
        sage: "#6f9b8b",
        "sage-dark": "#3f6f61",
        mint: "#e8f3ef",
        coral: "#ec806d",
        "coral-dark": "#ca5d4e",
        cream: "#fffaf1",
        paper: "#ffffff",
        line: "#dce7e2",
      },
      boxShadow: {
        soft: "0 20px 55px rgba(33, 48, 45, 0.12)",
        coral: "0 12px 28px rgba(236, 128, 109, 0.28)",
      },
      fontFamily: {
        sans: [
          "Microsoft YaHei",
          "PingFang SC",
          "Noto Sans SC",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
