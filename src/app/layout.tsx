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
      <body className={`${poppins.variable} bg-gray-50 text-gray-900`}>
        <header>
          <nav style={{ backgroundColor: "#f8f9fa", padding: "10px 20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ margin: 0, fontSize: "24px" }}>Himalayan Bazar</h1>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "20px",
                  margin: 0,
                }}
              >
                <li>
                  <a
                    href="/"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2023 Himalayan Bazar. All rights reserved.
          </p>
          <p style={{ margin: 0 }}>
            <a
              href="/privacy-policy"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="/terms-of-service"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Terms of Service
            </a>{" "}
            |{" "}
            <a
              href="/contact"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Contact Us
            </a>
          </p>
          <p style={{ margin: 0 }}>
            Follow us on{" "}
            <a
              href="https://www.facebook.com/himalayanbazar"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Facebook
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/himalayanbazar"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://www.twitter.com/himalayanbazar"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/company/himalayanbazar"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </p>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
