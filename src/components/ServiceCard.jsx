import classes from "./ServiceCard.module.css";

export default function ServiceCard({ icon, heading, paragraph }) {
	return (
		<div className={classes.Service}>
			<div className="flex justify-start items-center">
				{icon}
				<h3 className={classes.Service__heading}>{heading}</h3>
			</div>
			<p className={classes.Service__description}>{paragraph}</p>
		</div>
	);
}
