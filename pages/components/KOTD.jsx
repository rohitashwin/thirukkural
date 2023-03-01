import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/KOTD.module.css";
import { Cookies } from "react-cookie";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

export default function KOTD() {
  // Cookie stores the kural number of the day. It expires after 24 hours. If the cookie is not present, it is set to some random number between 1 and 1330.
  const cookies = new Cookies();
  const [cookie, setCookie] = useCookies(["kural"]);
  if (cookie.kural === undefined) {
    setCookie("kural", Math.floor(Math.random() * 1330) + 1, {
      path: "/",
      maxAge: 86400,
    });
  }
  const [kural, setKural] = useState("");
  async function getKural() {
    const response = await axios.get(`/api/kural/?id=${cookie.kural}`);
    setKural(response.data);
  }
  useEffect(() => {
    getKural();
  }, []);

  return (
    <>
      <div className={styles.kotd}>
        <div className={styles.kotdContainer}>
          <h1 className={styles.heading}>kural of the day</h1>
          <div className={styles.kotdContent}>
            <p className={styles.kotdLine}>{kural["line1"]}</p>
            <p className={styles.kotdLine}>{kural["line2"]}</p>
          </div>
        </div>
        <div className={styles.kotdLinkContainer}>
          <Link className={styles.kotdLink} href={`/kural/${cookie.kural}`}>
            <p>Go to Definition</p>
			<Image src="/right_arrow.svg" width={20} height={20} className={styles.right_arrow}/>
          </Link>
        </div>
      </div>
    </>
  );
}
