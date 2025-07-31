import { Roboto } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

export const rob = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
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
    <html lang="en" className={`${rob.variable} font-sans antialiased`}>
      <body className="body-styles">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
