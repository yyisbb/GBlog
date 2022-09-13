import {useEffect, useState} from "react";
// material
import {Grid, Container, Stack, Typography} from '@mui/material';
import { getArticleList,getSetting,getArticleByTitle } from "../api/api";
// components
import BlogPostsSearch from "../components/BlogPostsSearch";
import Page from '../components/Page';
import {BlogPostCard} from '../sections/@dashboard/blog';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Blog() {
    const [blogs, SetBlogs] = useState([]);
    const [setting, SetSetting] = useState({});
    useEffect(() => {
        // 获取文章列表
        getArticleList().then(
            (res) => {
                SetBlogs(res.Data)
            }
        )

        // 获取个人设置
        getSetting().then(
            (res) => {
                SetSetting(res.Data)
            }
        )

    }, [])
    const changeHandle = (title) => {
        // 通过Name获取文章
        getArticleByTitle(title).then(
            (res) => {
                SetBlogs(res.Data)
            }
        )
    }
    return (
        <Page title="Home">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        {setting.homeText}
                    </Typography>

                </Stack>
                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BlogPostsSearch  change={changeHandle} />
                </Stack>

                <Grid container spacing={3}>
                    {blogs.map((post, index) => <BlogPostCard key={post.ID} post={post} index={index} setting={setting}/>)}
                </Grid>
            </Container>
        </Page>
    );
}
