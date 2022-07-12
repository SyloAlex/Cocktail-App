import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
    'cocktails/fetchCocktails',
    async () => {
        return fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=')
                    .then((res) => res.json())
    }
)

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState: {
        cocktails: [],
        cocktail: [],
        loading: false,
        error: false
    },
    extraReducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.cocktails = action.payload.drinks;
            state.loading = false;
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        }
    }
})

export default cocktailSlice.reducer;