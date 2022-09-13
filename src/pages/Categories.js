// material
import {Container, Grid, Stack, Typography} from '@mui/material';
// components
import * as React from 'react';
import CategoriesGird from "../components/CategoriesGird";
import Page from '../components/Page';

// ----------------------------------------------------------------------

const str = "LeetCode 数据结构 Golang Go Android Git"
const tags = str.split(' ');
export default function Categories() {
    return (
        <Page title="Categories">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Categories
                    </Typography>
                </Stack>
                < Grid container spacing={2}>
                    {
                        tags.map(tag => (<CategoriesGird key={tag} tag={tag}/>))
                    }
                </Grid>
            </Container>
        </Page>
    );
}
