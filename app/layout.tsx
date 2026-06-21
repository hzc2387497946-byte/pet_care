import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖爪宠物洗护 | 专业宠物洗澡美容护理",
  description:
    "暖爪提供犬猫洗澡、美容修剪、皮毛护理和基础健康观察，预约制接待，让每一次洗护都更安心。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
