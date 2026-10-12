import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import "../index.css";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
	variable: "--font-fraunces",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
	variable: "--font-ibm-plex-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: "--font-ibm-plex-mono",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.shortName}`,
	},
	description: siteConfig.description,
	keywords: [
		"contabilidade",
		"Airbnb",
		"locação por temporada",
		"gestão de imóveis",
		"NFS-e",
		"abertura de CNPJ",
		"João Pessoa",
		"Anfitrião",
	],
	authors: [{ name: siteConfig.name }],
	creator: siteConfig.name,
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.name,
		description: siteConfig.description,
		images: [
			{
				url: "/images/hero.jpg",
				width: 880,
				height: 1100,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: ["/images/hero.jpg"],
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/images/logo.pnhyjg",
		shortcut: "/images/logo.png",
	},
	alternates: {
		canonical: "/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
			suppressHydrationWarning
		>
			<body>
				<a href="#top" className="skip-link">
					Pular para o conteúdo
				</a>
				{children}
			</body>
		</html>
	);
}
