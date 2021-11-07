import { Button, Card, FormGroup, Grid, TextField } from '@material-ui/core'
import { FC, useState } from 'react'
import CustomInput from 'src/components/CustomInput'
import { DefaultLoginService } from 'src/services/impl/default.login.service'
import { LoginService } from 'src/services/login.service'

const loginService: LoginService = new DefaultLoginService()

const Login: FC = () => {
    const [account, setAccount] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = () => {
        console.log(account)
        console.log(password)
        loginService.login(account, password).then((result) => {
            if (result != null) {
                sessionStorage.setItem('jwt', result)
                location.href = '/apk'
            }
        })
    }
    const hanldeAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccount(event.target.value)
    }
    const hanldePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    return (
        <Grid container md rowSpacing={3} sx={{ textAlign: 'center', paddingTop: 20 }}>
            <Grid item xs={12}>
                <TextField sx={{ width: 300 }} required id="outlined-required" onChange={hanldeAccount} label="Accoount" defaultValue="" />
            </Grid>
            <Grid item xs={12}>
                <TextField required sx={{ width: 300 }} id="outlined-disabled" label="Password" onChange={hanldePassword} defaultValue="" type="password" />
            </Grid>
            <Grid item xs={12}>
                <Button type="button" variant="contained" color="primary" onClick={handleLogin}>
                    Log in
                </Button>
            </Grid>
        </Grid>
    )
}

export default Login
