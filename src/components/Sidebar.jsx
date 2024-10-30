import NextLink from "next/link";
import {useTranslations} from "next-intl";
import classes from "./Sidebar.module.css";

export default function Sidebar({locale, links, showSidebar, toggleSidebar}) {
    const t = useTranslations("Navbar");

    return (
        <>
            <button className={classes.toggle_btn} onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            <div className={`${classes.sidebar} ${showSidebar ? classes.show : ""}`}>
                <div className={classes.sidebar_header}>
                    <button className={classes.insideToggle_btn} onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            {/*CLOSE*/}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <div className={classes.sidebar_lang}>
                        <NextLink href={`/${locale === "en" ? "ar" : "en"}`}>
                            {locale === "en" ? "العربية" : "English"}
                        </NextLink>
                    </div>
                </div>
                <ul className={classes.sidebar_list}>
                    {links.map((link, index) => (
                        <li key={"SidebarLink" + index} className={classes.sidebar_item}>
                            <NextLink
                                href={link.href}
                                locale={locale}
                                id={link.id}
                                className={classes.sidebar_link}
                                onClick={toggleSidebar}
                            >
                                {t(link.label)}
                            </NextLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}