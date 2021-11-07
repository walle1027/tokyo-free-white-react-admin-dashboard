import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Container,
    Divider,
    Radio,
    Stack,
    Slider,
    FormControl,
    FormLabel,
    Grid,
    Switch,
    TextField,
    RadioGroup,
    FormControlLabel,
} from '@material-ui/core'
import { pink } from '@material-ui/core/colors'
import { VolumeDown, VolumeUp } from '@material-ui/icons'
import { FC } from 'react'
import { ApkModel } from 'src/models/apk.model'
import { ApkService } from 'src/services/apk.service'

export interface ApkEditProps {
    apkService: ApkService
    apk: ApkModel
}

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const ApkEdit: FC<ApkEditProps> = ({ apkService, apk }) => {
    return (
        <Container maxWidth="lg">
            <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Apk Infos" />
                        <Divider />
                        <CardContent>
                            <Box component="form" noValidate autoComplete="off">
                                <Grid container spacing={3}>
                                    <Grid item xs={6} lg={6} sm={6}>
                                        <TextField fullWidth disabled id="outlined-disabled" label="AppId" defaultValue={apk.appId} />
                                    </Grid>
                                    <Grid item xs={6} lg={6} sm={6}>
                                        <TextField fullWidth id="outlined-disabled" label="App Name" defaultValue={apk.appName} />
                                    </Grid>
                                    <Grid item xs={6} lg={6} sm={6}>
                                        <TextField fullWidth id="outlined-disabled" label="Type" defaultValue={apk.type} />
                                    </Grid>
                                    <Grid item xs={6} lg={6} sm={6}>
                                        <TextField fullWidth id="outlined-disabled" label="Category" defaultValue={apk.category} />
                                    </Grid>
                                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Read Only"
                                        defaultValue="Hello World"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        id="outlined-number"
                                        label="Number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField id="outlined-search" label="Search field" type="search" />
                                    <TextField id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" />
                                </Grid>
                                <div>
                                    <TextField required id="filled-required" label="Required" defaultValue="Hello World" variant="filled" />
                                    <TextField disabled id="filled-disabled" label="Disabled" defaultValue="Hello World" variant="filled" />
                                    <TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled" />
                                    <TextField
                                        id="filled-read-only-input"
                                        label="Read Only"
                                        defaultValue="Hello World"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="filled"
                                    />
                                    <TextField
                                        id="filled-number"
                                        label="Number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                    />
                                    <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                                    <TextField id="filled-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="filled" />
                                </div>
                                <div>
                                    <TextField required id="standard-required" label="Required" defaultValue="Hello World" variant="standard" />
                                    <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" variant="standard" />
                                    <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Read Only"
                                        defaultValue="Hello World"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        id="standard-number"
                                        label="Number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />
                                    <TextField id="standard-search" label="Search field" type="search" variant="standard" />
                                    <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" />
                                </div>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ApkEdit
