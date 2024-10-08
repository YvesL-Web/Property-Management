import {
	ActivateUserData,
	LoginResponse,
	LoginUserData,
	RegisterUserData,
	RegisterUserResponse,
	ResetPasswordConfirmData,
	ResetPasswordData,
	SocialAuthArgs,
	SocialAuthResponse,
	UserResponse,
} from "@/types";
import { baseApiSlice } from "../api/baseApiSlice";

export const authApiSlice = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerUser: builder.mutation<RegisterUserResponse, RegisterUserData>({
			query: (userDate) => ({
				url: "/auth/users/",
				method: "POST",
				body: userDate,
			}),
		}),
		loginUser: builder.mutation<LoginResponse, LoginUserData>({
			query: (credentials) => ({
				url: "/auth/login/",
				method: "POST",
				body: credentials,
			}),
		}),
		activateUser: builder.mutation<void, ActivateUserData>({
			query: (credentials) => ({
				url: "/auth/users/activation/",
				method: "POST",
				body: credentials,
			}),
		}),
		resetPasswordRequest: builder.mutation<void, ResetPasswordData>({
			query: (formData) => ({
				url: "/auth/users/reset_password/",
				method: "POST",
				body: formData,
			}),
		}),
		resetPasswordConfirm: builder.mutation<void, ResetPasswordConfirmData>({
			query: (formData) => ({
				url: "/auth/users/reset_password_confirm/",
				method: "POST",
				body: formData,
			}),
		}),
		logoutUser: builder.mutation<void, void>({
			query: () => ({
				url: "/auth/logout/",
				method: "POST",
			}),
		}),
		refreshJWT: builder.mutation<void, void>({
			query: () => ({
				url: "/auth/refresh/",
				method: "POST",
			}),
		}),
		getUser: builder.query<UserResponse, void>({
			query: () => ({
				url: "/auth/users/me/",
				method: "GET",
			}),
		}),
		socialAuthentication: builder.mutation<SocialAuthResponse, SocialAuthArgs>({
			query: ({ provider, state, code }) => ({
				url: `/auth/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}),
		}),
	}),
});

export const {
	useSocialAuthenticationMutation,
	useActivateUserMutation,
	useLoginUserMutation,
	useLogoutUserMutation,
	useGetUserQuery,
	useRefreshJWTMutation,
	useRegisterUserMutation,
	useResetPasswordConfirmMutation,
	useResetPasswordRequestMutation,
} = authApiSlice;
