import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header({ title, children }) {
	let homeLink = <Link href={'/'} className={styles.home_button}>HOME</Link>;
	if (title === 'Thirukkural') {
		homeLink = <></>;
	}
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header className={styles.header}>
				<h1 className={styles.heading}>{title}</h1>
				{children}
				{homeLink}
			</header>
		</>
	)
}