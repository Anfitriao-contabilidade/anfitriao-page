import { faqs } from "@/lib/site-config";

export function FaqSection() {
	return (
		<section
			id="faq"
			style={{
				background: "var(--sky)",
				borderTop: "1px solid var(--line)",
				borderBottom: "1px solid var(--line)",
			}}
		>
			<div className="wrap">
				<div
					className="sec-head"
					style={{
						justifyContent: "center",
						textAlign: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<p className="eyebrow">Perguntas frequentes</p>
					<h2>Tudo o que você precisa saber antes de começar.</h2>
				</div>
				<div className="faq">
					{faqs.map((faq, index) => (
						<details key={faq.question} open={index === 0}>
							<summary>
								{faq.question}
								<span className="plus">+</span>
							</summary>
							<p>{faq.answer}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
