import { useTranslations } from "next-intl";

import classes from "./HowToUse.module.css";
import Image from "next/image";

import MobileImage from "../assets/Mobile.png";

export default function HowToUse() {
	const t = useTranslations();

	return (
		<section id="HowToUse" className={`${classes.HowToUse} p-10`}>
			<div className="fx-container mx-auto">
				<h2 className={classes.HowToUse_heading}>How To Use</h2>
				<div className={classes.HowToUse_Container}>
					<div className={classes.HowToUse_Image}>
						<Image src={MobileImage} alt={"How to use"} width={230} height={500} />
					</div>
					<div className={classes.HowToUse_Content}>
						<h3>
							{t("HowToUse.title")}
						</h3>

						<div className={classes.HowToUse_Steps}>
							<div className={classes.HowToUse_Step}>
								<h4>1</h4>
								<p>{t("HowToUse.steps.1")}</p>
							</div>
							<div className={classes.HowToUse_Step}>
								<h4>2</h4>
								<p>{t("HowToUse.steps.2")}</p>
							</div>
							<div className={classes.HowToUse_Step}>
								<h4>3</h4>
								<p>{t("HowToUse.steps.3")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
