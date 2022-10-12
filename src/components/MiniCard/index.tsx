import React from "react";

// Styles
import styles from "./MiniCard.module.scss";

// Interface
interface Data {
  id: number;
  musicArt: string;
  title: string;
  musician: string;
}

interface MiniCardProps {
  header: string;
  data: Data[];
}

function MiniCard({ header, data }: MiniCardProps) {
  return (
    <div className={styles.container}>
      <h4>{header}</h4>

      <div className={styles.contentWrapper}>
        {data.map((item: Data) => (
          <div key={item.id} className={styles.content}>
            <div className={styles.imageWrapper}>
              <img src={item.musicArt} alt={`${item.title} by ${item.musician}`} />
            </div>
            <h6>{item.title}</h6>
            <p>{item.musician}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniCard;
