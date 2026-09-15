import Image from "next/image";

import { WhatsAppIcon } from "@/components/brand/icons";
import { heroProof, siteConfig } from "@/lib/site-config";

export function HeroSection() {
	return (
		<section className="hero">
			<div className="wrap">
				<div className="hero-grid">
					<div className="hero-photo">
						<Image
							src="/images/hero.jpg"
							alt="Anfitrião Gestão e Contabilidade"
							width={880}
							height={1100}
							priority
							sizes="(max-width: 560px) 340px, 360px"
						/>
					</div>
					<div className="hero-copy">
						<p className="eyebrow">Contabilidade para locação por temporada</p>
						<h1>
							Gestão + Contabilidade que cabem no seu <em>bolso</em>. Tudo em um
							só lugar.
						</h1>
						<p className="lede">
							Do primeiro clique na reserva à vistoria final de limpeza —
							gerenciamos seu imóvel de temporada com dedicação e clareza
							absoluta.
						</p>
						<p className="lede">
							Enquadramento correto para você pagar menos imposto, mensalidade
							fixa sem surpresa e a reforma tributária resolvida por quem
							entende do seu negócio de hospedagem.
						</p>
						<div className="hero-cta">
							<a href="#planos" className="btn btn-primary">
								Ver planos e valores
							</a>
							<a href="#como-funciona" className="btn btn-ghost">
								Como funciona
							</a>
							<a
								href={siteConfig.whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-whatsapp"
							>
								<WhatsAppIcon />
								Falar no WhatsApp
							</a>
						</div>
						<div className="hero-proof">
							{heroProof.map((item) => (
								<div key={item.label}>
									{item.label}
									<strong>{item.value}</strong>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
