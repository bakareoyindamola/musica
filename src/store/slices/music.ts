import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

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

export type albumState = {
  title: string;
  musician_name: string;
  images: Image[];
  tracks: Track | null;
};

export type musicState = {
  loading: boolean;
  is_playing: boolean;
  paused: boolean;
  title: string;
  current_track_image: string;
  images: Image[];
  musician_name: string;
  tracks: Track | null;
  allowed: boolean;
  current_track: TrackItem;
};

export const initialState: musicState = {
  loading: true,
  is_playing: false,
  paused: false,
  title: "",
  musician_name: "",
  images: [{ url: "https://i.scdn.co/image/ab67616d0000b2732875aeaaff6765aed2c98f31" }],
  current_track_image: "https://i.scdn.co/image/ab67616d0000b2732875aeaaff6765aed2c98f31",
  tracks: null,
  allowed: false,
  current_track: {
    id: "5YbPxJwPfrj7uswNwoF1pJ",
    duration_ms: 172342,
    name: "Last Last",
    preview_url:
      "https://p.scdn.co/mp3-preview/94e22586c94bcce77ffb411fa42efe2bd2950644?cid=f6a40776580943a7bc5173125a1e8832",
    type: "track",
    artists: [{ name: "Burna Boy" }],
  },
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setReadyToPlay: (state) => {
      state.loading = false;
    },
    setIsPlaying: (state) => {
      state.is_playing = true;
    },
    setNotPlaying: (state) => {
      state.is_playing = false;
    },
    setPlay: (state) => {
      state.paused = false;
    },
    setPause: (state) => {
      state.paused = true;
    },
    setTrack: (state, action: PayloadAction<albumState>) => {
      state.title = action.payload.title;
      state.images = action.payload.images;
      state.musician_name = action.payload.musician_name;
      state.tracks = action.payload.tracks;
      state.allowed = true;
    },
    setCurrentTrack: (state, action: PayloadAction<TrackItem>) => {
      state.current_track_image = state.images[0].url;
      state.current_track.id = action.payload.id;
      state.current_track.name = action.payload.name;
      state.current_track.duration_ms = action.payload.duration_ms;
      state.current_track.preview_url = action.payload.preview_url;
      state.current_track.type = action.payload.type;
      state.current_track.artists = action.payload.artists;
    },
    setDisallowed: (state) => {
      state.allowed = false;
    },
  },
});

export const {
  setReadyToPlay,
  setIsPlaying,
  setNotPlaying,
  setPlay,
  setPause,
  setTrack,
  setCurrentTrack,
  setDisallowed,
} = musicSlice.actions;

export const musicData = (state: RootState) => state.music;

export default musicSlice.reducer;
