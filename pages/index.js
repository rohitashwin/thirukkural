import Header from "./components/Header";
import styles from "../styles/Home.module.css";
import KOTD from "./components/KOTD";
import Books from "./components/Bookshelf";

export default function Home() {
  return (
    <>
      <Header title='Thirukkural' />
      <main className={styles.main}>
		<KOTD />
		<Books />
	  </main>
    </>
  );
}
