export interface LoginService {
    login(account: string, password: string): Promise<string>
}
