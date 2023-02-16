import { createSlice } from "@reduxjs/toolkit";

const viewsSlice = createSlice({
    name: 'views',
    initialState: {
        ids: [],
    },
    reducers: {
        addView: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeView: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
});

export const addView = viewsSlice.actions.addView;
export const removeView = viewsSlice.actions.removeView;
export default viewsSlice.reducer;