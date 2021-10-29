import { Helmet } from 'react-helmet-async'
import PageHeader from './PageHeader'
import PageTitleWrapper from 'src/components/PageTitleWrapper'
import { Box, Container, Drawer, Grid } from '@material-ui/core'
import Footer from 'src/components/Footer'
import ApkTable from './ApkTable'
import { ApkService } from 'src/services/apk.service'
import { ApkServiceImpl } from 'src/services/impl/default.apk.service'
import { useState } from 'react'
import { ApkModel } from 'src/models/apk.model'
import ApkEdit from './ApkEdit'

function ApplicationsTransactions() {
    const apkService: ApkService = new ApkServiceImpl()
    const [open, setOpen] = useState<boolean>(false)
    const [apk, setApk] = useState<ApkModel>({})
    return (
        <>
            <Helmet>
                <title>Apk - Management</title>
            </Helmet>
            {/* <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper> */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <ApkEdit apkService={apkService} apk={apk} />
            </Drawer>
            <Box sx={{ padding: 2 }}>
                <ApkTable
                    apkService={apkService}
                    editFunction={(apk) => {
                        setOpen(true)
                        setApk(apk)
                    }}
                />
            </Box>
            <Footer />
        </>
    )
}

export default ApplicationsTransactions
