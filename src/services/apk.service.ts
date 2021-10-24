import { ApkModel } from 'src/models/apk.model'
import { Pagination, Result } from 'src/models/common'

export interface ApkService {
    list(search: string, pageNo: number, pageSize: number): Promise<Pagination<ApkModel>>

    save(apk: ApkModel): Promise<void>
}
