import {useEffect, useState} from "react";
// material
import {Container, Grid, Stack, Typography} from '@mui/material';
// components
import * as React from 'react';
import CategoriesGird from "../components/CategoriesGird";
import Page from '../components/Page';
import {getCategoryList} from '../api/api'
// ----------------------------------------------------------------------


export default function Categories() {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        getCategoryList().then(
            (res) => {
                setCategory(res.Data)
            }
        )
    }, [])
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
                        categories.map(category => (<CategoriesGird key={category.ID} category={category}/>))
                    }
                </Grid>
            </Container>
        </Page>
    );
}
