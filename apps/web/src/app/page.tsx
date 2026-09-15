import { OrganizationJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactCtaSection } from "@/components/sections/contact-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ManagementSection } from "@/components/sections/management-section";
import { PlansSection } from "@/components/sections/plans-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
	return (
		<>
			<OrganizationJsonLd />
			<SiteHeader />
			<main id="top">
				<HeroSection />
				<TrustBar />
				<AboutSection />
				<BenefitsSection />
				<PlansSection />
				<ManagementSection />
				<HowItWorksSection />
				<TestimonialsSection />
				<FaqSection />
				<ContactCtaSection />
			</main>
			<SiteFooter />
		</>
	);
}
