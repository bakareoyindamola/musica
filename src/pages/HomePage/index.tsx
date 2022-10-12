import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks";

// Slices
import { getAlbums } from "../../store/slices/artiste";

// Styles
import styles from "./HomePage.module.scss";

// Components
import { CuratedPlaylist, TopCharts, MiniCard } from "../../components";

// Mock Data
import newRelease from "../../MockDatas/NewRelease";
import popular from "../../MockDatas/Popular";

function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(getAlbums());
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.topContent}>
            <CuratedPlaylist />
            <TopCharts />
          </div>
          <div className={styles.bottomContent}>
            <MiniCard header="New Releases" data={newRelease} />
            <MiniCard header="Popular in your area" data={popular} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
