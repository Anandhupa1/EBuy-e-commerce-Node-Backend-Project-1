import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";
import {authSlice} from "./auth-slice";
//persitant store start
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { loaderSlice } from "./loader-slice";
import { staticSlice } from "./static.slice";







//persitant store start









// 1. combine reducers (slicers content into a single reducer)
const rootReducer = combineReducers({
    cart : cartSlice.reducer,
    auth : authSlice.reducer,
    loader:loaderSlice.reducer,
    static:staticSlice.reducer,
    
})
// 2. create a basic configuration to use local storage
const persistConfig = {
    key:"root",
    storage:storage,
};
// 3. persist the  reducers
const persistedReducers = persistReducer(persistConfig,rootReducer);
// 4. send the persisted reducers to the store

const store = configureStore({reducer:persistedReducers});

//5. create a persisted version of the store
const persistore = persistStore(store);














export {store,persistore}