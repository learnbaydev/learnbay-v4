// import "./globals.css";
import { Raleway } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className} style={{margin:"0"}}>{children}</body>
      <GoogleTagManager gtmId="GTM-NN8XWH8" />
    </html>
  );
}
