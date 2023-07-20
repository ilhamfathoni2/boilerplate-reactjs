import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ThemeState {
  theme: string;
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeReducer.actions;

export default themeReducer.reducer;
