import {combineReducers} from 'redux';
import assets from './assets'

const rootReducer = combineReducers({
    assets: assets,
});
  
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer