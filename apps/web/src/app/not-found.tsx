import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function NotFound() {
	return (
		<>
			<SiteHeader />
			<main className="not-found">
				<p className="eyebrow">404</p>
				<h1>Página não encontrada</h1>
				<p>
					O conteúdo que você procura não existe ou não está mais disponível.
				</p>
				<div className="hero-cta">
					<Link href="/" className="btn btn-primary">
						Ir para a home
					</Link>
					<Link href="/#contato" className="btn btn-ghost">
						Falar com a Anfitrião
					</Link>
				</div>
			</main>
			<SiteFooter />
		</>
	);
}
