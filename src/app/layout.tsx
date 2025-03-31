import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himalayan Bazar - Nepal's Leading Multi-Vendor Marketplace",
  description:
    "Shop online in Nepal at Himalayan Bazar. A fast and affordable multi-vendor marketplace offering a wide range of products at reasonable prices.",
  keywords:
    "Himalayan Bazar, online shopping Nepal, multi-vendor marketplace Nepal, buy online Nepal, affordable products Nepal, eCommerce Nepal",
  authors: [
    { name: "Himalayan Bazar Team", url: "https://himalayanbazar.com" },
  ],
  applicationName: "Himalayan Bazar",
  generator: "Next.js 15",
  metadataBase: new URL("https://himalayanbazar.com"),
  openGraph: {
    title: "Himalayan Bazar - Nepal's Leading Multi-Vendor Marketplace",
    description:
      "Shop online in Nepal at Himalayan Bazar. A fast and affordable multi-vendor marketplace offering a wide range of products at reasonable prices.",
    url: "https://himalayanbazar.com",
    siteName: "Himalayan Bazar",
    images: [
      {
        url: "https://himalayanbazar.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan Bazar - Shop Online in Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalayan Bazar - Nepal's Leading Multi-Vendor Marketplace",
    description:
      "Shop online in Nepal at Himalayan Bazar. A fast and affordable multi-vendor marketplace offering a wide range of products at reasonable prices.",
    images: ["https://himalayanbazar.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
