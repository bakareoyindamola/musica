import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setTrack } from "../../store/slices/music";

// Styles
import styles from "./TopCharts.module.scss";

// Mock Data
import { artistData } from "../../store/slices/artiste";
import { CHARTS_URL } from "../../routes";

// Interface
interface Artists {
  name: string;
}

interface Image {
  url: string;
}

interface TrackItem {
  id: string;
  duration_ms: number;
  name: string;
  preview_url: string;
  type: string;
  artists: Artists[];
}

interface Track {
  items: TrackItem[];
  total: number;
}

interface CardProps {
  images: Image[];
  title: string;
  musician: string;
  type: string;
  tracks: Track;
}

interface ChartsInfoInterface {
  id: string;
  name: string;
  musician: string;
  type: string;
  artists: Artists[];
  images: Image[];
  tracks: Track;
}

// Component
function Card({ images, title, musician, type, tracks }: CardProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={styles.cardWrapper}
      onClick={() => {
        dispatch(
          setTrack({
            title,
            musician_name: musician,
            images,
            tracks,
          })
        );
        navigate(CHARTS_URL);
      }}
    >
      <div className={styles.cardInfo}>
        <div className={styles.cardTopInfo}>
          <div className={styles.content}>
            <div className={styles.cardImageWrapper}>
              <img src={images[0].url} alt={`${title} by ${musician}`} />
            </div>
            <div className={styles.textWrapper}>
              <div>
                <h6 className={styles.cardMusician}>{title}</h6>
                <p className={styles.cardTitle}>{musician}</p>
              </div>
              <p className={styles.cardDuration}>{type}</p>
            </div>
          </div>
          <div role="button" className={styles.favButton}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z"
                stroke="#FACD66"
                strokeWidth="0.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M11 4.02501C11.8025 4.28451 12.3695 5.00076 12.4377 5.84151"
                stroke="#FACD66"
                strokeWidth="0.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

function TopCharts() {
  const { albums } = useAppSelector(artistData);

  return (
    <div className={styles.container}>
      <h5>Top Charts</h5>
      <div className={styles.topChartsCards}>
        {albums.map((item: ChartsInfoInterface) => (
          <Card
            key={item.id}
            type={item.type}
            images={item.images}
            musician={item.artists[0].name}
            title={item.name}
            tracks={item.tracks}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCharts;
