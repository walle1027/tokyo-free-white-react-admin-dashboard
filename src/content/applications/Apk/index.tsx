import { Helmet } from 'react-helmet-async'
import PageHeader from './PageHeader'
import PageTitleWrapper from 'src/components/PageTitleWrapper'
import { Box, Container, Grid } from '@material-ui/core'
import Footer from 'src/components/Footer'
import ApkTable from './ApkTable'
import { ApkService } from 'src/services/apk.service'
import { MockApkService } from 'src/services/impl/mock.apk.service'
import { ApkServiceImpl } from 'src/services/impl/default.apk.service'

function ApplicationsTransactions() {
    const apkService: ApkService = new ApkServiceImpl()
    return (
        <>
            <Helmet>
                <title>Apk - Management</title>
            </Helmet>
            {/* <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper> */}
            <Box sx={{ padding: 2 }}>
                <ApkTable apkService={apkService} />
            </Box>
            <Footer />
        </>
    )
}

export default ApplicationsTransactions
