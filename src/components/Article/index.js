import {getArticles} from '../../actions';

import {TECH_CONSTANTS, NAMES, TECH, TECH_TITLE, LASTEST} from '../../constants';

async function getFilteredList(category) { //get all articles from server, and filter to category
  const articleList = (await getArticles()).data || [];
  if (category) {
    return articleList.filter((article) => {
      if (category === 'tech') {
        return TECH_CONSTANTS.some(item => item === article.category);
      } else {
        return article.category === category;
      }
    });
  } else {
    return articleList;
  }
}

export async function getArticlePageInfo(pathname) { //set uri, title
  let uri = getUriByPathname(pathname);
  let title = NAMES[uri];
  if (uri === 'highlight') {
    uri = TECH;
    title = TECH_TITLE;
  } else if (uri === '') {
    title = LASTEST;
  }
  const articleList = await getFilteredList(uri) || [];
  let showCategory = false; //decide whether to show category or not
  if (!uri || uri === 'tech') {
    showCategory = true;
  }
  return {uri, title, articleList, showCategory};
}

function getUriByPathname(pathname) {
  return pathname.substr(pathname.lastIndexOf('/') + 1, pathname.length);
}
