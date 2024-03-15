import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const dms = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
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
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Monda&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <html lang='en'>
        <body
          className={`${dms.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
