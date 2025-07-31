import { Roboto, Poppins } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

export const rob = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

const pop = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "93 North Studios",
  description: "Full service online digital agency",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rob.variable} ${pop.variable} font-sans antialiased`}
    >
      <body className="body-styles">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
