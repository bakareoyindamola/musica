import React from "react";
import { CollectionCard } from "../../components";

// Styles
import styles from "./CollectionsPage.module.scss";

function CollectionsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.actionsWrapper}>
        <button type="button" aria-label="my collection">
          My collection
        </button>
        <button type="button" aria-label="likes">
          Likes
        </button>
      </div>
      <CollectionCard />
    </div>
  );
}

export default CollectionsPage;
