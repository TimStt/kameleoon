import { combineReducers } from 'redux';
import {api} from "@app/store/api/api.ts";
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
