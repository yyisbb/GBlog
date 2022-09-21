import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
// material
import {styled} from '@mui/material/styles';
import {Box, Link, Drawer, Typography, Avatar} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';
import {getSetting} from "../../api/api";
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));

const AccountStyle = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({isOpenSidebar, onCloseSidebar}) {
    const {pathname} = useLocation();

    const isDesktop = useResponsive('up', 'lg');
    const [setting, SetSetting] = useState({});
    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [pathname]);// eslint-disable-line

    useEffect(() => {

        // 获取个人设置
        getSetting().then(
            (res) => {
                SetSetting(res.Data)
            }
        )
    }, []);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {height: 1, display: 'flex', flexDirection: 'column'},
            }}
        >
            <Box sx={{px: 2.5, py: 3, display: 'inline-flex'}}>
                <Logo/>
            </Box>

            <Box sx={{mb: 5, mx: 2.5}}>
                <Link underline="none" component={RouterLink} to="/about">
                    <AccountStyle>
                        <Avatar src={setting.avatar} alt="photoURL"/>
                        <Box sx={{ml: 2}}>
                            <Typography variant="subtitle2" sx={{color: 'text.primary'}}>
                                {setting.name || ''}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                {setting.email || ''}
                            </Typography>
                        </Box>
                    </AccountStyle>
                </Link>
            </Box>

            <NavSection navConfig={navConfig}/>

            <Box sx={{flexGrow: 1}}/>

        </Scrollbar>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: {width: DRAWER_WIDTH},
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: 'background.default',
                            borderRightStyle: 'dashed',
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
}
