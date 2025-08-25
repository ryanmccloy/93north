import { Montserrat, Poppins, Bebas_Neue } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "@/app/_styles/globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pop = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const mont = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose weights you plan to use
  display: "swap",
});

export const metadata = {
  title: "93 North Studio",
  description: "Full service online digital agency",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${pop.variable} ${mont.variable} font-sans antialiased`}
    >
      <body className="body-styles">
        <Header />
        <Toaster position="bottom-center" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
