import { useTranslations } from "next-intl";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import About from "@/components/About";
import HowToUse from "@/components/HowToUse";
import DropANote from "@/components/DropNote";
import Footer from "@/components/Footer";
import PartnershipCareerSection from "@/components/PartnershipCareerSection";

export default function HomePage({ params: { locale } }) {
	const t = useTranslations();
	return (
		<>
			{/* NAVBAR */}
			<Navbar
				links={[
					{
						label: "Home",  // KEY AT messages/en.json
						href: "#Hero",
						id: "Hero__Link",
					},
					{
						label: "Services", // KEY AT messages/en.json
						href: "#Services",
						id: "Services__Link",
					},
					{
						label: "About", // KEY AT messages/en.json
						href: "#About",
						id: "About__Link",
					},
					{
						label: "HowToUse", // KEY AT messages/en.json
						href: "#HowToUse",
						id: "HowToUse__Link",
					},
					{
						label: "Contact", // KEY AT messages/en.json
						href: "#DropANote",
						id: "DropANote__Link",
					},
				]}
				locale={locale}
			/>
			{/* MAIN CONTENT */}
			{/* HERO */}
			<Hero locale={locale} />

			<main>
				{/* SERVICES */}
				<Services locale={locale} />

				{/* ABOUT */}
				<About locale={locale} />

				{/* HOW TO USE */}
				<HowToUse locale={locale} />

				{/* DROP A NOTE */}
				<DropANote locale={locale} />

				{/* PARTNERS */}
				{/* <Partners /> */}
				<PartnershipCareerSection locale={locale} />

				{/* PARTNERS SECTION */}

				{/* FOOTER */}
				<Footer locale={locale} />
			</main>
		</>
	);
}
