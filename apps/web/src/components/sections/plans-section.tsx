import { CheckIcon } from "@/components/brand/icons";
import { env } from "@anfitriao/env/web";
import { plans } from "@/lib/site-config";

type PlanoApi = {
	id: string;
	nivel: string;
	titulo: string;
	descricao: string;
	mais_escolhido: boolean;
	tag_oferta: string | null;
	preco_oficial: string;
	preco_atual: string;
	beneficios: string[];
	faturamento: string;
	botao: string;
};

type Vitrine = {
	eyebrow: string;
	titulo: string;
	subtitulo: string;
	nota: string;
	planos: PlanoApi[];
};

type Cartao = {
	key: string;
	tier: string;
	name: string;
	desc: string;
	was: string;
	price: string;
	features: readonly string[];
	cap: string;
	cta: string;
	featured: boolean;
};

const FALLBACK = {
	eyebrow: "Contabilidade com mensalidade fixa, sem porcentagem",
	titulo: "Planos que crescem junto com seus imóveis.",
	subtitulo:
		"Sem cobrança sobre o quanto você fatura na gestão — só um valor fixo mensal, previsível todo mês.",
	nota: "Precisa de mais? Fale com a gente sobre planos sob medida para operações maiores. · Escritório virtual disponível como adicional, R$50/mês.",
	planos: plans.map((plan) => ({
		key: plan.name,
		tier: plan.tier,
		name: plan.name,
		desc: plan.desc,
		was: plan.was,
		price: plan.price,
		features: plan.features,
		cap: plan.cap,
		cta: plan.cta,
		featured: plan.featured,
	})),
};

function reais(valor: string) {
	const n = Number(valor);
	if (!Number.isFinite(n)) return valor;
	const inteiro = Math.abs(n - Math.round(n)) < 0.001;
	return n.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: inteiro ? 0 : 2,
		maximumFractionDigits: inteiro ? 0 : 2,
	});
}

async function carregar(): Promise<{
	eyebrow: string;
	titulo: string;
	subtitulo: string;
	nota: string;
	planos: Cartao[];
} | null> {
	const base = env.API_URL?.replace(/\/$/, "");
	if (!base) return null;
	try {
		const res = await fetch(`${base}/planos/vitrine`, { next: { revalidate: 60 } });
		if (!res.ok) return null;
		const dados = (await res.json()) as Vitrine;
		if (!dados.planos?.length) return null;
		return {
			eyebrow: dados.eyebrow,
			titulo: dados.titulo,
			subtitulo: dados.subtitulo,
			nota: dados.nota,
			planos: dados.planos.map((plano) => ({
				key: plano.id,
				tier: plano.nivel,
				name: plano.titulo,
				desc: plano.descricao,
				was: [plano.tag_oferta, reais(plano.preco_oficial)].filter(Boolean).join(" "),
				price: reais(plano.preco_atual),
				features: plano.beneficios,
				cap: plano.faturamento,
				cta: plano.botao,
				featured: plano.mais_escolhido,
			})),
		};
	} catch {
		return null;
	}
}

export async function PlansSection() {
	const vitrine = (await carregar()) ?? FALLBACK;
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
						<p className="eyebrow">{vitrine.eyebrow}</p>
						<h2>{vitrine.titulo}</h2>
					</div>
					<p>{vitrine.subtitulo}</p>
				</div>
				<div className="plans-grid">
					{vitrine.planos.map((plan) => (
						<div className={plan.featured ? "plan featured" : "plan"} key={plan.key}>
							{plan.featured ? <span className="ribbon">Mais escolhido</span> : null}
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
							<a href="#contato" className={plan.featured ? "btn btn-primary" : "btn btn-ghost"}>
								{plan.cta}
							</a>
						</div>
					))}
				</div>
				<p className="plans-note">{vitrine.nota}</p>
			</div>
		</section>
	);
}
