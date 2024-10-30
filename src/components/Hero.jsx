import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import Image from "next/image";

import logo from "../assets/text-based-logo-1-white.svg";
import playStoreImage from "../assets/play-store.png";
import appStoreImage from "../assets/app-store.png";
import playStoreQR from "../assets/qrcode_play.google.com.png";
import appStoreQR from "../assets/qrcode_apps.apple.com.png";

import classes from "./Hero.module.css";

export default function Hero() {
	const t = useTranslations();

	return (
		<header
			id="Hero"
			className={`${classes.Hero} flex justify-start flex-col items-start`}
		>
			<div className="fx-container mx-auto">
				<Link href="/">
					<Image
						src={logo}
						alt="logo"
						width={350}
						height={200}
						className={"block md:mb-[80px] md:mt-[163px] mt-[100px] mb-[40px] " + classes.Hero_logo}
					/>
				</Link>

				<p className={classes.Hero_paragraph}>
					<span className="text-bold text-[22px] lg:text-[34px]">
						{t("Hero.heroTextBold")}
					</span>
					{t("Hero.heroText")}
				</p>

				<div className={classes.Store_buttons}>
					<Link href="/download" className="btn">
						<Image
							src={playStoreImage}
							alt="play store"
							width={250}
							height={73.57}
						/>
					</Link>
					<div className={"w-[73.57px] bg-white " + classes.qr}>
						<Image
							src={appStoreQR}
							alt="app store"
							width={73.57}
							height={73.57}
						/>
					</div>
					<Link href="/download" className="btn">
						<Image
							src={appStoreImage}
							alt="app store"
							width={250}
							height={73.57}
						/>
					</Link>
					<div className={"w-[73.57px] bg-white " + classes.qr}>
						<Image
							src={playStoreQR}
							alt="play store"
							width={73.57}
							height={73.57}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
