import { Button } from '@material-ui/core'
import { FC, useState } from 'react'
import CustomInput from 'src/components/CustomInput'
import { DefaultLoginService } from 'src/services/impl/default.login.service'
import { LoginService } from 'src/services/login.service'

const loginService: LoginService = new DefaultLoginService()

const Login: FC = () => {
    const [account, setAccount] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = () => {
        loginService.login(account, password).then((result) => {
            if (result != null) {
                sessionStorage.setItem('jwt', result)
                location.href = '/apk'
            }
        })
    }
    return (
        <div className="App">
            <form className="form">
                <CustomInput
                    labelText="Account"
                    id="account"
                    formControlProps={{
                        fullWidth: true,
                    }}
                    handleChange={(event) => {
                        setAccount(event.target.value)
                    }}
                    type="text"
                />
                <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                        fullWidth: true,
                    }}
                    handleChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    type="password"
                />

                <Button type="button" color="primary" className="form__custom-button" onClick={handleLogin}>
                    Log in
                </Button>
            </form>
        </div>
    )
}

export default Login
