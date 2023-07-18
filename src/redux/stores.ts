import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCountConfig = {
  key: "count",
  storage,
};

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedReducerCounter = persistReducer(
  persistCountConfig,
  counterReducer.reducer
);

const persistedReducerCart = persistReducer(
  persistCartConfig,
  cartReducer.reducer
);

const store = configureStore({
  reducer: {
    counter: persistedReducerCounter,
    cart: persistedReducerCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
