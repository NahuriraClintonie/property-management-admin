import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser, LoginCredentials,getPasswordResetLink} from "../api/LoginAPI";

interface LoginResponse {
    access: string;
    refresh: string;
    user_id: number; 
    email: string; 
  }
interface LoginState {
    loading: boolean;
    loggedUser: LoginResponse | null;
    error: string;
}

const initialState: LoginState = {
    loading: false,
    loggedUser: null,
    error: "",
};

export const loginUser = createAsyncThunk(
    "Login/login",
    async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await getLoggedInUser(credentials);
        if (response && 'access' in response && 'refresh' in response && 'user_id' in response && 'email' in response) {
            return response as LoginResponse;
        }
        return {
            access: "",
            refresh: "",
            user_id: 0,
            email: "",
        };
    }
);

export const forgotPassword = createAsyncThunk(
    "Login/forgotPassword",
    async (credentials: string) => {
        const response = await getPasswordResetLink(credentials);
        return response;    
    }
);

 const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.loggedUser = action.payload;
                state.error = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.loggedUser = null;
                state.error = action.error.message || "An unknown error occurred";
            })
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An unknown error occurred";
            });
    },
});

export default loginSlice.reducer;
