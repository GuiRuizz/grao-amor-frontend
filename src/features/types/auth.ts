export interface IUser {
    id: string;
    name: string;
    email: string;
    role: string;
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}