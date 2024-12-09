import React from "react";
import classes from "./TermsAndConditions.module.css";
import logo from "../assets/text-based-logo-1.svg";
import Image from "next/image";
import Link from "next/link";
const TermsAndConditions = () => {
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
			<h1 className={classes.mainTitle}>Terms and Conditions</h1>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>1. Introduction</h2>
				<p className={classes.paragraph}>
					Welcome to <strong>[FIXAWI]</strong>! By downloading or
					using our mobile application (the “App”), you agree to be
					bound by these Terms and Conditions. Please read them
					carefully before using the App. If you do not agree to these
					terms, do not use the App.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>2. Use of the App</h2>
				<ul className={classes.list}>
					<li className={classes.listItem}>
						The App is provided for your personal, non-commercial
						use only.
					</li>
					<li className={classes.listItem}>
						You agree to use the App in accordance with all
						applicable laws and regulations.
					</li>
					<li className={classes.listItem}>
						You must not use the App for any unauthorized or illegal
						purpose.
					</li>
				</ul>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>3. User Account</h2>
				<ul className={classes.list}>
					<li className={classes.listItem}>
						You may need to create an account to access certain
						features of the App.
					</li>
					<li className={classes.listItem}>
						You are responsible for maintaining the confidentiality
						of your account information and password.
					</li>
					<li className={classes.listItem}>
						You agree to notify us immediately of any unauthorized
						access or use of your account.
					</li>
				</ul>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>
					4. Intellectual Property
				</h2>
				<p className={classes.paragraph}>
					All content within the App, including but not limited to
					text, graphics, logos, and software, is the property of{" "}
					<strong>[FIXAWI]</strong> or its licensors and is protected
					by intellectual property laws. You may not copy, modify,
					distribute, or sell any content from the App without prior
					written consent.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>5. Privacy Policy</h2>
				<p className={classes.paragraph}>
					Your use of the App is also governed by our{" "}
					<a href="#" className={classes.link}>
						Privacy Policy
					</a>
					, which explains how we collect, use, and protect your
					personal data.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>
					6. Limitation of Liability
				</h2>
				<p className={classes.paragraph}>
					<strong>[FIXAWI]</strong> is provided on an
					&quot;as-is&quot; basis, and we make no guarantees or
					warranties regarding its functionality, reliability, or
					accuracy. To the maximum extent permitted by law, we shall
					not be liable for any direct, indirect, or consequential
					damages arising from your use of the App.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>
					7. Third-Party Services
				</h2>
				<p className={classes.paragraph}>
					The App may include links or integrations with third-party
					services. <strong>[FIXAWI]</strong> is not responsible for
					the content, policies, or practices of any third-party
					services.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>8. Termination</h2>
				<p className={classes.paragraph}>
					We reserve the right to suspend or terminate your access to
					the App at any time, with or without cause, and without
					prior notice.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>
					9. Changes to These Terms
				</h2>
				<p className={classes.paragraph}>
					We may update these Terms and Conditions from time to time.
					We encourage you to review this page periodically for any
					changes. Your continued use of the App after changes are
					posted constitutes your acceptance of the new terms.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>10. Governing Law</h2>
				<p className={classes.paragraph}>
					These Terms and Conditions shall be governed by and
					construed in accordance with the laws of Egypt.
				</p>
			</div>

			<div className={classes.section}>
				<h2 className={classes.sectionTitle}>11. Contact Us</h2>
				<p className={classes.paragraph}>
					If you have any questions or concerns about these Terms and
					Conditions, please contact us at:
				</p>
				<ul className={classes.list}>
					<li className={classes.listItem}>
						Email:{" "}
						<a
							href="mailto:Info@fixawi.com"
							className={classes.link}
						>
							Info@fixawi.com
						</a>
					</li>
					<li className={classes.listItem}>Phone: +123-456-7890</li>
				</ul>
			</div>
		</div>
	);
};

export default TermsAndConditions;
