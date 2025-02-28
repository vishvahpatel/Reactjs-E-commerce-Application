import { combineReducers, configureStore } from '@reduxjs/toolkit';

import persistStore from 'redux-persist/lib/persistStore'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/lib/persistReducer'
import CartReducer from './redux/Slice/CartSlice'
import  logUserReducer  from './redux/Slice/logUserSlice'
import WishlistReducer  from './redux/Slice/WishlistSlice'

const persistConfig={
        key:'root',
        storage,
    }

const rootReducer = combineReducers({
    cart:CartReducer,
    wishlist:WishlistReducer,
    loguser:logUserReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
        reducer:persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                },
            }),
    })
    export const persistor = persistStore(store);



