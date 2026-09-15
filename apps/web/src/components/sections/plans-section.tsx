import { CheckIcon } from "@/components/brand/icons";
import { plans } from "@/lib/site-config";

export function PlansSection() {
	return (
		<section
			id="planos"
			style={{
				background: "var(--sky)",
				borderTop: "1px solid var(--line)",
				borderBottom: "1px solid var(--line)",
			}}
		>
			<div className="wrap">
				<div className="sec-head">
					<div>
						<p className="eyebrow">
							Contabilidade com mensalidade fixa, sem porcentagem
						</p>
						<h2>Planos que crescem junto com seus imóveis.</h2>
					</div>
					<p>
						Sem cobrança sobre o quanto você fatura na gestão — só um valor fixo
						mensal, previsível todo mês.
					</p>
				</div>
				<div className="plans-grid">
					{plans.map((plan) => (
						<div
							className={plan.featured ? "plan featured" : "plan"}
							key={plan.name}
						>
							{plan.featured ? (
								<span className="ribbon">Mais escolhido</span>
							) : null}
							<span className="plan-tier">{plan.tier}</span>
							<h3>{plan.name}</h3>
							<p className="desc">{plan.desc}</p>
							<div className="price-row">
								<span className="was">{plan.was}</span>
								<div className="now">
									<span className="amt mono">{plan.price}</span>
									<span className="per">/mês</span>
								</div>
							</div>
							<ul>
								{plan.features.map((feature) => (
									<li key={feature}>
										<CheckIcon size={15} />
										{feature}
									</li>
								))}
							</ul>
							<p className="cap">{plan.cap}</p>
							<a
								href="#contato"
								className={plan.featured ? "btn btn-primary" : "btn btn-ghost"}
							>
								{plan.cta}
							</a>
						</div>
					))}
				</div>
				<p className="plans-note">
					Precisa de mais? Fale com a gente sobre planos sob medida para
					operações maiores. · Escritório virtual disponível como adicional,
					R$50/mês.
				</p>
			</div>
		</section>
	);
}
