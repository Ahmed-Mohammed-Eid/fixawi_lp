import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import classes from "./careersPage.module.css";
// IMAGE IMPORTS
import logoImage from "../../../assets/Layer_1@2x_black.svg";
import appMockup from "../../../assets/Mobile_driver.png";
import qrCodeAndroid from "../../../assets/qrcode_play.google.com_winch.png";
import qrCodeIOS from "../../../assets/qrcode_apps.apple.com_winch.png";
import playStore from "../../../assets/play-store.png";
import appStore from "../../../assets/app-store.png";

import FixedNavbar from "@/components/Shared/FixedNavbar";

const metadataByLocale = {
    ar: {
        title: "تحميل تطبيق السائقين - خدمة الونش والإنقاذ",
        description:
            "حمّل تطبيق السائقين الآن واحصل على طلبات الونش والإنقاذ مباشرة على هاتفك. متوفر على أندرويد و iOS مجاناً",
        keywords:
            "تطبيق السائقين, ونش, إنقاذ, سيارات, تطبيق موبايل, أندرويد, iOS",
        openGraph: {
            title: "تحميل تطبيق السائقين - خدمة الونش والإنقاذ",
            description:
                "حمّل تطبيق السائقين الآن واحصل على طلبات الونش والإنقاذ مباشرة على هاتفك",
            type: "website",
            locale: "ar_SA",
        },
        alternates: {
            canonical: "https://sayyn.net/ar/careers",
            languages: {
                "ar-SA": "https://sayyn.net/ar/careers",
                "en-US": "https://sayyn.net/en/careers",
            },
        },
    },
    en: {
        title: "Download the Drivers App - Winch & Rescue Service",
        description:
            "Download the drivers app now and get winch and rescue requests directly on your phone. Available for Android and iOS for free.",
        keywords: "drivers app, winch, rescue, cars, mobile app, Android, iOS",
        openGraph: {
            title: "Download the Drivers App - Winch & Rescue Service",
            description:
                "Download the drivers app now and get winch and rescue requests directly on your phone.",
            type: "website",
            locale: "en_US",
        },
        alternates: {
            canonical: "https://sayyn.net/en/careers",
            languages: {
                "ar-SA": "https://sayyn.net/ar/careers",
                "en-US": "https://sayyn.net/en/careers",
            },
        },
    },
};

export function generateMetadata({ params: { locale } }) {
    const lang = locale === "ar" ? "ar" : "en";
    return metadataByLocale[lang];
}

const AppDownloadPage = ({ params: { locale } }) => {
    const t = useTranslations("AppDownloadPage");
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MobileApplication",
                        name: "Sayyn Driver",
                        description: "تطبيق صاين للسائقين لطلب الونش والإنقاذ",
                        applicationCategory: "BusinessApplication",
                        operatingSystem: ["Android", "iOS"],
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "EGP",
                        },
                    }),
                }}
            />
            <FixedNavbar
                logo={
                    <Image
                        src={logoImage}
                        alt="Sayyn Logo"
                        width={80}
                        height={50}
                    />
                }
                links={[
                    { label: "home", href: `/${locale}` },
                    { label: "joinAsPartner", href: `/${locale}/partners` },
                    { label: "privacyPolicy", href: `/${locale}/privacy-policies` },
                    { label: "termsAndConditions", href: `/${locale}/terms-and-conditions` },
                ]}
            />

            <div className={classes.container}>

                {/* Main Content */}
                <div className={classes.content}>
                    <div className={classes.textSection}>
                        <h1 className={classes.title}>{t("title")}</h1>

                        <p className={classes.description}>
                            {t("description")}
                        </p>

                        <div className={classes.downloadSection}>
                            <div className={classes.downloadLinks}>
                                <div className={classes.storeLink}>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.nxtLeap.FixawiDriver"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={playStore}
                                            alt="Get it on Google Play"
                                            width={180}
                                            height={60}
                                        />
                                    </a>
                                    <Image
                                        src={qrCodeAndroid}
                                        alt="QR Code Android"
                                        width={180}
                                        height={180}
                                        className={classes.qrImage}
                                    />
                                </div>

                                <div className={classes.storeLink}>
                                    <a
                                        href="https://apps.apple.com/eg/app/sayyn-driver/id6746718888"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={appStore}
                                            alt="Download on the App Store"
                                            width={180}
                                            height={60}
                                        />
                                    </a>
                                    <Image
                                        src={qrCodeIOS}
                                        alt="QR Code iOS"
                                        width={180}
                                        height={180}
                                        className={classes.qrImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* App Preview */}
                    <div className={classes.imageSection}>
                        <Image
                            src={appMockup}
                            alt="لقطة من التطبيق"
                            width={300}
                            height={600}
                            className={classes.appImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppDownloadPage;
