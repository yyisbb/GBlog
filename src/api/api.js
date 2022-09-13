import {ApiHttp} from '../utils/http';

/**
 * 获取首页列表
 */
function getArticleList() {
    return ApiHttp("get", '/article/getAllArticle');
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


export {
    getArticleList,
    getSetting,
    getArticleByTitle
}
