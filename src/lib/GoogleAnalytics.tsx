import Script from "next/script";

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  // production 환경에서만 Google Analytics 실행
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js
				?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '${gaId}');
		`,
        }}
      />
    </>
  );
}
