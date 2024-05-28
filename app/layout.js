import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: "UPLIFTEDU- Uplift your education career with us", 
  description: "Uplift your education career with our empowering education services. Discover courses crafted to propel you towards greatness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
