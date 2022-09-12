// @mui
// material
import {Container, Card, Grid, Stack, Box, Typography, CardHeader, CardContent} from '@mui/material';
// components
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import ArchivesProportion from "../components/ArchivesProportion";
import ArchivesTimeLine from "../components/ArchivesTimeLine";
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Archives() {

    const list = [
        {
            id: '001',
            title: 'Git学习',
            type: `order1`,
            time: '2020-10-9',
        },
        {
            id: '002',
            title: 'Go-web学习',
            type: `order2`,
            time: '2020-10-19',
        }
    ]


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
                            <CardHeader title={"共XXX篇文章"}/>
                            <CardContent>
                                <ArchivesTimeLine
                                    list={list}
                                />
                            </CardContent>
                            <Box sx={{ px: 2.5, pb: 3}}>
                                <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                                    <Pagination count={10} defaultPage={1} siblingCount={0} />                                </Stack>
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
                            chartData={[
                                {label: 'America', value: 4344},
                                {label: 'Asia', value: 5435},
                                {label: 'Europe', value: 1443},
                                {label: 'Africa', value: 4443},
                                {label: 'Africa', value: 4443},
                                {label: 'Africa', value: 4443},
                            ]}
                        />
                    </Grid>

                </Grid>
            </Container>
        </Page>
    );
}
