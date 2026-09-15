import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "AccountingService",
		name: siteConfig.name,
		url: siteConfig.url,
		description: siteConfig.description,
		image: `${siteConfig.url}/images/logo.png`,
		address: {
			"@type": "PostalAddress",
			streetAddress: siteConfig.contact.street,
			addressLocality: siteConfig.contact.city,
			addressRegion: siteConfig.contact.state,
			postalCode: siteConfig.contact.postalCode,
			addressCountry: "BR",
		},
		areaServed: "BR",
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline script
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
