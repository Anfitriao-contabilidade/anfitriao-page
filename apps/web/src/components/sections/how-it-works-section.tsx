import { howItWorks } from "@/lib/site-config";

export function HowItWorksSection() {
	return (
		<section id="como-funciona">
			<div className="wrap how-grid">
				<div>
					<p className="eyebrow">Enquadramento correto</p>
					<h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginTop: 8 }}>
						O que muda quando a contabilidade entende de hospedagem.
					</h2>
					<div className="how-list">
						{howItWorks.map((item) => (
							<div className="how-item" key={item.title}>
								<span className="mark">→</span>
								<div>
									<h4>{item.title}</h4>
									<p>{item.body}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="how-card">
					<p className="eyebrow">Compromisso</p>
					<h3>
						Empresa regularizada, pagando o mínimo de imposto dentro do que a
						lei permite.
					</h3>
					<p>
						Não é sobre pagar menos do que se deve — é sobre nunca pagar a mais.
						Essa é a diferença entre uma contabilidade genérica e uma que
						conhece o seu setor. Já contabilizamos uma economia de impostos de
					</p>
					<span className="quote-num">R$50.800,20</span>
					<p style={{ marginTop: 2 }}>
						E isso se chama PLANEJAMENTO TRIBUTÁRIO.
					</p>
				</div>
			</div>
		</section>
	);
}
