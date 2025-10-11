import Script from 'next/script';

export default function GoogleAdSense() {
    const isProduction = process.env.NODE_ENV === "production";

    if (!isProduction) {
        return null;
    }

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
        />
    );
}



