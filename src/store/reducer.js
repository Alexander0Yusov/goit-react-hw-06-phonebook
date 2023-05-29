import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';

export const reducer = combineReducers({
  firstCombineReducer: contactsReducer,
});

// вариант
// export const reducer = {
//   contacts: contactsReducer,
// };
