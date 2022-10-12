import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

// Styles
import style from "./MusicTile.module.scss";
import { musicData, setCurrentTrack, setIsPlaying, setPlay } from "../../store/slices/music";

// Interface
interface Artists {
  name: string;
}

interface TrackItem {
  id: string;
  duration_ms: number;
  name: string;
  preview_url: string;
  type: string;
  artists: Artists[];
}

interface MusicProps {
  image: string;
  title: string;
  artist: string;
  current_track: TrackItem;
}

function MusicTile({ image, title, artist, current_track: currentTrack }: MusicProps) {
  const { paused } = useAppSelector(musicData);
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      className={style.container}
      onClick={() => {
        dispatch(setCurrentTrack(currentTrack));
        dispatch(setIsPlaying());
        if (paused) {
          dispatch(setPlay());
        }
      }}
    >
      <div className={style.topContent}>
        <div className={style.imageWrapper}>
          <img src={image} alt={`${title} by ${artist}`} />
        </div>
        <div className={style.likeButton}>
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.43496 8.37182C0.540791 5.58016 1.58662 2.10933 4.51746 1.16599C6.05912 0.668493 7.96162 1.08349 9.04246 2.57433C10.0616 1.02849 12.0191 0.671826 13.5591 1.16599C16.4891 2.10933 17.5408 5.58016 16.6475 8.37182C15.2558 12.7968 10.4 15.1018 9.04246 15.1018C7.68579 15.1018 2.87329 12.8485 1.43496 8.37182Z"
              stroke="#EFEEE0"
              strokeWidth="0.625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.1572 4.30328C13.163 4.40662 13.7922 5.20412 13.7547 6.32162"
              stroke="#EFEEE0"
              strokeWidth="0.625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={style.bottomContent}>
        <div className={style.textContent}>
          <p className={style.title}>{title}</p>
          <p className={style.type}>Album</p>
        </div>
        <div className={style.optionsWrapper}>
          <div>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.25783 7.58341C7.58 7.58341 7.84117 7.32225 7.84117 7.00008C7.84117 6.67792 7.58 6.41675 7.25783 6.41675C6.93567 6.41675 6.6745 6.67792 6.6745 7.00008C6.6745 7.32225 6.93567 7.58341 7.25783 7.58341Z"
                stroke="#FACD66"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.25783 3.49992C7.58 3.49992 7.84117 3.23875 7.84117 2.91659C7.84117 2.59442 7.58 2.33325 7.25783 2.33325C6.93567 2.33325 6.6745 2.59442 6.6745 2.91659C6.6745 3.23875 6.93567 3.49992 7.25783 3.49992Z"
                stroke="#FACD66"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.25783 11.6667C7.58 11.6667 7.84117 11.4055 7.84117 11.0833C7.84117 10.7612 7.58 10.5 7.25783 10.5C6.93567 10.5 6.6745 10.7612 6.6745 11.0833C6.6745 11.4055 6.93567 11.6667 7.25783 11.6667Z"
                stroke="#FACD66"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className={style.duration}>4:17</p>
        </div>
      </div>
    </button>
  );
}

export default MusicTile;
