import axios from 'axios'
import { Result } from 'src/models/common'

const service = axios.create({
    baseURL: 'http://',
    timeout: 1000 * 60 * 10,
})

service.interceptors.request.use(
    (config) => {
        console.log(config)
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
            return data
        } else {
            console.log(data.message)
        }
    },
    (error) => {},
)

export default service
