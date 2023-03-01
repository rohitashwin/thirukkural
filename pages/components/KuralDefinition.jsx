import styles from "../../styles/KuralDefinition.module.css";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import { getKural } from "@/lib/kural";
import Link from "next/link";

export default function KuralDefinition({ kuralNumber }) {
  const [kural, setKural] = useState(null);
  getKural(kuralNumber)
    .then((kural) => {
      setKural(kural);
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
  if (!kural) {
    return null;
  }
  let manually_verified = true;
  let previous_exists = kural["number"] > 1;
  let next_exists = kural["number"] < 1330;
  return (
    <>
      <div className={styles.super_container}>
        <Link
          className={`${styles.navigation_button_left} ${styles.navigation_button}`}
          href={previous_exists ? `/kural/${kural["number"] - 1}` : "#"}
          data-active={previous_exists ? "true" : "false"}
        >
          {previous_exists && (
            <Image
              src="/resources/left_arrow.svg"
              alt="Back"
              width={40}
              height={40}
              className={styles.navigation_image}
            />
          )}
        </Link>
        <div className={styles.kural_container}>
          <div className={styles.kural_tamil}>
            <p className={styles.kural_line}>{kural["line1"]}</p>
            <p className={styles.kural_line}>{kural["line2"]}</p>
          </div>
          <div className={styles.kural_explanation}>
            <p>{kural["explanation"]}</p>
          </div>
          <div className={styles.manually_verified} data-manually-verified={kural['manually_verified'] ? 'true' : 'false'}>
			{kural['manually_verified'] ? 'Manually verified' : 'External Source'}
		  </div>
        </div>
        <Link
          className={`${styles.navigation_button_right} ${styles.navigation_button}`}
          href={next_exists ? `/kural/${kural["number"] + 1}` : "#"}
          data-active={next_exists ? "true" : "false"}
        >
          {next_exists && (
            <Image
              src="/resources/right_arrow.svg"
              alt="Next"
              width={40}
              height={40}
              className={styles.navigation_image}
            />
          )}
        </Link>
      </div>
    </>
  );
}
