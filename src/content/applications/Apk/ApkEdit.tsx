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
                        <CardHeader title="Input Fields" />
                        <Divider />
                        <CardContent>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
                                    <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
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
                                </div>
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
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Select Inputs" />
                        <Divider />
                        <CardContent>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    {/* <TextField id="outlined-select-currency" select label="Select" value={currency} onChange={handleChange} helperText="Please select your currency">
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField> */}
                                    {/* <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Native select"
                                        value={currency}
                                        onChange={handleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText="Please select your currency"
                                    >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField> */}
                                </div>
                                <div>
                                    {/* <TextField id="filled-select-currency" select label="Select" value={currency} onChange={handleChange} helperText="Please select your currency" variant="filled">
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="filled-select-currency-native"
                                        select
                                        label="Native select"
                                        value={currency}
                                        onChange={handleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText="Please select your currency"
                                        variant="filled"
                                    >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField> */}
                                </div>
                                <div>
                                    {/* <TextField id="standard-select-currency" select label="Select" value={currency} onChange={handleChange} helperText="Please select your currency" variant="standard">
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="standard-select-currency-native"
                                        select
                                        label="Native select"
                                        value={currency}
                                        onChange={handleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText="Please select your currency"
                                        variant="standard"
                                    >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField> */}
                                </div>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Switches" />
                        <Divider />
                        <CardContent>
                            <Switch {...label} defaultChecked />
                            <Switch {...label} />
                            <Switch {...label} disabled defaultChecked />
                            <Switch {...label} disabled />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Checkboxes &amp; Radios" />
                        <Divider />
                        <CardContent>
                            <Checkbox {...label} defaultChecked />
                            <Checkbox {...label} defaultChecked color="secondary" />
                            <Checkbox {...label} defaultChecked color="success" />
                            <Checkbox {...label} defaultChecked color="default" />
                            <Checkbox
                                {...label}
                                defaultChecked
                                sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}
                            />
                            <Divider sx={{ my: 5 }} />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Sliders" />
                        <Divider />
                        <CardContent>
                            <Box sx={{ width: 200 }}>
                                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                    <VolumeDown />
                                    <Slider aria-label="Volume" value={32} />
                                    <VolumeUp />
                                </Stack>
                                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ApkEdit
