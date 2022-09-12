import PropTypes from 'prop-types';
import {useEffect} from 'react';
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

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

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
                        <Avatar src={"https://img1.baidu.com/it/u=873106765,2587410047&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662656400&t=5cfd0b69720c1147364aa4104b1101e8"} alt="photoURL"/>
                        <Box sx={{ml: 2}}>
                            <Typography variant="subtitle2" sx={{color: 'text.primary'}}>
                                Gravity`Blog
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                yyisbb@outlook.com
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
