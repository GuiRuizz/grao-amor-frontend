export const authRoutes = {
    signIn: () => "/auth/login",
    register: () => "/users",
    me: () => "/me",

    refreshToken: () => "/auth/refresh-token",
    forgotPassword: () => "/auth/forgot-password",
    resetPassword: (token: string) => `/auth/reset-password?token=${token}`,
};