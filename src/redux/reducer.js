import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const reducer = combineReducers({
  contactsCombine: contactsReducer,
  filterCombine: filterReducer,
});

// вариант
// export const reducer = {
//   contacts: contactsReducer,
// };
