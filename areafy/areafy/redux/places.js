import { createSlice } from "@reduxjs/toolkit";

const placesSlice = createSlice({
    name: 'places',
    initialState: {
        ids: [1, 2, 3]
    },
    reducers: {
        addPlace: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removePlace: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
});

export const addPlace = placesSlice.actions.addPlace;
export const removePlace = placesSlice.actions.addPlace;
export default placesSlice.reducer;