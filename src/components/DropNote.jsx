import classes from "./DropNote.module.css";
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function DropANote() {

    const t = useTranslations();

    return (
        <section id="DropANote" className="py-20">
            <div className={"fx-container"}>
                <div className={"grid grid-cols-2 bg-white py-8 px-8 " + classes.DropANote}>
                    <div className={"col-span-1 flex flex-col p-4"}>
                        <div>
                            <h2 className={"text-4xl font-bold mb-4 uppercase"}>
                                {t("DropANote.title")}
                            </h2>
                            <p className={"text-lg mt-10 " + classes.paragraph}>
                                {t("DropANote.summary")}
                            </p>
                        </div>
                        <div className={classes.icons}>
                            <div className={classes.icon}>
                                <Link href={"#"}>
                                    <Image src={"/gmail.svg"} alt={"gmail"} width={40} height={40}/>
                                </Link>
                            </div>
                            <div className={classes.icon}>
                                <Link href={"#"}>
                                    <Image src={"/facebook-f.svg"} alt={"facebook"} width={40} height={40}/>
                                </Link>
                            </div>
                            <div className={classes.icon}>
                                <Link href={"#"}>
                                    <Image src={"/whatsapp-alt.svg"} alt={"whatsapp"} width={40} height={40}/>
                                </Link>
                            </div>
                            <div className={classes.icon}>
                                <Link href={"#"}>
                                    <Image src={"/youtube.svg"} alt={"youtube"} width={40} height={40}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <form className={"mt-8"}>
                            <div className={"grid grid-cols-2 gap-4"}>
                                <div className={""}>
                                    <input type="text" id="firstName" className={classes.input}
                                           placeholder={t("DropANote.fName")}
                                    />
                                </div>
                                <div className={""}>
                                    <input type="text" id="lastName" className={classes.input}
                                           placeholder={t("DropANote.lName")}
                                    />
                                </div>
                            </div>
                            <div className={"mt-4"}>
                                <input type="email" id="email" className={classes.input}
                                       placeholder={t("DropANote.email")}
                                />
                            </div>
                            <div className={"mt-4"}>
                                <input type="text" id="subject" className={classes.input}
                                       placeholder={t("DropANote.subject")}
                                />
                            </div>
                            <div className={"mt-4"}>
                                <textarea id="message" className={classes.textarea}
                                          placeholder={t("DropANote.message")}
                                />
                            </div>
                            <div className={"mt-4"}>
                                <button className={classes.button}>
                                    {t("DropANote.send")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}