import Head from 'next/head';

export default function HeadPrefetch() {
  console.log("prefetching..");
  return (
    <Head>
      {/* SERVICES */}
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fservices%2Fgroup-discussion.webp&w=828&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fservices%2Fpersonal-mentor.png&w=1080&q=75" as="image" />
      {/* ICONS */}
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Ficons%2Fhamburger.png&w=64&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fuplift.png&w=1080&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Farrow.png&w=828&q=75" as="image" />

      {/* COURSES */}
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fcourses%2Fspoken-english.png&w=828&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fcourses%2Fdata-science.webp&w=828&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fcourses%2Freact.png&w=828&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fcourses%2Fdigital-marketing.png&w=828&q=75" as="image" />
      {/* CONTACT */}
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fcontact-us%2Fmap.png&w=96&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fcontact-us%2Fcall.png&w=96&q=75" as="image" />
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fcontact-us%2Fmail.png&w=96&q=75" as="image" />
      
      <link rel="prefetch" href="https://uplift-staging.netlify.app/_next/image?url=%2Fabout.jpeg&w=1080&q=75" as="image" />
    </Head>
  );
}
