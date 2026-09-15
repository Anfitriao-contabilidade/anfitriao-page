import Image from "next/image";

import { aboutStats, siteConfig } from "@/lib/site-config";

export function AboutSection() {
	return (
		<section id="quem-somos">
			<div className="wrap about-grid">
				<div className="about-photo">
					<div className="about-photo-frame">
						<Image
							src="/images/jorgesson.png"
							alt="Jorgesson Trevisan, sócio-fundador da Anfitrião"
							width={440}
							height={550}
							sizes="220px"
						/>
						<span className="tag">{siteConfig.crc}</span>
					</div>
					<p className="about-name">
						<strong>Jorgesson Trevisan</strong>
						<span>Sócio-fundador</span>
					</p>
				</div>
				<div className="about-copy">
					<p className="eyebrow">Quem somos</p>
					<h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginTop: 8 }}>
						Um contador que fala a língua do seu mercado.
					</h2>
					<p className="lede">
						Há 12 anos atuo como contador — nos últimos anos, especializado em
						mercado digital: infoprodutos, e-commerce e aluguéis por temporada.
					</p>
					<p>
						&quot;O mercado de aluguéis por temporada vem crescendo rápido e
						pede um olhar muito mais estratégico do que a contabilidade
						tradicional costuma oferecer. Vejo muitos anfitriões perdendo
						dinheiro ou correndo riscos por falta de orientação especializada.
						Foi por isso que criei a Anfitrião: não apenas para gerar guias de
						impostos, mas para ser um parceiro que protege seu patrimônio e
						maximiza seus lucros. É uma estrutura pensada especificamente para
						quem vive de hospedagem, cuidando da saúde do seu negócio com a
						mesma dedicação, clareza e cuidado que eu exijo para o meu.&quot;
					</p>
					<div className="about-stats">
						{aboutStats.map((stat) => (
							<div key={stat.value}>
								<strong>{stat.value}</strong>
								{stat.label}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
