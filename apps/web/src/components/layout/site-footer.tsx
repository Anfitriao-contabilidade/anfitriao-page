import { Brand } from "@/components/brand/logo";
import { footerNavLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="wrap">
				<div className="foot-grid">
					<div>
						<Brand href="/#top" logoSize={26} />
						<p
							style={{
								color: "var(--ink-soft)",
								fontSize: ".9rem",
								maxWidth: "34ch",
								marginTop: 6,
							}}
						>
							O primeiro escritório de contabilidade especializado em aluguéis
							por temporada no Nordeste.
						</p>
					</div>
					<div>
						<h5>Navegação</h5>
						<ul>
							{footerNavLinks.map((link) => (
								<li key={link.href}>
									<a href={link.href}>{link.label}</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h5>Contato &amp; registro</h5>
						<address>
							{siteConfig.contact.street}
							<br />
							{siteConfig.contact.neighborhood}, {siteConfig.contact.city} –{" "}
							{siteConfig.contact.state}
							<br />
							CEP {siteConfig.contact.postalCode}
						</address>
						<p
							className="mono"
							style={{
								color: "var(--ink-soft)",
								fontSize: ".86rem",
								marginTop: 10,
							}}
						>
							{siteConfig.crc}
						</p>
					</div>
				</div>
				<div className="foot-bottom">
					<p>
						© {year} {siteConfig.name}.
					</p>
					<p>Feito para quem hospeda e cuida do seu negócio.</p>
				</div>
			</div>
		</footer>
	);
}
