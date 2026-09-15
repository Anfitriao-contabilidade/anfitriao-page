import { WhatsAppIcon } from "@/components/brand/icons";
import { siteConfig } from "@/lib/site-config";

export function ContactCtaSection() {
	return (
		<section id="contato">
			<div className="wrap">
				<div className="cta-final">
					<p className="eyebrow" style={{ color: "var(--gold)" }}>
						Vamos conversar
					</p>
					<h2>
						Sua contabilidade pode ser simples, acessível e feita para
						hospedagem.
					</h2>
					<p>
						Fale com a gente e descubra o plano certo para o seu número de
						imóveis.
					</p>
					<div className="hero-cta">
						<a
							href={siteConfig.whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-whatsapp"
						>
							<WhatsAppIcon />
							Falar no WhatsApp
						</a>
						<a href="#planos" className="btn btn-ghost">
							Ver planos novamente
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
