import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        addToFavoriteList(state, action) {
            const { carId } = action.payload;
            if (!state.includes(carId)) {
                state.push(carId);
            }
        },
        
        deletToFavoriteList(state, action) {
            const { carId } = action.payload;
            return state.filter((id) => id !== carId);
        },
    },
});
export const { addToFavoriteList, deletToFavoriteList } = favoriteSlice.actions;
export default favoriteSlice.reducer;