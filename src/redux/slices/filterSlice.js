import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState:{
        categoryId: 0,
        currentPage: 1,
        searchValue: "",
        sort:{
            name: 'rating',
            sortProp: 'rating',
        }
    },
    reducers:{
        setCategoryId: (state, action) => {
            state.categoryId = action.payload; 
        },
        setSortType: (state,action) => {
            state.sort= action.payload;
        },
        setCurrentPage: (state,action) => {
            state.currentPage = action.payload;
        },
        setFilters: (state,action) => {
            state.currentPage = Number(action.payload.currentPage)
            state.sort.sortProp = action.payload.currentPage
            state.categoryId = Number(action.payload.categoryId)
        },
        setSearchValue: (state, action) => {
            state.search = action.payload;
        }
        
    }
})

export const {setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;