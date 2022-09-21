import {ApiHttp} from '../utils/http';

/**
 * 获取首页列表
 */
function getArticleList(page) {
    return ApiHttp("get", '/getAllArticle',{page});
}
/**
 * 根据ID获取文章详情
 */
function getArticleByID(id) {
    return ApiHttp("get", '/getArticle',{id});
}

/**
 * 根据分类ID获取文章列表
 */
function getArticleByCategoryID(categoryId) {
    return ApiHttp("get", '/getArticleByCategoryID',{category_id:categoryId});
}
/**
 * 获取文章时间占比
 */
function getArticleTimeProportion() {
    return ApiHttp("get", '/getArticleTimeProportion');
}

/**
 * 根据Name模糊查询
 */
function getArticleByTitle(title) {
    return ApiHttp("get", '/getArticleByName', {title});
}

/**
 * 获取个人设置
 */
function getSetting() {
    return ApiHttp("get", '/getSetting');
}

/**
 * 新增访问量
 */
function addWatchNum(id) {
    return ApiHttp('post', '/addWatchNum', {id});
}

/**
 * 获取分类信息列表
 */
function getCategoryList() {
    return ApiHttp("get", '/getCategory');
}

export {
    getArticleList,
    getSetting,
    getArticleByTitle,
    getArticleTimeProportion,
    getCategoryList,
    getArticleByID,
    getArticleByCategoryID,
    addWatchNum
}
