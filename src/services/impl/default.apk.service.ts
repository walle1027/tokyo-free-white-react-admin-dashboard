import { ApkModel } from 'src/models/apk.model'
import { Pagination } from 'src/models/common'
import { ApkService } from 'src/services/apk.service'
import service from '../service'
export class ApkServiceImpl implements ApkService {
    disable(id: number): Promise<void> {
        return service.put(`/apk/disable/${id}`)
    }
    enable(id: number): Promise<void> {
        return service.put(`/apk/enable/${id}`)
    }
    list(search: string, pageNo: number, pageSize: number): Promise<Pagination<ApkModel>> {
        return service.get(`/apk/search?q=${search}&pageNo=${pageNo}&pageSize=${pageSize}`)
    }
    save(apk: ApkModel): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
