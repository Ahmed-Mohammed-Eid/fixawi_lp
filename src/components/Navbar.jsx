"use client";
import {useTranslations} from "next-intl";
import NextLink from "next/link";
import classes from "./Navbar.module.css";
import {useState, useEffect} from "react";

export default function Navbar({locale, links}) {
    const t = useTranslations("Navbar");
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        // GET THE SECTION ELEMENTS BY ID
        const Hero = document.getElementById("Hero");
        const Services = document.getElementById("Services");
        const About = document.getElementById("About");
        const HowToUse = document.getElementById("HowToUse");
        const Contact = document.getElementById("DropANote");

        // GET THE NAV ITEMS BY CLASSNAME
        const HeroLink = document.getElementById("Hero__Link");
        const ServicesLink = document.getElementById("Services__Link");
        const AboutLink = document.getElementById("About__Link");
        const HowToUseLink = document.getElementById("HowToUse__Link");
        const ContactLink = document.getElementById("DropANote__Link");

        // HANDLER TO ADD ACTIVE CLASS TO THE NAV ITEMS
        const activeHandler = () => {
            if (Hero && Services && About && HowToUse && Contact) {
                if (window.scrollY < Services.offsetTop - 100 - 100) {
                    HeroLink.classList.add(classes.active);
                    ServicesLink.classList.remove(classes.active);
                    AboutLink.classList.remove(classes.active);
                    HowToUseLink.classList.remove(classes.active);
                    ContactLink.classList.remove(classes.active);
                } else if (window.scrollY < About.offsetTop - 100) {
                    HeroLink.classList.remove(classes.active);
                    ServicesLink.classList.add(classes.active);
                    AboutLink.classList.remove(classes.active);
                    HowToUseLink.classList.remove(classes.active);
                    ContactLink.classList.remove(classes.active);
                } else if (window.scrollY < HowToUse.offsetTop - 100) {
                    HeroLink.classList.remove(classes.active);
                    ServicesLink.classList.remove(classes.active);
                    AboutLink.classList.add(classes.active);
                    HowToUseLink.classList.remove(classes.active);
                    ContactLink.classList.remove(classes.active);
                } else if (window.scrollY < Contact.offsetTop - 100) {
                    HeroLink.classList.remove(classes.active);
                    ServicesLink.classList.remove(classes.active);
                    AboutLink.classList.remove(classes.active);
                    HowToUseLink.classList.add(classes.active);
                    ContactLink.classList.remove(classes.active);
                } else {
                    HeroLink.classList.remove(classes.active);
                    ServicesLink.classList.remove(classes.active);
                    AboutLink.classList.remove(classes.active);
                    HowToUseLink.classList.remove(classes.active);
                    ContactLink.classList.add(classes.active);
                }
            }

            if (window.scrollY > 0) {
                setIsMoving(true);
            } else {
                setIsMoving(false);
            }
        }

        // RUN THE ACTIVE HANDLER ONCE TO SET THE ACTIVE CLASS
        activeHandler();

        // ADD A LISTENER TO THE DOCUMENT WHEN THE OFFSET CHANGES
        window.addEventListener("scroll", activeHandler);

    }, []);

    return (
        <nav
            className={`flex justify-between items-center py-8 bg-transparent ${
                classes.navbar
            } ${isMoving ? classes.navbar_moving : ""}`}
        >
            <div className="fx-container mx-auto w-full">
                <div className={"flex items-center justify-between"}>
                    <ul className={`${classes.navbar_list} gap-4`}>
                        {links.map((link, index) => (
                            <li
                                key={"NavLink" + index}
                                className={`uppercase text-[24px] font-bold`}
                            >
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
    );
}
