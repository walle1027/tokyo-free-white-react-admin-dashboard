import { FormControl, Input, InputLabel, PropTypes } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { ChangeEvent, FC } from 'react'

const CustomInput: FC<CustomInputProps> = (props) => {
    const { formControlProps, labelText, id, labelProps, inputProps, error, white, inputRootCustomClasses, success, handleChange, type } = props
    return (
        <FormControl {...formControlProps}>
            {labelText !== undefined ? (
                <InputLabel htmlFor={id} {...labelProps}>
                    {labelText}
                </InputLabel>
            ) : null}
            <Input id={id} onChange={handleChange} {...inputProps} type={type} />
        </FormControl>
    )
}

export interface CustomInputProps {
    labelText?: string
    labelProps?: any
    id?: string
    inputProps?: any
    formControlProps?: any
    inputRootCustomClasses?: string
    error?: boolean
    success?: boolean
    white?: boolean
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

export default CustomInput
