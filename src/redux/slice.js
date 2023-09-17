import { createSlice } from '@reduxjs/toolkit';


const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        // Add filtering-related state
        filters: {
            selectedBrand: null,
            selectedPrice: null,
            fromMileage: '',
            toMileage: '',
        },
    }, reducers: {
        
        setSelectedBrand: (state, action) => {
            state.filters.selectedBrand = action.payload;
        },
        setSelectedPrice: (state, action) => {
            state.filters.selectedPrice = action.payload;
        },
        setFromMileage: (state, action) => {
            state.filters.fromMileage = action.payload;
        },
        setToMileage: (state, action) => {
            state.filters.toMileage = action.payload;
        },
    },

})

export const { setSelectedBrand,
    setSelectedPrice,
    setFromMileage,
    setToMileage, } = carsSlice.actions;