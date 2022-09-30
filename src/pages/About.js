import {useEffect, useState} from "react";
// material
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
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
import {getSetting} from "../api/api";

// ----------------------------------------------------------------------

export default function About() {
    const [setting, SetSetting] = useState({});
    useEffect(() => {
        // 获取个人设置
        getSetting().then(
            (res) => {
                SetSetting(res.Data)
            }
        )
    }, []);
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
                                alt="Avatar"
                                src={setting.avatar ||''}
                                sx={{
                                width: 100, height: 100, ':hover': {
                                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 10%)'
                                },
                                mt: 3,
                            }}
                            />
                        </Stack>
                        <CardHeader sx={{textAlign: 'center'}} title={
                            <Typography variant="h2">
                                {setting.authorName || ''}
                            </Typography>
                        }
                        />
                        <CardContent>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}
                                           remarkPlugins={[remarkGfm, remarkToc]}
                                           children={setting.aboutContent || ''}
                            />
                        </CardContent>
                    </Card>
                </Box>

            </Container>
        </Page>
    );
}
