import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet-async';
import {forwardRef, useEffect, useState} from 'react';
// @mui
import {Box} from '@mui/material';
import {getSetting} from "../api/api";
// ----------------------------------------------------------------------


const Page = forwardRef(
    ({children, title = '', meta, ...other}, ref) => {
        const [setting, SetSetting] = useState({});
        useEffect(() => {
            // 获取个人设置
            getSetting().then(
                (res) => {
                    SetSetting(res.Data)
                }
            )
        }, []);
        return <>
            <Helmet>
                <title>{`${title} | ${setting.name || ''}`}</title>
                {meta}
            </Helmet>

            <Box ref={ref} {...other}>
                {children}
            </Box>
        </>
    });

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.node,
};

export default Page;
