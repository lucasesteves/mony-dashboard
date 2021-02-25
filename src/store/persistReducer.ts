import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const persist = (reducers:any) => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist:['auth']
    },
    reducers
  );

  return persistedReducer;
};
