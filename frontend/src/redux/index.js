import { WidgetReducer } from '../components/WidgetReducer';

const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
  chart: WidgetReducer,
});

export default rootReducer;