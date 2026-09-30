"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PNHK1XBGGS"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PNHK1XBGGS');
        `}
      </Script> */}
      {<p>some ga4 and ad's script</p>}
    </>
  );
}