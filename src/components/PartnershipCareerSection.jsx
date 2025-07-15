"use client";
import Image from "next/image";
import React from "react";
import styles from "./PartnershipCareerSection.module.css";
import { useTranslations } from "next-intl";

const PartnershipCareerSection = ({ locale }) => {
    const t = useTranslations("PartnershipCareerSection");

    return (
        <div className={styles.container}>
            {/* Partner Card */}
            <div className={styles.card}>
                <div className={styles.contentTop}>
                    <div className={styles.iconContainer}>
                        <div className={styles.partnerIconInner}>
                            <Image
                                src="/partner.png"
                                alt="Partner Icon"
                                width={100}
                                height={100}
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>
                            {t("title_1")}
                        </h2>
                        <p className={styles.description}>
                            {t("description_1")}
                        </p>
                    </div>
                </div>
                <button className={styles.button}>{t("button_1")}</button>
            </div>

            {/* Career Card */}
            <div className={styles.card}>
                <div className={styles.contentTop}>
                    <div className={styles.iconContainer}>
                        <Image
                            src="/star.png"
                            alt="Star Icon"
                            width={100}
                            height={100}
                            objectFit="contain"
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>{t("title_2")}</h2>
                        <p className={styles.description}>
                            {t("description_2")}
                        </p>
                    </div>
                </div>
                <button className={styles.button}>
                    {t("button_2")}
                </button>
            </div>
        </div>
    );
};

export default PartnershipCareerSection;
