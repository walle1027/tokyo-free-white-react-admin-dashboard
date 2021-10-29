import { LoginService } from '../login.service'
import service from '../service'
export class DefaultLoginService implements LoginService {
    login(account: string, password: string): Promise<string> {
        return service.post('/backend/login', { account: account, password })
    }
}
