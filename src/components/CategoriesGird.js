import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Link, Typography} from "@mui/material";
import * as React from "react";
import {alpha, styled} from "@mui/material/styles";
import {Link as RouterLink} from "react-router-dom";
import PropTypes from "prop-types";

CategoriesGird.propTypes = {
    tag: PropTypes.string.isRequired,
};

export default function CategoriesGird({ tag }) {
    return <Grid item xs={12} sm={6} md={3} key={tag}>
        <Card sx={{maxWidth: 345,':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 10%)'}}}>
            <CardMediaStyle
                sx={{
                    ...( {
                        pt: 'calc(100% * 4 / 3)',
                        '&:after': {
                            top: 0,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.5),
                        },
                    }),
                    ...({
                        pt: {
                            xs: 'calc(100% * 4 / 3)',
                            sm: 'calc(100% * 3 / 4.66)',
                        },
                    }),
                }}
            >

                <CoverImgStyle src={`https://api.ixiaowai.cn/api/api.php?random=${Math.random()}`} />
            </CardMediaStyle>
            <CardContent
                sx={{
                    pt: 4,
                    ...(  {
                        bottom: 0,
                        width: '100%',
                        position: 'absolute',
                    }),
                }}
            >
                <TitleStyle
                    to="/"
                    color="inherit"
                    variant="subtitle2"
                    underline="hover"
                    component={RouterLink}
                    sx={{
                        ...( { typography: 'h5', height: 60 }),
                        ...( {
                            color: 'common.white',
                        }),
                    }}
                >
                    {tag}
                </TitleStyle>

                <Typography variant="body2" color='common.white'>
                    分类说明啦...
                </Typography>
            </CardContent>
        </Card>
    </Grid>
}

const CoverImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});


const CardMediaStyle = styled('div')({
    position: 'relative',
    paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
});
