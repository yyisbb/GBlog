import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import { Autocomplete, Popper, TextField } from '@mui/material';
import {useEffect, useState} from "react";
// components
import {getArticleList} from "../api/api";

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
    change: PropTypes.func,
};

export default function BlogPostsSearch({change}) {
  const handleChange = (e,v) => {
    change(v)
  }
  const [blogs, SetBlogs] = useState([]);
  useEffect(() => {
    // 获取文章列表
    getArticleList().then(
        (res) => {
          SetBlogs(res.Data)
        }
    )

  }, [])
  return (
      <Autocomplete
          freeSolo
          onInputChange={handleChange}
          sx={{width: 280}}
          autoHighlight
          popupIcon={null}
          PopperComponent={PopperStyle}
          options={blogs.map((post) => post.title)}
          renderInput={(params) => <TextField {...params} label="搜索文章"/>}
      />
  );
};
