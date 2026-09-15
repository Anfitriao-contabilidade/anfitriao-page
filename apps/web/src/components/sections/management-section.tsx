import { CheckIcon } from "@/components/brand/icons";
import { managementServices } from "@/lib/site-config";

export function ManagementSection() {
	return (
		<section className="mgmt-section">
			<div className="wrap">
				<p className="eyebrow mgmt-eyebrow">
					Gestão com taxa fixa, porcentagem de 15% a 20%
				</p>
				<h2 className="mgmt-title">
					Você descansa.
					<br />
					<span className="soft">A gente cuida.</span>
				</h2>
				<p className="mgmt-lede">
					Conte com nossos serviços de Gestão profissional de Airbnb.
				</p>
				<p className="eyebrow mgmt-label">Nossos serviços:</p>
				<div className="mgmt-grid">
					{managementServices.map((service, index) => (
						<div
							className={index >= 4 ? "mgmt-item last-row" : "mgmt-item"}
							key={service}
						>
							<span className="mgmt-check">
								<CheckIcon size={14} stroke="currentColor" />
							</span>
							{service}
						</div>
					))}
				</div>
				<p className="mgmt-note">
					A gestão profissional de Airbnb é contratada à parte da contabilidade,
					com taxa de 15% a 20% sobre as reservas do imóvel. São dois serviços
					com contratos separados — por isso você pode contratar os dois juntos,
					contabilidade e gestão, ou apenas um deles, do jeito que fizer mais
					sentido para o seu negócio.
				</p>
			</div>
		</section>
	);
}
