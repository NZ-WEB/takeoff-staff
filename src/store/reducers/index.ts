import { combineReducers } from 'redux';
import { contactsReducer } from './contactsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
