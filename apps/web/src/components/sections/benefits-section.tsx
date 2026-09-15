import { benefits } from "@/lib/site-config";

export function BenefitsSection() {
	return (
		<section id="beneficios">
			<div className="wrap">
				<div className="sec-head">
					<div>
						<p className="eyebrow">Por que escolher a Anfitrião?</p>
						<h2>
							Gestão e Contabilidade pensada para quem vive de hospedagem.
						</h2>
					</div>
					<p>
						Nada de planilha genérica. Cada benefício abaixo existe porque
						imóvel de temporada tem regras próprias — e a reforma tributária
						está mudando todas elas.
					</p>
				</div>
				<div className="benefits-grid">
					{benefits.map((benefit) => (
						<div className="benefit" key={benefit.num}>
							<span className="num">{benefit.num}</span>
							<h3>{benefit.title}</h3>
							<p>{benefit.body}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
