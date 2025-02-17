import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    auth: authReducer,
  },
});
