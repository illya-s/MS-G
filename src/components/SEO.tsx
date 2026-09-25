import Head from "next/head";
import { profile } from "@/config/profile";
import portrait from "@/imgs/photo1.jpg";

export default function SEO() {
  const title = `${profile.name} — ${profile.role}`;
  const description = "От архитектуры до интерфейса. Django, React, Next.js: веб-приложения, медиаплатформы и интеграции API.";
  const image = profile.siteUrl ? new URL(portrait.src, profile.siteUrl).href : portrait.src;
  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={profile.name} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#111310" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
    <meta property="og:locale" content="ru_RU" />
    <meta name="twitter:card" content="summary_large_image" />
    {profile.siteUrl && <meta property="og:url" content={profile.siteUrl} />}
    {profile.siteUrl && <link rel="canonical" href={profile.siteUrl} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "Person", name: profile.name,
      jobTitle: profile.role, url: profile.siteUrl || undefined, image,
      sameAs: profile.github ? [profile.github] : [],
    }).replace(/</g, "\\u003c") }} />
  </Head>;
}
