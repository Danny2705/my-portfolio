import { Inter, DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dms" });
const pop = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-pop",
});

export const metadata = {
  title: "Danny | Portfolio",
  description: "This is my porfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />

        {/* Add individual font links for Poppins, DM Sans, and Inter */}
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <html lang='en'>
        <body
          className={`${pop.variable} ${dmsans.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
