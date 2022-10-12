import React from "react";
import styles from "./CuratedPlaylist.module.scss";

// Assets
import { ReactComponent as Heart } from "../../assets/curatedPlaylist/Heart.svg";

// MockData
import users from "../../MockDatas/Users";

function CuratedPlaylist() {
  return (
    <div className={styles.container}>
      <p>CuratedPlaylist</p>
      <div>
        <div className={styles.textWrapper}>
          <h2>R & B Hits</h2>
          <p>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
        </div>

        <div className={styles.likesWrapper}>
          <div className={styles.usersWrapper}>
            {users.map((item: { id: number; alt: string; url: string }) => (
              <button key={item.id} type="button" className={styles.user}>
                <div className={styles.userImage}>
                  <img src={item.url} alt={item.alt} />
                </div>
              </button>
            ))}
          </div>
          <Heart />
          <h5>33k Likes</h5>
        </div>
      </div>
    </div>
  );
}

export default CuratedPlaylist;
