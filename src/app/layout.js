
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

export const metadata = {
  title: "DAMEASY ",
  description: "DAMEASY ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Yesteryear&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
