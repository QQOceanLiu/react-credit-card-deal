import { createStore, combineReducers } from 'redux';
import dealsReducer from '../reducers/deals';

export default () => {
    const store = createStore(
        combineReducers({
            deals: dealsReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
