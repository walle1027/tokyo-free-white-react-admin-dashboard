import { ApkModel } from 'src/models/apk.model'
import { Pagination } from 'src/models/common'
import { ApkService } from 'src/services/apk.service'
import service from '../service'
export class ApkServiceImpl implements ApkService {
    list(search: string, pageNo: number, pageSize: number): Promise<Pagination<ApkModel>> {
        return service.get(`/search?q=${search}&pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    save(apk: ApkModel): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
