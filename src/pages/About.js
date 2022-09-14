// material
import {
    Container,
    Stack,
    Avatar,
    Typography,
    Box, CardHeader, CardContent, Card
} from '@mui/material';
// 引入评论
// components
import * as React from 'react';
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function About() {
    return (
        <Page title="About">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        About
                    </Typography>
                </Stack>
                <Box sx={{textAlign: 'center'}}>
                    <Card
                        sx={{
                            ':hover': {
                                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 10%)'
                            },
                        }}
                    >
                        <Stack alignItems="center" spacing={3} sx={{position: 'relative'}}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://zwjimg.oss-cn-beijing.aliyuncs.com/IMG_5103(20210807-235027)-5780abca87c241c2b1487191ab647f00.jpeg"
                                sx={{
                                    width: 100, height: 100, ':hover': {
                                        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 10%)'
                                    },
                                    mt:3,
                                }}
                            />
                        </Stack>
                        <CardHeader sx={{textAlign: 'center'}} title={
                            <Typography variant="h2">
                                Zwj
                            </Typography>
                        }
                        />
                        <CardContent>
                            感谢关注我的网站，本项目基于Hexo 框架 + Fluid主题 搭建。
                            <br/>
                            本网站主要用于记录一些学习Note以及技术分享。
                        </CardContent>
                    </Card>
                </Box>

            </Container>
        </Page>
    );
}
