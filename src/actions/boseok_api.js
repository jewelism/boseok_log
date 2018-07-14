import Request from './Request';

export const getArticles = () => Request.get('articles/all');
export const getArticleById = id => Request.get(`articles/${id}`);
export const saveArticles = (body, articleId) => articleId ? Request.put(`articles/${articleId}`, body) : Request.post('articles', body);
export const getChats = () => Request.get('chats');
export const saveChats = body => Request.post('chats', body);
export const saveImages = files => {
  const formData = new FormData();
  for (const file of files) {
    formData.append('img', file);
  }
  return Request.postFile('files', formData);
};