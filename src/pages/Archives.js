import {useEffect, useState} from "react";
// @mui
// material
import {Container, Card, Grid, Stack, Box, Typography, CardHeader, CardContent} from '@mui/material';
// components
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import ArchivesProportion from "../components/ArchivesProportion";
import ArchivesTimeLine from "../components/ArchivesTimeLine";
import Page from '../components/Page';

import {getArticleList,getArticleTimeProportion} from "../api/api";

// ----------------------------------------------------------------------

export default function Archives() {
    const [blogs, SetBlogs] = useState([]);
    const [chartData, SetChartData] = useState([]);
    const [page, SetPage] = useState(1);
    const [count, SetCount] = useState(1);
    useEffect(() => {
        // 获取文章列表
        getArticleList(page).then(
            (res) => {
                SetBlogs(res.Data)
                SetCount(res.Count)
            }
        )
        // 时间占比
        getArticleTimeProportion().then(
            (res) => {
                SetChartData(res.Data)
            }
        )
    }, [page])


    const handlePage = (e, page) => {
        SetPage(page)
    }

    return (
        <Page title="Archives">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Archives
                    </Typography>
                </Stack>
                <Grid container spacing={3}>
                    {/* xs最小 sm中小 md大小 */}
                    <Grid item xs={12} sm={12} md={8}>
                        <Card sx={{
                            ':hover': {
                                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 10%)'
                            },
                        }}>
                            <CardHeader title={`共${blogs.length}篇文章`}/>
                            <CardContent>
                                <ArchivesTimeLine
                                    list={blogs}
                                />
                            </CardContent>
                            <Box sx={{ px: 2.5, pb: 3}}>
                                <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                                    <Pagination count={count} page={page} onChange={handlePage}  />                                </Stack>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <ArchivesProportion
                            sx={{
                                ':hover': {
                                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 10%)'
                                },
                            }}
                            title="时间占比"
                            chartData={chartData}
                        />
                    </Grid>

                </Grid>
            </Container>
        </Page>
    );
}
