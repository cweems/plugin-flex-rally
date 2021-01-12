import { combineReducers } from 'redux';

import { reduce as ContactListReducer } from './ContactListState';

// Register your redux store under a unique namespace
export const namespace = 'flex-rally';

// Combine the reducers
export default combineReducers({
  contactList: ContactListReducer
});
