import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeRaw from 'rehype-raw'
import 'github-markdown-css/github-markdown-light.css'
import './index.css'
// material
import {
    Container,
    Box,
    Card, CardHeader, Typography, CardContent
} from '@mui/material';
// components
import * as React from 'react';
import Page from '../components/Page';
import {getArticleByID,addWatchNum} from "../api/api";

// ----------------------------------------------------------------------

export default function Post() {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        getArticleByID(id).then((res) => {
            setPost(res.Data)
        })

        addWatchNum(id).then(() => {});
    }, [id])


    return <Page title={post.title}>
        <Container>
            <Box>
                <Card
                    sx={{
                        ':hover': {
                            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 10%)'
                        },
                    }}
                >
                    <CardHeader sx={{textAlign: 'center'}} title={
                        <Typography sx={{mt: 3}} variant="h2">
                            {post.title || ''}
                        </Typography>
                    }
                    />
                    <CardContent className={'markdown-body'} sx={{p: 3}}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}
                                       remarkPlugins={[remarkGfm, remarkToc]}
                                       children={post.content}
                        />
                    </CardContent>
                </Card>
            </Box>


        </Container>
    </Page>
}
