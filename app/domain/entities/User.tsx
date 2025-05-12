export interface UserInterface {
    slug: number;
    email: string;
    password: string;
    is_staff: boolean;
    is_active: boolean;
    is_superuser: boolean;
    repeatPassword?: string;
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">;

export interface UserLogin extends UserInterface{
    token: string;
}