import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

// Routes
import { HOME_URL, CHARTS_URL, COLLECTIONS_URL } from "./routes";

// Styles
import "./styles/global.scss";

// Pages
import { HomePage, ChartsPage, CollectionsPage } from "./pages";

// Components
import { MusicPlayer, TopNav, DesktopSideMenu } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <TopNav />
        <section>
          <DesktopSideMenu />
          <Routes>
            <Route path={HOME_URL} element={<HomePage />} />
            <Route path={CHARTS_URL} element={<ChartsPage />} />
            <Route path={COLLECTIONS_URL} element={<CollectionsPage />} />
          </Routes>
        </section>
        <MusicPlayer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
