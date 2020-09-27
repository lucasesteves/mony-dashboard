import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import persistReducer from './persistReducer';


const reducer = persistReducer(rootReducer);

const store = createStore(reducer);
const persistor = persistStore(store);


export { store, persistor };
