import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
    'cocktails/fetchCocktails',
    async () => {
        return fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=')
                    .then((res) => res.json())
    }
)

export const fetchSingleCocktail = createAsyncThunk(
    'cocktails/fetchSingleCocktail',
    async (id) => {
        return fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                    .then((res) => res.json())
    }
)

export const fetchSearchCocktail = createAsyncThunk(
    'cocktails/fetchSearchCocktail',
    async (name) => {
        return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
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
        },
        [fetchSingleCocktail.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSingleCocktail.fulfilled]: (state, action) => {
            state.cocktail = action.payload.drinks;
            state.loading = false;
        },
        [fetchSingleCocktail.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        [fetchSearchCocktail.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchSearchCocktail.fulfilled]: (state, action) => {
            state.cocktails = action.payload.drinks;
            state.loading = false;
        },
        [fetchSearchCocktail.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        }
    }
})

export default cocktailSlice.reducer;