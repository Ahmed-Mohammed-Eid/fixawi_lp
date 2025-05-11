import React from "react";
import classes from "./PrivacyPolicies.module.css";
import logo from "../assets/Layer_1@2x.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PrivacyPolicies = () => {
	const t = useTranslations("PrivacyPolicy");

	return (
		<div className={classes.termsContainer}>
			<Link href="/">
				<Image
					src={logo}
					alt="logo"
					width={350}
					height={200}
					className={classes.logo}
				/>
			</Link>
			<h1 className={classes.mainTitle}>{t("title")}</h1>
			<p className={classes.effectiveDate}>{t("effectiveDate")}</p>
			<p className={classes.introText}>{t("intro")}</p>

			{/* Dynamically render all sections */}
			{[...Array(10)].map((_, index) => {
				const sectionNum = index + 1;
				return (
					<div key={sectionNum} className={classes.section}>
						<h2 className={classes.sectionTitle}>
							{t(`sections.${sectionNum}.title`)}
						</h2>
						{Array.isArray(
							t.raw(`sections.${sectionNum}.content`)
						) ? (
							<ul className={classes.list}>
								{t
									.raw(`sections.${sectionNum}.content`)
									.map((item, idx) => (
										<li
											key={idx}
											className={classes.listItem}
										>
											{item}
										</li>
									))}
							</ul>
						) : (
							<p className={classes.paragraph}>
								{t(`sections.${sectionNum}.content`)}
							</p>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default PrivacyPolicies;
