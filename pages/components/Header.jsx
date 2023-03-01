import Head from 'next/head';
import styles from '../../styles/Header.module.css';

export default function Header({ title, children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header className={styles.header}>
				<h1 className={styles.heading}>{title}</h1>
				{children}
			</header>
		</>
	)
}