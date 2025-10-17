import type { Metadata } from "next";
import "./globals.css";
import { lato, rubik, saira } from "@/font";
import QueryProvider from "@/provider/QueryProvider";


export const metadata: Metadata = {
  title: "Mohibullah Mohim | Full Stack Developer",
  description: "Im Mohibullah Mohim, a MERN Stack Developer...",
  keywords: [
    "Mohibullah Mohim",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio Mohib",
    "Web Development",
    "Developer Mohib",
  ],
  authors: [{ name: "Mohibullah Mohim" }],
  creator: "Mohibullah Mohim",
  metadataBase: new URL("https://mohibullahmohim.com"),
  openGraph: {
    title: "Mohibullah Mohim | Full Stack Developer",
    description: "Portfolio of Mohibullah Mohim...",
    url: "https://mohibullahmohim.com",
    siteName: "Mohibullah Mohim Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760256217/Mohibullah-Mohim-favicon_xmnxku.jpg",
        width: 1200,
        height: 630,
        alt: "Mohibullah Mohim Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760256217/Mohibullah-Mohim-favicon_xmnxku.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${lato.variable} ${rubik.variable} ${saira.variable} antialiased`}
      >
        <QueryProvider>
          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
