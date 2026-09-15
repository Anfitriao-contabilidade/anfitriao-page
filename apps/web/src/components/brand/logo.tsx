import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

type BrandProps = {
	href?: string;
	logoSize?: number;
};

export function Brand({ href = "/#top", logoSize = 30 }: BrandProps) {
	return (
		<Link className="brand" href={href}>
			<span className="brand-badge">
				<Image
					src="/images/logo.png"
					alt={siteConfig.name}
					width={logoSize}
					height={logoSize}
					priority
				/>
			</span>
			<span className="brand-word">
				{siteConfig.shortName}
				<small>{siteConfig.tagline}</small>
			</span>
		</Link>
	);
}
