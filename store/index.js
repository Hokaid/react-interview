import { createStore, combineReducers } from 'redux';
import AuthReducers from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist' 

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const RootReducers = combineReducers({
    // reducers
    AuthReducers,
})

const persistedReducer = persistReducer(persistConfig, RootReducers);

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
