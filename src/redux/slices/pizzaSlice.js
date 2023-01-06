import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const {
            order,
            sortBy,
            category,
            search,
            currentPage,
        } = params;
        const { data } = await axios.get(`https://634da70cf34e1ed8267b796c.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`);
        return data;
    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        items: [],
        status: '',
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = 'loading';
            state.items = [];
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
            
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        })
        // [fetchPizzas.pending]: (state, action) => {
        //     state.status = 'loading';
        //     state.items = [];
        // },
        // [fetchPizzas.fulfilled]: (state, action) => {
        //     state.items = action.payload
        //     state.status = 'success';
        // },
        // [fetchPizzas.rejected]: (state, action) => {
        //     state.status = 'error';
        //     state.items = [];
        // },
    }
})

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;