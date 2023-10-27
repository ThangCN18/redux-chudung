//tạo kho để lưu các reducer
import { createStore, combineReducers } from "redux"
import userReducer from "./Reducer/userReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers(
    {
        user: userReducer
    }
)
const persistConfig = {
    key: 'root',
    storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)



