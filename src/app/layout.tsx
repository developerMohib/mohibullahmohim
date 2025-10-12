import type { Metadata } from "next";
import { Lato, Rubik, Saira } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mohibullah Mohim | Full Stack Developer",
  description:
    "I’m Mohibullah Mohim, a MERN Stack Developer passionate about building modern, scalable, and user-friendly web applications. Explore my portfolio to see projects in Next.js, Express.js, MongoDB, and more.",
  keywords: [
    "Mohibullah Mohim",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio Mohib",
    "Web Development",
    "Developer Mohib"
  ],
  authors: [{ name: "Mohibullah Mohim" }],
  creator: "Mohibullah Mohim",
  metadataBase: new URL("https://mohibullahmohim.com"), // replace with your live domain
  openGraph: {
    title: "Mohibullah Mohim | Full Stack Developer",
    description:
      "Portfolio of Mohibullah Mohim, a MERN Stack Developer specializing in building scalable web applications with Next.js, React, Node.js, and MongoDB.",
    url: "https://mohibullahmohim.com",
    siteName: "Mohibullah Mohim Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760256217/Mohibullah-Mohim-favicon_xmnxku.jpg", // place in /public folder
        width: 1200,
        height: 630,
        alt: "Mohibullah Mohim Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760256217/Mohibullah-Mohim-favicon_xmnxku.jpg", // place favicon.ico inside /public
  },
};

export const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

// Lato (sans-serif)
export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"], // choose weights you need
  display: "swap",
});

// Rubik (sans-serif)
export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "700"], // choose weights you need
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${lato.variable} ${rubik.variable} ${saira.variable} antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
