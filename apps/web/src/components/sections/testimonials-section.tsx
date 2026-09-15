import { InfoIcon } from "@/components/brand/icons";
import { testimonials } from "@/lib/site-config";

export function TestimonialsSection() {
	return (
		<section>
			<div className="wrap">
				<div className="sec-head" style={{ marginBottom: 8 }}>
					<div>
						<p className="eyebrow">Depoimentos</p>
						<h2>O que dizem sobre trabalhar com a gente.</h2>
					</div>
				</div>
				<span className="testi-note">
					<InfoIcon />
					Depoimentos ilustrativos, escritos para mostrar a experiência esperada
					— em breve, substituídos pelas histórias reais dos nossos clientes.
				</span>
				<div className="testi-grid">
					{testimonials.map((item) => (
						<div className="testi" key={item.name}>
							<div className="stars">★★★★★</div>
							<p className="quote">&quot;{item.quote}&quot;</p>
							<div className="who">
								<div className="avatar">{item.initials}</div>
								<div>
									<div className="name">{item.name}</div>
									<div className="role">{item.role}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
