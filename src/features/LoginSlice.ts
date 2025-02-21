import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser, LoginCredentials, getPasswordResetLink } from "../api/LoginAPI";

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

// Login user action
export const loginUser = createAsyncThunk(
    "Login/login",
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        const response = await getLoggedInUser(credentials);
        if ("access" in response) {
            return response;
        }
        return rejectWithValue(response.detail);
    }
);

// Forgot password action
export const forgotPassword = createAsyncThunk(
    "Login/forgotPassword",
    async (email: string, { rejectWithValue }) => {
        const response = await getPasswordResetLink(email);
        if (typeof response === "string" && response.startsWith("An error occurred")) {
            return rejectWithValue(response);
        }
        return response;
    }
);

// Login slice
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
                state.loggedUser = action.payload as LoginResponse;
                state.error = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.loggedUser = null;
                state.error = action.payload as string;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default loginSlice.reducer;
