import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from './slices/overViewSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        overview: overviewReducer,
        user: userReducer,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;