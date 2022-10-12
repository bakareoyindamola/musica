import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import publicAxios from "../../utils/Api";

export type artisteState = {
  loading: boolean;
  albums: [];
};

export const getAlbums = createAsyncThunk("getAlbums", async (_, { rejectWithValue }) => {
  try {
    const response = await publicAxios.get("/albums/", {
      params: { ids: "0lzPMIAYhhUSD2BPT0VQWI,1KOmHyNLuOe5YrPhD3Juuf,0s3BbZlcqsUdAD8wIYdO5n" },
    });

    return response.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const initialState: artisteState = {
  loading: true,
  albums: [],
};

export const artisteSlice = createSlice({
  name: "artiste",
  initialState,
  reducers: {
    setMusic: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAlbums.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAlbums.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.albums = payload.albums;
      })
      .addCase(getAlbums.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setMusic } = artisteSlice.actions;

export const artistData = (state: RootState) => state.artiste;

export default artisteSlice.reducer;
