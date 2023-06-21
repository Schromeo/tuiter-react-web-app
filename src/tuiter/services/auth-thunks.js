import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk("user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk("auth/profile", async (username) => {
    return await authService.profile(username);
});

export const getProfileThunk = createAsyncThunk("auth/profile", async (username) => {
    return await authService.getProfile(username);
});

export const logoutThunk = createAsyncThunk(
"auth/logout", async () => {
return await authService.logout();
});

export const updateUserThunk = createAsyncThunk("user/updateUser", async ({ username, firstName, lastName }) => {
    console.log("updateUserThunk", username, firstName, lastName);
    return await authService.updateUser({ username, firstName, lastName });
});

export const registerThunk = createAsyncThunk("user/register", async(user) => {
    const registeredUser = await authService.register(user);
    return registeredUser;
})