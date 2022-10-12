import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { musicData } from "../../store/slices/music";
import { HOME_URL } from "../../routes";

// Components
import { AlbumInformation, MusicTile } from "../../components";

// Styles
import styles from "./Charts.module.scss";

function ChartsPage() {
  const navigate = useNavigate();
  const { allowed, tracks, images, musician_name: artiste } = useAppSelector(musicData);

  useEffect(() => {
    if (!allowed) {
      navigate(HOME_URL);
    }
  }, []);

  return (
    <div className={styles.container}>
      <AlbumInformation />

      <div className={styles.innerContent}>
        {tracks &&
          tracks.items.map((item: any) => (
            <MusicTile key={item.id} artist={artiste} image={images[0].url} title={item.name} current_track={item} />
          ))}
      </div>
    </div>
  );
}

export default ChartsPage;
