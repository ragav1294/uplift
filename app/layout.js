'use client';
import { useState, useEffect } from 'react';
import './globals.css';
import Head from 'next/head';
import HeadPrefetch from '@/components/Prefetch/prefetch';
import Loader from '@/components/Loader/Loader';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>UPLIFTEDU- Uplift your education career with us</title>
        <meta name="description" content="Uplift your education career with our empowering education services. Discover courses crafted to propel you towards greatness." />
        <link rel="icon" href="/favicon.ico" />
        <HeadPrefetch />
      </Head>
      <body>{isLoading ? <Loader /> : children}</body>
    </html>
  );
}
