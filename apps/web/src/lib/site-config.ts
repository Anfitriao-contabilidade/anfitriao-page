import { env } from "@anfitriao/env/web";

export const siteConfig = {
	name: "Anfitrião Gestão e Contabilidade",
	shortName: "Anfitrião",
	tagline: "Contabilidade e Gestão Inteligente",
	description:
		"O primeiro escritório de contabilidade especializado em aluguéis por temporada no Nordeste. Gestão e contabilidade com mensalidade fixa para quem vive de hospedagem.",
	url: env.NEXT_PUBLIC_SITE_URL ?? "https://anfitriaocontabilidade.com.br",
	whatsappUrl: "https://wa.me/message/ZNPYF26IE7ORH1",
	crc: "CRC/RO 010847",
	contact: {
		street: "R. Antônio Pádua Vasconcelos, 84",
		neighborhood: "Cristo Redentor",
		city: "João Pessoa",
		state: "PB",
		postalCode: "58071-400",
		location: "João Pessoa, PB",
	},
} as const;

export type NavLink = { href: string; label: string; hideMobile?: boolean };

export const navLinks: NavLink[] = [
	{ href: "/#quem-somos", label: "Quem somos" },
	{ href: "/#planos", label: "Planos" },
	{ href: "/#como-funciona", label: "Como funciona", hideMobile: true },
	{ href: "/#faq", label: "FAQ", hideMobile: true },
];

export const footerNavLinks: NavLink[] = [
	{ href: "/#beneficios", label: "Benefícios" },
	{ href: "/#quem-somos", label: "Quem somos" },
	{ href: "/#planos", label: "Planos" },
	{ href: "/#como-funciona", label: "Como funciona" },
	{ href: "/#faq", label: "FAQ" },
];

export const heroProof = [
	{ label: "mensalidade a partir de", value: "R$195" },
	{ label: "abertura de CNPJ", value: "Grátis" },
	{ label: "emissão automatizada", value: "NFS-e" },
] as const;

export const trustItems = [
	"Especialistas em locação por temporada",
	"Atendimento até às 22h",
	"Registro CRC/RO 010847",
	"Sede em João Pessoa, PB",
] as const;

export const aboutStats = [
	{ value: "12 anos", label: "de atuação como contador" },
	{ value: "3 setores", label: "atuante: infoprodutos, e-commerce e Airbnb" },
	{ value: "1 olhar", label: "estratégico, fora do modelo tradicional" },
] as const;

export const benefits = [
	{
		num: "01",
		title: "Menos imposto, do jeito certo",
		body: "Enquadramento tributário correto para o seu CNAE, para você pagar só o que realmente deve — nem mais, nem menos.",
	},
	{
		num: "02",
		title: "Reforma tributária sem dor de cabeça",
		body: "Acompanhamos o impacto da CBS e IBS e das novas regras que impactam seu negócio, para você não precisar se preocupar com isso.",
	},
	{
		num: "03",
		title: "Abertura de empresa grátis",
		body: "Contratando um plano, cuidamos de todo o processo de abertura do seu CNPJ — sem custo adicional.",
	},
	{
		num: "04",
		title: "NFS-e automatizada",
		body: "Emissão de nota fiscal de serviço automatizada, direto na plataforma — sem planilha, sem esquecimento.",
	},
] as const;

export const plans = [
	{
		tier: "Nível 01",
		name: "Básico",
		desc: "PF ou MEI, até 3 imóveis. Sem fidelidade.",
		was: "De R$280",
		price: "R$195",
		features: [
			"Contabilidade completa",
			"Abertura de CNPJ grátis",
			"Você emite notas e paga impostos na plataforma",
		],
		cap: "Faturamento ideal até R$81.000/ano",
		cta: "Escolher Básico",
		featured: false,
	},
	{
		tier: "Nível 02",
		name: "Padrão",
		desc: "PJ, até 4 imóveis — 12 meses de fidelidade.",
		was: "De R$450",
		price: "R$395",
		features: [
			"Tudo do plano Básico",
			"1º Certificado digital gratuito",
			"Folha de pagamento sob consulta",
		],
		cap: "Faturamento ideal até R$360.000/ano",
		cta: "Escolher Padrão",
		featured: true,
	},
	{
		tier: "Nível 03",
		name: "Experts Essencial",
		desc: "Atendimento dedicado, sem complicação. 12 meses de fidelidade.",
		was: "De R$515",
		price: "R$495",
		features: [
			"1º Certificado digital gratuito",
			"Nós emitimos suas notas — você fica despreocupado",
			"Assessor e analista dedicados",
			"Folha de pagamento inclusa",
		],
		cap: "Faturamento ideal acima de R$360.000/ano",
		cta: "Escolher Experts",
		featured: false,
	},
] as const;

