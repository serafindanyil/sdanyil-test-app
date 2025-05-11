import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import cardSlice from "./card/cardSlice.ts";

const cardPersistConfig = {
	key: "card",
	storage,
};

const persistedCardReducer = persistReducer(
	cardPersistConfig,
	cardSlice.reducer
);

const store = configureStore({
	reducer: {
		card: persistedCardReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
