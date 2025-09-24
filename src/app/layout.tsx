import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";
import Provider from "./Provider";
const jost = Jost({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Pavithram Travels- Explore south of Kerala with Us",
  description:
    "Discover unforgettable travel experiences with Pavithram Travels. We specialize in creating memorable journeys tailored to your preferences. Explore south of Kerala hassle-free with our expertly crafted itineraries and personalized services"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
