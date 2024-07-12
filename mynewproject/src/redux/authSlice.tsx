import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    isLoading: boolean;
    isError: boolean;
    isLogin: boolean;
    message: string;
    username: string;
    userid: number
  }

  const initialState: AuthState = {
    isError: false,
    isLoading: false,
    isLogin: false,
    message: "",
    username: "",
    userid: 0
  };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<{username: string, userid: number }>) => {
      state.isLoading = false;
      state.isError = false;
      state.isLogin = true;
      state.username = action.payload.username
      state.userid = action.payload.userid
      },
      loginRequest: (state) =>{
        state.isLoading = true;
        state.isError = false;
      },
      loginFailure: (state, action: PayloadAction<string>) =>{
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }
    }
  })

  export const { login, loginRequest, loginFailure } = authSlice.actions