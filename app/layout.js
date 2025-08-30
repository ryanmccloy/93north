import { Montserrat, Poppins, Bebas_Neue } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "@/app/_styles/globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import SeoStructuredData from "./_components/header/SeoStructuredData";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const mont = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose weights you plan to use
  display: "swap",
});

export const metadata = {
  title: "93 North Studio – Web Design, Development & Marketing",
  description:
    "Custom web design, development, and digital marketing for businesses.",
  openGraph: {
    title: "93 North Studio – Web Design, Development & Marketing",
    description:
      "Custom web design, development, and digital marketing for businesses.",
    url: "https://93northstudio.com",
    siteName: "93 North Studio",
    images: [
      {
        url: "/images/landing/hero.webp",
        width: 1200,
        height: 630,
        alt: "93 North Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${mont.variable} font-sans antialiased`}
    >
      <body className="body-styles">
        <SeoStructuredData />
        <Header />
        <Toaster position="bottom-center" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
