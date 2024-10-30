import classes from "./ServiceCard_SOON.module.css";
import {useTranslations} from "next-intl";

export default function ServiceCard({ icon, heading, paragraph }) {
	const t = useTranslations();
	return (
		<div className={classes.ServiceCard}>
			<div className="flex justify-start items-center md:mt-[0]">
				{icon}
				<h3 className={classes.service_heading}>{heading}</h3>
			</div>
			<p className="service_paragraph">{paragraph}</p>
			<div className={classes["coming-soon"]}>
				<p>
					{t("Services.Soon.soon")}
				</p>
			</div>
		</div>
	);
}
