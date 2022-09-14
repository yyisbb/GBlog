import {ApiHttp} from '../utils/http';

/**
 * 获取首页列表
 */
function getArticleList(page) {
    return ApiHttp("get", '/article/getAllArticle',{page});
}
/**
 * 根据ID获取文章详情
 */
function getArticleByID(id) {
    return ApiHttp("get", '/article/getArticle',{id});
}
/**
 * 获取文章时间占比
 */
function getArticleTimeProportion() {
    return ApiHttp("get", '/article/getArticleTimeProportion');
}

/**
 * 根据Name模糊查询
 */
function getArticleByTitle(title) {
    return ApiHttp("get", '/article/getArticleByName', {title});
}

/**
 * 获取个人设置
 */
function getSetting() {
    return ApiHttp("get", '/setting/getSetting');
}

/**
 * 获取分类信息列表
 */
function getCategoryList() {
    return ApiHttp("get", '/category/getCategory');
}




export {
    getArticleList,
    getSetting,
    getArticleByTitle,
    getArticleTimeProportion,
    getCategoryList,
    getArticleByID
}
