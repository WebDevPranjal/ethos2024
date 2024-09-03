import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethos 2024 - Solve Real-World Problems",
  description:
    "Join Ethos 2024 and collaborate with minds across India to solve real-world problems. Work on challenges presented by the government of Assam and make a difference in the North East.",
  keywords:
    "Ethos 2024, problem-solving, Assam, India, real-world challenges, North East",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
