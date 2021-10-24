export class Pagination<T> {
    pageNo = 1
    pageSize = 10
    total: number
    rows: T[]
}

export interface Result<T> {
    code?: number
    message?: string
    data?: T
}
