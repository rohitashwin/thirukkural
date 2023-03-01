import Link from "next/link";
import styles from "../../styles/Bookshelf.module.css";

export default function Books() {
  return (
    <>
      <div className={styles.bookshelf}>
        <Link href="/book/virtue" className={styles.book}>
          <p className={styles.book_number}>I</p>
        </Link>
        <Link href="/book/wealth" className={styles.book}>
          <p className={styles.book_number}>II</p>
        </Link>
        <Link href="/book/love" className={styles.book}>
          <p className={styles.book_number}>III</p>
        </Link>
      </div>
	  <div className={styles.book_name_container}>
		<p className={styles.book_name}>Book of Virtue</p>
		<p className={styles.book_name}>Book of Wealth</p>
		<p className={styles.book_name}>Book of Love</p>
	  </div>
	  <div className={styles.book_chapter_count}>
		<p>38 Chapters</p>
		<p>70 Chapters</p>
		<p>25 Chapters</p>
	  </div>
    </>
  );
}
