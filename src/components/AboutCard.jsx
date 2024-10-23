import classes from "./AboutCard.module.css";

export default function AboutCard({title, subtitle, description, staticCard}) {
    return (
        <div className={[staticCard ? classes["main-container-static"] : classes['main-container']].join(" ")}>
            <span className={classes['booking-title']}>
                {title}
            </span>
            {subtitle && (<span className={classes['booking-subtitle']}>
                {subtitle}
            </span>)}
            <span className={classes['booking-description']}>
                {description}
            </span>
        </div>
    );
}