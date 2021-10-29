import axios from 'axios'
import { Result } from 'src/models/common'

const service = axios.create({
    baseURL: 'http://23.237.34.178/api',
    timeout: 1000 * 60 * 10,
})

service.interceptors.request.use(
    (config) => {
        const jwt = sessionStorage.getItem('jwt')
        config.headers['Authorization'] = jwt ? jwt : ''
        return config
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error)
    },
)

service.interceptors.response.use(
    (response) => {
        const data: Result<any> = response.data as Result<any>
        if (data.code == 0) {
            return data.data
        } else {
            alert(data.message)
            throw new Error(data.message)
        }
    },
    (error) => {
        alert(error)
        throw error
    },
)

export default service
