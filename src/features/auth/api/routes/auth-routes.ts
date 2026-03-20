export const authRoutes = {
    signIn: () => "/auth/login",
    register: () => "/auth/register",
    me: () => "/me",

    refreshToken: () => "/auth/refresh-token",
    forgotPassword: () => "/auth/forgot-password",
    resetPassword: (token: string) => `/auth/reset-password?token=${token}`,
};