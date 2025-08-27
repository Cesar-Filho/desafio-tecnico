import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Contact } from '~/@types/contacts';

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.unshift(action.payload);
    },
  },
});

export const ContactsActions = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
