import classes from "./Footer.module.css";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Footer() {

    const t = useTranslations();

    return (
        <div className={classes.footer}>
            <div className={"fx-container"}>
                <p className={classes.paragraph}>
                    {t("Footer.paragraph")}
                </p>
                <div className={"flex flex-col md:flex-row md:justify-between md:items-center"}>
                    <p className={classes.rights + " order-2 text-center"}>
                        {t("Footer.rights")}
                    </p>
                    <div className={classes.links + " order-1 flex flex-row justify-between items-center"}>
                        <Link href={"#"} className={classes.link}>
                            {t("Footer.terms")}
                        </Link>
                        <Link href={"#"} className={classes.link}>
                            {t("Footer.privacy")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}