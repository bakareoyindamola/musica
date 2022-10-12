import { artisteReducer, musicReducer } from "../slices";

const reducer = {
  music: musicReducer,
  artiste: artisteReducer,
};

export default reducer;
