import classes from "./ServiceCard_SOON.module.css";

export default function ServiceCard({ icon, heading, paragraph }) {
	return (
		<div className={classes.ServiceCard}>
			<div className="flex justify-start items-center">
				{icon}
				<h3 className={classes.service_heading}>{heading}</h3>
			</div>
			<p className="service_paragraph">{paragraph}</p>
			<div className={classes["coming-soon"]}>
				<p>Coming Soon</p>
			</div>
		</div>
	);
}
