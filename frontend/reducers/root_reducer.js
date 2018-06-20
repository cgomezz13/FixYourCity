import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import commentsReducer from './comments_reducer';
import incidentsReducer from './incidents_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  comments: commentsReducer,
  incidents: incidentsReducer
});
