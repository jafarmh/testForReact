import { configureStore } from '@reduxjs/toolkit'
import productsData from './Products'
import usersData from './Users'

// ...

export const store = configureStore({
  reducer: {
    usersData,
    productsData
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch