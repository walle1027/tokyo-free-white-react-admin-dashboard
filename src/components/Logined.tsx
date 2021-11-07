import { FC, ReactElement, ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface LoginedProps {
    children?: ReactNode
}

const Logined: FC<LoginedProps> = ({ children }) => {
    const jwt = sessionStorage.getItem('jwt')
    return <>{jwt ? children : <Navigate to="/login" />}</>
}

export default Logined
