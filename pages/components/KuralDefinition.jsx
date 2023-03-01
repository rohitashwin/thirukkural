import styles from "../../styles/KuralDefinition.module.css";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import { getKural } from "@/lib/kural";

export default function KuralDefinition({ kuralNumber }) {
  const [kural, setKural] = useState(null);
  getKural(kuralNumber)
    .then((kural) => {
      setKural(kural);
    })
    .catch((err) => {
      console.error(err);
      Router.push("/404");
    });
  if (!kural) {
    Router.push("/404");
  }
  let manually_verified = true;
  let previous_exists = kural["number"] > 0;
  return (
    <>
      <div className={styles.super_container}>
        <Link
          className={styles.back_button}
          href={previous_exists ? `/kural/${kural["number"] - 1}` : "#"}
          data-active={previous_exists ? "true" : "false"}
        >
          {previous_exists && (
            <Image
              src="/images/arrow-left.svg"
              alt="Back"
              width={24}
              height={24}
            />
          )}
        </Link>
        <div className={styles.definition_container}>
          <div className={styles.kural_tamil}></div>
          <div className={styles.kural_explanation}>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
