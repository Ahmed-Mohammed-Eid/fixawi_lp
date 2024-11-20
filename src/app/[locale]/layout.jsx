import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "react-hot-toast";

import "./../globals.css";

export async function generateMetadata({ params: { locale } }) {
	return {
		title: locale === "en" ? "Fixawi" : "فيكساوي",
		description:
			locale === "en"
				? "Fixawi is a private company focused on simplifying car maintenance for owners. We ensure vehicles are kept in excellent condition, offering convenient and flexible services in terms of time and location at competitive prices."
				: "فيكساوي هي شركة خاصة تركز على تبسيط صيانة السيارات لأصحابها. نحن نضمن أن تبقى السيارات في حالة ممتازة، ونقدم خدمات مريحة ومرنة من حيث الوقت والموقع بأسعار تنافسية.",
		locale,
		siteName: locale === "en" ? "Fixawi" : "فيكساوي",
		icon: "/favicon.ico",
	};
}

export default async function LocaleLayout({ children, params: { locale } }) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	const arabicOG = (
		<>
			<meta property="og:url" content="https://fixawi.com/ar" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="فيكساوي" />
			<meta
				property="og:description"
				content="فيكساوي هي شركة خاصة تركز على تبسيط صيانة السيارات لأصحابها. نحن نضمن أن تبقى السيارات في حالة ممتازة، ونقدم خدمات مريحة ومرنة من حيث الوقت والموقع بأسعار تنافسية."
			/>
			<meta
				property="og:image"
				content={"https://fixawi.com/og_ar.png"}
			/>

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="fixawi.com" />
			<meta property="twitter:url" content="https://fixawi.com/ar" />
			<meta name="twitter:title" content="فيكساوي" />
			<meta
				name="twitter:description"
				content="فيكساوي هي شركة خاصة تركز على تبسيط صيانة السيارات لأصحابها. نحن نضمن أن تبقى السيارات في حالة ممتازة، ونقدم خدمات مريحة ومرنة من حيث الوقت والموقع بأسعار تنافسية."
			/>
			<meta
				name="twitter:image"
				content={"https://fixawi.com/og_ar.png"}
			/>

			{/* SITENAME */}
			<meta property="og:site_name" content="فيكساوي" />
		</>
	);

	const englishOG = (
		<>
			{/* <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://fixawi.com/en" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Fixawi" />
			<meta
				property="og:description"
				content="Fixawi is a private company focused on simplifying car maintenance for owners. We ensure vehicles are kept in excellent condition, offering convenient and flexible services in terms of time and location at competitive prices."
			/>
			<meta
				property="og:image"
				content={"https://fixawi.com/og_en.png"}
			/>

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="fixawi.com" />
			<meta property="twitter:url" content="https://fixawi.com/en" />
			<meta name="twitter:title" content="Fixawi" />
			<meta
				name="twitter:description"
				content="Fixawi is a private company focused on simplifying car maintenance for owners. We ensure vehicles are kept in excellent condition, offering convenient and flexible services in terms of time and location at competitive prices."
			/>
			<meta
				name="twitter:image"
				content={"https://fixawi.com/og_en.png"}
			/>

			{/* SITENAME */}
			<meta property="og:site_name" content="Fixawi" />
		</>
	);

	return (
		<html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
			<head>
				<meta
					name="facebook-domain-verification"
					content="q2s610s795eshep0z0h2lv3foxj86t"
				/>
				{locale === "ar" ? arabicOG : englishOG}
			</head>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
					<Toaster position={"bottom-right"} />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
