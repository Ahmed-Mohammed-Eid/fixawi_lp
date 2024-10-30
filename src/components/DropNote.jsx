"use client";

import classes from "./DropNote.module.css";
import {useTranslations, useLocale} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import toast from "react-hot-toast";

export default function DropANote() {

    const t = useTranslations();
    const {locale} = useLocale();

    // STATES
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // HANDLERS
    // # Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // REGEX
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //VALIDATION
        if (firstName === "") {
            return toast.error(locale === "en" ? "First name is invalid" : "الاسم الأول غير صالح");
        }

        if (lastName === "") {
            return toast.error(locale === "en" ? "Last name is invalid" : "الاسم الأخير غير صالح");
        }

        if (emailRegex.test(email) === false) {
            return toast.error(locale === "en" ? "Email is invalid" : "البريد الإلكتروني غير صالح");
        }

        if (subject === "") {
            return toast.error(locale === "en" ? "Subject is required" : "الموضوع مطلوب");
        }

        if (message === "") {
            return toast.error(locale === "en" ? "Message is required" : "الرسالة مطلوبة");
        }

        // SEND EMAIL
        fetch(`${process.env.API_URL}/contact/us`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullName: `${firstName} ${lastName}`,
                email,
                subject,
                message,
                phoneNumber: "0000000000"
            })
        })
            .then(response => response.json())
            .then(data => {
                    toast.success(locale === "en" ? "Message sent" : "تم إرسال الرسالة");
                    // RESET FORM
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
            })
            .catch(error => {
                toast.error(locale === "en" ? "Message not sent" : "لم يتم إرسال الرسالة");
            });
    }
    return (
        <section id="DropANote" className="py-20">
            <div className={"fx-container"}>
                <div className={"grid grid-cols-2 bg-white py-8 px-8 " + classes.DropANote}>
                    <div className={"col-span-2 flex flex-col p-4 md:col-span-1"}>
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
                    <div className={"col-span-2 md:col-span-1"}>
                        <form className={"mt-8"} onSubmit={handleSubmit}>
                            <div className={"grid grid-cols-2 gap-4"}>
                                <div className={""}>
                                    <input type="text" id="firstName" className={classes.input}
                                           placeholder={t("DropANote.fName")}
                                           onChange={(e) => setFirstName(e.target.value)}
                                           value={firstName}
                                    />
                                </div>
                                <div className={""}>
                                    <input type="text" id="lastName" className={classes.input}
                                           placeholder={t("DropANote.lName")}
                                           onChange={(e) => setLastName(e.target.value)}
                                           value={lastName}
                                    />
                                </div>
                            </div>
                            <div className={"mt-4"}>
                                <input type="email" id="email" className={classes.input}
                                       placeholder={t("DropANote.email")}
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email}
                                />
                            </div>
                            <div className={"mt-4"}>
                                <input type="text" id="subject" className={classes.input}
                                       placeholder={t("DropANote.subject")}
                                       onChange={(e) => setSubject(e.target.value)}
                                       value={subject}
                                />
                            </div>
                            <div className={"mt-4"}>
                                <textarea id="message" className={classes.textarea}
                                          placeholder={t("DropANote.message")}
                                          onChange={(e) => setMessage(e.target.value)}
                                          value={message}
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