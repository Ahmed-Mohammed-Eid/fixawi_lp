"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import classes from "./Navbar.module.css";
import Sidebar from "./Sidebar";

export default function Navbar({ locale, links }) {
    const t = useTranslations("Navbar");
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <nav className={`flex justify-between items-center py-8 bg-transparent ${classes.navbar}`}>
                <div className="fx-container mx-auto w-full">
                    <div className={`${classes.content__container}`}>
                        <ul className={`${classes.navbar_list} gap-4`}>
                            {links.map((link, index) => (
                                <li key={"NavLink" + index} className={`uppercase text-[24px] font-bold`}>
                                    <NextLink
                                        href={link.href}
                                        locale={locale}
                                        id={link.id}
                                        className={`Nav__Item NavItem${index + 1}`}
                                    >
                                        {t(link.label)}
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                        <button className={classes.navbar_lang}>
                            <NextLink href={`/${locale === "en" ? "ar" : "en"}`}>
                                {locale === "en" ? "العربية" : "English"}
                            </NextLink>
                        </button>
                    </div>
                </div>
            </nav>
            <Sidebar locale={locale} links={links} showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        </>
    );
}