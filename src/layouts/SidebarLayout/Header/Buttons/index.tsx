import { Box } from '@material-ui/core'
import HeaderSearch from './Search'
import HeaderNotifications from './Notifications'

function HeaderButtons() {
    return (
        <Box sx={{ mr: 1 }}>
            <HeaderSearch />
            <Box sx={{ mx: 0.5 }} component="span">
                <HeaderNotifications />
            </Box>
        </Box>
    )
}

export default HeaderButtons
