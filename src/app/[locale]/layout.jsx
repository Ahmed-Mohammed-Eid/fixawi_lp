import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

import "./../globals.css";

export async function generateMetadata({ params: { locale } }) {
    return {
        title: locale === "en" ? "Sayyn" : "صاين",
        description:
            locale === "en"
                ? "Sayyn is a private company focused on simplifying car maintenance for owners. We ensure vehicles are kept in excellent condition, offering convenient and flexible services in terms of time and location at competitive prices."
                : "صاين هي شركة خاصة تركز على تبسيط صيانة السيارات لأصحابها. نحن نضمن أن تبقى السيارات في حالة ممتازة، ونقدم خدمات مريحة ومرنة من حيث الوقت والموقع بأسعار تنافسية.",
        locale,
        siteName: locale === "en" ? "Sayyn" : "صاين",
        icon: "/favicon.ico",
    };
}

export default async function LocaleLayout({ children, params: { locale } }) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    const arabicOG = (
        <>
            <meta property="og:url" content="https://Sayyn.net/ar" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="صاين" />
            <meta
                property="og:description"
                content="صاين هي شركة خاصة تركز على تبسيط صيانة السيارات لأصحابها. نحن نضمن أن تبقى السيارات في حالة ممتازة، ونقدم خدمات مريحة ومرنة من حيث الوقت والموقع بأسعار تنافسية."
            />
            <meta property="og:image" content={"https://sayyn.net/og_ar.png"} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="sayyn.net" />
            <meta property="twitter:url" content="https://sayyn.net/ar" />
            <meta name="twitter:title" content="صاين" />
            <meta
                name="twitter:description"
                content="صاين هي شركة خاصة تركز على تبسيط صيانة السيارات لأصحابها. نحن نضمن أن تبقى السيارات في حالة ممتازة، ونقدم خدمات مريحة ومرنة من حيث الوقت والموقع بأسعار تنافسية."
            />
            <meta
                name="twitter:image"
                content={"https://sayyn.net/og_ar.png"}
            />

            {/* SITENAME */}
            <meta property="og:site_name" content="صاين" />
        </>
    );

    const englishOG = (
        <>
            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://sayyn.net/en" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Sayyn" />
            <meta
                property="og:description"
                content="Sayyn is a private company focused on simplifying car maintenance for owners. We ensure vehicles are kept in excellent condition, offering convenient and flexible services in terms of time and location at competitive prices."
            />
            <meta property="og:image" content={"https://sayyn.net/og_en.png"} />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="sayyn.net" />
            <meta property="twitter:url" content="https://sayyn.net/en" />
            <meta name="twitter:title" content="Sayyn" />
            <meta
                name="twitter:description"
                content="Sayyn is a private company focused on simplifying car maintenance for owners. We ensure vehicles are kept in excellent condition, offering convenient and flexible services in terms of time and location at competitive prices."
            />
            <meta
                name="twitter:image"
                content={"https://sayyn.net/og_en.png"}
            />

            {/* SITENAME */}
            <meta property="og:site_name" content="Sayyn" />

            {/* FAVICON */}
            <link rel="icon" href="/favicon.ico" />
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

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-FQGNBYE48Q"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FQGNBYE48Q');
                    `}
                </Script>
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
