import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
// material
import {Grid, Container, Stack, Typography, Pagination, Box} from '@mui/material';
import {getArticleList, getSetting, getArticleByTitle, getArticleByCategoryID} from "../api/api";
// components
import BlogPostsSearch from "../components/BlogPostsSearch";
import Page from '../components/Page';
import {BlogPostCard} from '../sections/@dashboard/blog';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export default function Blog() {
    const [blogs, SetBlogs] = useState([]);
    const [setting, SetSetting] = useState({});
    const [page, SetPage] = useState(1);
    const [count, SetCount] = useState(1);
    const [searchParams] = useSearchParams()
    const categoriesId = searchParams.get('categoriesId')
    useEffect(() => {
        if (categoriesId !== null) {
            getArticleByCategoryID(categoriesId).then((res) => {
                console.log(res.Data)
                SetBlogs(res.Data)
                SetCount(res.Count)
            })
        }else {
            // 获取文章列表
            getArticleList(page).then(
                (res) => {
                    SetBlogs(res.Data)
                    SetCount(res.Count)
                }
            )
        }

        // 获取个人设置
        getSetting().then(
            (res) => {
                SetSetting(res.Data)
            }
        )



    }, [page,categoriesId])


    const changeHandle = (title) => {
        // 通过Name获取文章
        getArticleByTitle(title).then(
            (res) => {
                SetBlogs(res.Data)
            }
        )
    }
    const handlePage = (e, page) => {
        SetPage(page)
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
                    <BlogPostsSearch change={changeHandle}/>
                </Stack>

                <Grid container spacing={3}>
                    {blogs.map((post, index) => <BlogPostCard key={post.ID} post={post} index={index}
                                                              setting={setting}/>)}
                </Grid>

                <Box sx={{textAlign: 'center', mt: 3}}>
                    <Stack alignItems="center" spacing={3} sx={{position: 'relative'}}>
                        <Pagination count={count} page={page} onChange={handlePage}/>
                    </Stack>
                </Box>
            </Container>
        </Page>
    );
}