export const managementServices = [
	"Precificação dinâmica baseada em dados",
	"Anúncios profissionais e otimizados",
	"Limpeza e manutenção sem você se envolver",
	"Verificação de hóspedes antes do check-in",
	"Supervisão como segunda camada de gestão de manutenção da acomodação",
	"Relatórios mensais detalhados",
] as const;

export const howItWorks = [
	{
		title: "CNAE certo desde o início",
		body: "Sua empresa é estruturada com os códigos de atividade corretos para locação por temporada — a base de todo o resto.",
	},
	{
		title: "Relatórios que fazem a diferença na gestão",
		body: "Levamos cada informação a sério e com clareza, para o cálculo de imposto ser sempre justo — e para sempre ajudar você na tomada de decisões.",
	},
	{
		title: "Pronto para a reforma tributária",
		body: "Acompanhamos o impacto da CBS e IBS no seu negócio à medida que a reforma avança, sem que você precise entender de lei.",
	},
	{
		title: "Proposta sempre transparente",
		body: "Nada de letra miúda: toda proposta é clara sobre o que está incluso, com contrato para dar segurança aos dois lados.",
	},
] as const;

export const testimonials = [
	{
		quote:
			"Simplificou completamente a parte fiscal do meu imóvel de temporada. Hoje sei exatamente quanto pago de imposto e por quê.",
		initials: "MC",
		name: "Marina Costa",
		role: "Anfitriã em João Pessoa",
	},
	{
		quote:
			"Finalmente uma contabilidade que entende o setor de locação por temporada. Atendimento rápido e sem burocracia.",
		initials: "RA",
		name: "Rodrigo Almeida",
		role: "Proprietário de 3 imóveis",
	},
	{
		quote:
			"Abri minha empresa sem sair de casa e comecei a emitir notas certinho, sem dor de cabeça com a reforma tributária.",
		initials: "JS",
		name: "Juliana Siqueira",
		role: "Anfitriã e cliente Padrão",
	},
] as const;

export const faqs = [
	{
		question: "Quanto custa o serviço de contabilidade da Anfitrião?",
		answer:
			"Nossos planos começam em R$195/mês (Básico). Em média, contadores cobram entre R$300 e R$600/mês para prestadores de serviço — comércios podem chegar a R$1.000. A Anfitrião oferece planos acessíveis a partir de R$195.",
	},
	{
		question: "Eu realmente preciso de um contador?",
		answer:
			"Sim. Exceto o MEI, toda empresa precisa de um contador registrado no CRC para responder por sua contabilidade perante o governo — impostos, balanços, folha de pagamento. Além da obrigatoriedade legal, o contador garante que você pague só os impostos realmente devidos.",
	},
	{
		question: "O que é abertura sem sair de casa?",
		answer:
			"É a nossa modalidade em que todo o processo de abertura da sua empresa é feito pela Anfitrião, do início ao fim, sem que você precise sair de casa em nenhuma etapa.",
	},
	{
		question: "Quais taxas do governo eu pago ao abrir uma empresa?",
		answer:
			"A DARE, paga na Junta Comercial, pode chegar a R$650. O alvará, de responsabilidade da prefeitura, pode ultrapassar R$3.000 — o valor varia conforme localização, porte e atividade da empresa.",
	},
	{
		question: "Quanto custa o serviço de folha de pagamento?",
		answer:
			"Está incluso no plano Experts Essencial. No plano Padrão, é cobrado à parte. No plano Básico, esse serviço não está incluído.",
	},
	{
		question: "O que é certificado digital e ele é obrigatório?",
		answer:
			"É uma ferramenta que permite assinar documentos e fazer transações online com validade jurídica. É obrigatório para a emissão de notas fiscais eletrônicas — por isso já vem incluso nos planos Padrão e Experts.",
	},
	{
		question: "Quais documentos preciso para abrir uma empresa?",
		answer:
			"RG, CPF, comprovante de endereço, certidão de casamento (se for casado) e IPTU ou documento com a inscrição municipal do imóvel-sede. Se houver sócios, cada um apresenta os mesmos documentos.",
	},
] as const;
