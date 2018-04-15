import { getArticles } from '../../actions'

import { TECH_CONSTANTS, NAMES, TECH, TECH_TITLE, LASTEST } from '../../constants';

async function getFilteredList(category) {
  const article_list = await getArticles() || [];
  if (category) {
    return article_list.filter((article) => {
      if (category === 'tech') {
        let flag = false;
        // eslint-disable-next-line
        TECH_CONSTANTS.map(item => {
          if (item === article.category){
            flag = true;
          }
        });
        return flag;
      } else {
        return article.category === category;
      }
    });
  } else {
    return article_list;
  }
}

export async function getArticlePageInfo(pathname) {
  let uri = pathname.substr(pathname.lastIndexOf('/') + 1, pathname.length);
  let title = NAMES[uri];
  if (uri === 'highlight') {
    uri = TECH;
    title = TECH_TITLE;
  } else if (uri === '') {
    title = LASTEST;
  }
  const article_list = await getFilteredList(uri) || [];
  return { uri, title, article_list };
}