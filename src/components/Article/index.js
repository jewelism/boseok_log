import { getArticles } from '../../actions'

import { TECH_CONSTANTS, NAMES, TECH, TECH_TITLE, LASTEST } from '../../constants';

async function getFilteredList(category) { //get all articles from server, and filter to category
  const article_list = await getArticles() || [];
  if (category) {
    return article_list.filter((article) => {
      if (category === 'tech') {
        let flag = false;
        // eslint-disable-next-line
        TECH_CONSTANTS.map(item => {
          if (item === article.category) {
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

export async function getArticlePageInfo(pathname) { //set uri, title
  let uri = pathname.substr(pathname.lastIndexOf('/') + 1, pathname.length);
  let title = NAMES[uri];
  if (uri === 'highlight') {
    uri = TECH;
    title = TECH_TITLE;
  } else if (uri === '') {
    title = LASTEST;
  }
  const article_list = await getFilteredList(uri) || [];
  let showCategory = false; //decide whether to show category or not
  if (!uri || uri === 'tech') { 
    showCategory = true;
  }
  return { uri, title, article_list, showCategory };
}