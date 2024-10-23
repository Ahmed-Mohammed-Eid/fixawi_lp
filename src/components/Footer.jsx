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
                <div className={"flex justify-between items-center"}>
                    <p className={classes.rights}>
                        {t("Footer.rights")}
                    </p>
                    <div className={classes.links}>
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