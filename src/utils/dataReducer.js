import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  geojson: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        category: "Lost",
        geometry: {
          type: "Point",
          coordinates: [30.2533511, 59.8512329],
        },
        properties: {
          petType: "Cat",
          petName: "Yoshi",
          ownerName: "Tima",
          ownerContat: "89523691948",
          description: "From 15-19 may",
          address: "Ленинский проспект",
        },
      },
      {
        type: "Feature",
        category: "Shelter",
        geometry: {
          type: "Point",
          coordinates: [30.2545, 59.8554],
        },
        properties: {
          petType: "Dog",
          petName: "Буся",
          ownerName: "Jogn",
          ownerContat: "89523691948",
          description: "From 14-22 july",
          address: "Зины портноой 11",
        },
      },
    ],
  },
};

export const dataSlice = createSlice({
  name: "markers data",
  initialState,
  reducers: {
    addNewMarker: (state, action) => {
      state.geojson.features.push(action.payload);
    },
  },
});

export const { addNewMarker } = dataSlice.actions;

export default dataSlice.reducer;
