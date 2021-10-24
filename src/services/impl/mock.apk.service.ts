import { ApkModel } from 'src/models/apk.model'
import { Pagination } from 'src/models/common'
import { ApkService } from '../apk.service'

export class MockApkService implements ApkService {
    list(search: string, pageNo: number, pageSize: number): Promise<Pagination<ApkModel>> {
        return new Promise((r, e) => {
            r({
                pageSize: 10,
                pageNo: 1,
                total: 11,
                rows: [],
            })
        })
    }
    save(apk: ApkModel): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
