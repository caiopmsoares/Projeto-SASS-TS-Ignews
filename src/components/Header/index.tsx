import styles from "./styles.module.scss";

import Image from "next/image";

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Image
					src="/images/logo.svg"
					width="110"
					height="31"
					alt="Logotipo ig.news"
				/>
				<nav>
					<a href="#" className={styles.active}>
						Home
					</a>
					<a href="#">Posts</a>
				</nav>
			</div>
		</header>
	);
}
