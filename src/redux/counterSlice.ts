import { createSlice } from "@reduxjs/toolkit"
import { AppThunk } from "./store.ts"

export type CounterState = {
  count: number
}

export const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementSuccess: (state, action) => {
      state.count += action.payload
    },
    decrementSuccess: (state, action) => {
      state.count -= action.payload
    }
  }
})

export const { incrementSuccess, decrementSuccess } = counterSlice.actions

export const incrementAsync = (): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(incrementSuccess(1))
  }, 1000)
}
export const decrementAsync = (): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(decrementSuccess(1))
  }, 1000)
}

export default counterSlice.reducer