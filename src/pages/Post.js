import {useEffect} from "react";
import {useParams} from "react-router-dom";
// material
import {
    Container,
    Stack,
    Typography,
} from '@mui/material';
// components
import * as React from 'react';
import Page from '../components/Page';
import {getArticleByID} from "../api/api";


// ----------------------------------------------------------------------

export default function About() {
    const {id} = useParams();
    useEffect(() => {
        getArticleByID(id).then((res) => {
            console.log(res.Data)
        })
    }, [id])
    return (
        <Page title="About">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        POST
                    </Typography>
                </Stack>
            </Container>
        </Page>
    );
}
