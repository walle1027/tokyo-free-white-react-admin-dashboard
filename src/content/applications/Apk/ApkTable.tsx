import { FC, ChangeEvent, useState, useEffect } from 'react'
import { format } from 'date-fns'
import numeral from 'numeral'
import PropTypes from 'prop-types'
import {
    Tooltip,
    Divider,
    Box,
    FormControl,
    InputLabel,
    Card,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Select,
    MenuItem,
    Typography,
    useTheme,
    CardHeader,
    Input,
    Button,
    OutlinedInput,
    InputAdornment,
} from '@material-ui/core'

import Label from 'src/components/Label'
import { CryptoOrder, CryptoOrderStatus } from 'src/models/crypto_order'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import RestoreTwoTone from '@material-ui/icons/RestoreTwoTone'
import BulkActions from './BulkActions'
import { ApkService } from 'src/services/apk.service'
import { ApkModel } from 'src/models/apk.model'
import { Search } from '@material-ui/icons'
import { ChangeEventHandler } from 'react-transition-group/node_modules/@types/react'
import service from 'src/services/service'

interface ApkTableProps {
    apkService: ApkService
    editFunction: (apk: ApkModel) => void
}

const ApkTable: FC<ApkTableProps> = ({ apkService, editFunction }) => {
    const [selectedApks, setSelectedApks] = useState<number[]>([])
    const selectedBulkActions = selectedApks.length > 0
    const [pageNo, setPageNo] = useState<number>(0)
    const [pageSize, setPageSize] = useState<number>(10)
    const [apks, setApks] = useState<ApkModel[]>([])
    const [query, setQuery] = useState<string>('')
    const [search, setSearch] = useState<string>('')
    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        apkService.list(query, pageNo, pageSize).then((data) => {
            console.log(data)
            // setApks(data.rows)
            // setTotal(data.total)
        })
    }, [pageNo, pageSize, query])

    const handleSelectAll = (event: ChangeEvent<HTMLInputElement>): void => {
        setSelectedApks(event.target.checked ? apks.map((apk) => apk.id) : [])
    }

    const handleSelectOne = (event: ChangeEvent<HTMLInputElement>, apkId: number): void => {
        if (!selectedApks.includes(apkId)) {
            setSelectedApks((prevSelected) => [...prevSelected, apkId])
        } else {
            setSelectedApks((prevSelected) => prevSelected.filter((id) => id !== apkId))
        }
    }

    const handlePageChange = (event: any, newPage: number): void => {
        setPageNo(newPage)
    }

    const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setPageSize(parseInt(event.target.value))
    }

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value)
    }

    const handleDisable = (id: number): void => {
        apkService
            .disable(id)
            .then(() => {
                return apkService.list(query, pageNo, pageSize)
            })
            .then((data) => {
                setApks(data.rows)
                setTotal(data.total)
            })
    }

    const handleEnable = (id: number): void => {
        apkService
            .enable(id)
            .then(() => {
                return apkService.list(query, pageNo, pageSize)
            })
            .then((data) => {
                setApks(data.rows)
                setTotal(data.total)
            })
    }

    // const paginatedCryptoOrders = applyPagination(filteredCryptoOrders, page, limit)
    const selectedSome = selectedApks.length > 0 && selectedApks.length < apks.length
    const selectedAll = selectedApks.length === apks.length
    const theme = useTheme()

    return (
        <Card>
            <CardHeader
                action={
                    <Box width={300}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Search</InputLabel>
                            {/* <Select value={filters.status || 'all'} onChange={handleStatusChange} label="Status" autoWidth>
                                    {statusOptions.map((statusOption) => (
                                        <MenuItem key={statusOption.id} value={statusOption.id}>
                                            {statusOption.name}
                                        </MenuItem>
                                    ))}
                                </Select> */}
                            <OutlinedInput
                                id="apk-search"
                                type="text"
                                fullWidth={true}
                                onChange={handleSearchChange}
                                value={search}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => {
                                                setQuery(search)
                                                setPageNo(0)
                                            }}
                                            edge="end"
                                        >
                                            <Search fontSize="small" />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Search"
                            />
                        </FormControl>
                    </Box>
                }
                title="Apks "
            />
            <Divider />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {/* <TableCell padding="checkbox">
                                <Checkbox color="primary" checked={selectedAll} indeterminate={selectedSome} onChange={handleSelectAll} />
                            </TableCell> */}
                            <TableCell>Id</TableCell>
                            <TableCell>AppId</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Tags</TableCell>
                            <TableCell>Icon</TableCell>
                            <TableCell>PublishDate</TableCell>
                            <TableCell align="right">Downdloads</TableCell>
                            <TableCell align="right">Reviews</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apks.map((apk) => {
                            const isSelected = selectedApks.includes(apk.id)
                            return (
                                <TableRow hover key={apk.id} selected={isSelected}>
                                    {/* <TableCell padding="checkbox">
                                        <Checkbox color="primary" checked={isSelected} onChange={(event: ChangeEvent<HTMLInputElement>) => handleSelectOne(event, apk.id)} value={isSelected} />
                                    </TableCell> */}
                                    <TableCell>
                                        <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                            {apk.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                            {apk.appId}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                            {apk.appName}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                            {apk.type}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                            {apk.category}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                            {apk.tags}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <img src={apk.icon} />
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" color="text.secondary" noWrap>
                                            {/* {format(apk.publishDate, 'MMMM dd yyyy')} */}
                                            {apk.publishDate}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                            {apk.downdloads}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant="body2" color="text.secondary" noWrap>
                                            {/* {numeral(apk.reviews).format(`${apk.reviews}0,0.00`)} */}
                                            {apk.reviews}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Tooltip title="Edit Apk" arrow>
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        background: theme.colors.primary.lighter,
                                                    },
                                                    color: theme.palette.primary.main,
                                                }}
                                                color="inherit"
                                                size="small"
                                                onClick={() => {
                                                    editFunction(apk)
                                                }}
                                            >
                                                <EditTwoToneIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        {apk.isDeleted === 0 ? (
                                            <Tooltip title="Disable Apk" arrow>
                                                <IconButton
                                                    sx={{
                                                        '&:hover': { background: theme.colors.error.lighter },
                                                        color: theme.palette.error.main,
                                                    }}
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        handleDisable(apk.id)
                                                    }}
                                                >
                                                    <DeleteTwoToneIcon fontSize="small" />
                                                    Disable
                                                </IconButton>
                                            </Tooltip>
                                        ) : (
                                            <Tooltip title="Enable Apk" arrow>
                                                <IconButton
                                                    sx={{
                                                        '&:hover': { background: theme.colors.error.lighter },
                                                        color: theme.palette.success.main,
                                                    }}
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        handleEnable(apk.id)
                                                    }}
                                                >
                                                    <RestoreTwoTone fontSize="small" />
                                                    Enable
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box p={2}>
                <TablePagination
                    component="div"
                    count={total}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={pageNo}
                    rowsPerPage={pageSize}
                    rowsPerPageOptions={[5, 10, 25, 30]}
                />
            </Box>
        </Card>
    )
}

export default ApkTable
