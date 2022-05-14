import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  geojson: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
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
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [30.2545, 59.8554],
        },
        properties: {
          petType: "Dog",
          petName: "Bysia",
          ownerName: "Jogn",
          ownerContat: "89523691948",
          description: "From 14-22 july",
        },
      },
    ],
  },
};

export const dataSlice = createSlice({
  name: "markers data",
  initialState,
  reducers: {
    a: (state, action) => {},
  },
});

export const { a } = dataSlice.actions;

export default dataSlice.reducer;
