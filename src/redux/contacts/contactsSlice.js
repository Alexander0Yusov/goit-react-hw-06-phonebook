import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: contactsInitialState,

  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },

    removeContact: (state, action) => {
      state.contacts = [...state.contacts].filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
