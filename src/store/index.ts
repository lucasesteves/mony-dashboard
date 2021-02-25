import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { persist as persistReducer } from './persistReducer';

export type AppState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();

const reducer = persistReducer(rootReducer);

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

