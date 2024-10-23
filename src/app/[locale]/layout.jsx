import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

import "./../globals.css";


export async function generateMetadata({params: {locale}}) {

    return {
        title: locale === "en" ? "Fixawi" : "فيكساوي",
        description: locale === "en" ? "Fixawi is a private company focused on simplifying car maintenance for owners. We ensure vehicles are kept in excellent condition, offering convenient and flexible services in terms of time and location at competitive prices." : "فيكساوي هي شركة خاصة تركز على تبسيط صيانة السيارات لأصحابها. نحن نضمن أن تبقى السيارات في حالة ممتازة، ونقدم خدمات مريحة ومرنة من حيث الوقت والموقع بأسعار تنافسية.",
        locale,
        siteName: locale === "en" ? "Fixawi" : "فيكساوي",
        icon: "/favicon.ico",
    }
}


export default async function LocaleLayout({children, params: {locale}}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <body>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
