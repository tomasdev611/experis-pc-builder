import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import { getAllItems } from '../../services/api.service';
import { Item } from '../../models/Item';

const initialState = {
	loading: false,
  items: [],
  cartItems: [] as Item[],
};

export const fetchAllItems = createAsyncThunk('items', async () => {
  const response = await getAllItems();

  return response.data;
});

export const buildSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const idExist = state.cartItems.find((item: Item) => item.id === payload.id);
      if (idExist) {
        state.cartItems = state.cartItems.map((item: Item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: item.count + 1
            }
          }
          return item;
        })
      } else {
        state.cartItems = [
          ...state.cartItems,
          {
            ...payload,
            count: 1
          }
        ];
      }
      toast.success('Added Successfully!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    decreaseFromCart: (state, { payload }) => {
      const item = state.cartItems.find((item: Item) => item.id === payload.id);
      if (item && item.count > 1) {
        state.cartItems = state.cartItems.map((item: Item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: item.count - 1
            }
          }
          return item;
        })
      } else {
        state.cartItems = state.cartItems.filter((item: Item) => item.id !== payload.id);
      }
      toast.success('Decreased Successfully!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item: Item) => item.id !== payload.id);
      toast.success('Removed Successfully!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },
  extraReducers: {
    [fetchAllItems.pending.toString()]: (state) => {
      state.loading = true;
    },
    [fetchAllItems.rejected.toString()]: (state) => {
      state.loading = false;
    },
    [fetchAllItems.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    },
  }
});

export const { addToCart, removeFromCart, decreaseFromCart } = buildSlice.actions;

export default buildSlice.reducer;