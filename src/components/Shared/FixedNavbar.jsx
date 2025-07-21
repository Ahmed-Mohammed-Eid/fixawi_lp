"use client";
import React, { useState } from 'react';
const { useTranslations } = require('next-intl');
import styles from './FixedNavbar.module.css';
import Link from 'next/link';

/**
 * Props:
 * - logo: ReactNode (logo image or component)
 * - links: Array<{ label: string, href: string }>
 */
const FixedNavbar = ({ logo, links }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const t = useTranslations("FixedNavbar");

	const handleToggle = () => setMenuOpen((open) => !open);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContent}>
				<div className={styles.logo}>
					<Link href="/" className={styles.logoLink}>
						{logo}
					</Link>
				</div>
				<button
					className={styles.menuToggle}
					onClick={handleToggle}
					aria-label="Toggle navigation menu"
				>
					<span className={styles.menuIcon} />
				</button>
				<ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
					{links.map((link) => (
						<li key={link.href} className={styles.navItem}>
							<Link href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
								{t(link.label)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default FixedNavbar;
