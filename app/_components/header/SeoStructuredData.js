"use client";
import Script from "next/script";

export default function SeoStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "93 North Studio",
    url: "https://93northstudio.com",
    email: "contact@93northstudio.com",
    logo: "https://93northstudio.com/icon.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Northern Ireland",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.linkedin.com/company/93-north-studio",
      "https://www.instagram.com/93northstudio",
      "https://www.facebook.com/profile.php?id=61579598112820",
    ],
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
