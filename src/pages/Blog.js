// material
import {Grid, Container, Stack, Typography} from '@mui/material';
// components
import Page from '../components/Page';
import {BlogPostCard} from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function Blog() {
    return (
        <Page title="Home">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        山高路远,看世界,也找自己
                    </Typography>
                </Stack>


                <Grid container spacing={3}>
                    {POSTS.map((post, index) => {
                        return (
                            <BlogPostCard key={post.id} post={post} index={index}/>
                        )
                    })}
                </Grid>
            </Container>
        </Page>
    );
}
