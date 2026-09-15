import { Brand } from "@/components/brand/logo";
import { navLinks } from "@/lib/site-config";

export function SiteHeader() {
	return (
		<header className="site">
			<div className="nav">
				<Brand href="/#top" />
				<nav className="links" aria-label="Menu principal">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={link.hideMobile ? "hide-mobile" : undefined}
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
