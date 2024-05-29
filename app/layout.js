import "./globals.css";
import Head from 'next/head';
import Script from 'next/script'; 

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
        <Script
          src="https://app.netlify.com/js/api/v1/forms.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
