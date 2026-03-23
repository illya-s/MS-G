import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Меланин Илья - Full-Stack Developer (Django + Next.js)",
  description = "Портфолио Full-Stack Developer с опытом в Django, PostgreSQL, React, Next.js. Специализируюсь на архитектуре полнофункциональных веб-приложений.",
  image = "/og-image.png",
  url = "https://illya-s.github.io/MS-G/",
  type = "website",
}: SEOProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Меланин Илья" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ru_RU" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="keywords" content="Full-Stack Developer, Django, React, Next.js, PostgreSQL, API, TypeScript, Portfolio" />
      <meta name="theme-color" content="#191F25" />
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* Preload fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Меланин Илья",
            url: url,
            image: image,
            jobTitle: "Full-Stack Developer",
            description: description,
            sameAs: [
              "https://github.com/illya-s",
              "https://linkedin.com/in/ilya-melanin",
            ],
            knowsAbout: [
              "Django",
              "Python",
              "PostgreSQL",
              "React",
              "Next.js",
              "TypeScript",
              "API Development",
              "Web Architecture",
            ],
          }),
        }}
      />
    </Head>
  );
}
