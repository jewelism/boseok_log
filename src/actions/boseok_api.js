import {BASE_URI} from '../constants';

export const getArticles = () => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/articles/all`)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson.data))
      .catch(err => {
        console.warn(err);
        resolve(false);
      });
  })
};

export const getArticleById = (id) => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/articles/${id}`)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson.data[0]))
      .catch(err => {
        console.warn(err);
        resolve(false);
      });
  });
};

export const saveArticles = (body, articleId) => {
  return new Promise((resolve) => {
    fetch(articleId ? `${BASE_URI}/articles/${articleId}` : `${BASE_URI}/articles`, {
      method: articleId ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(err => {
        console.warn(err);
        resolve(false);
      })
  })
};

export const getChats = () => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/chats`)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson.data))
      .catch(err => {
        console.warn(err);
        resolve(false);
      })
  })
};

export const saveChats = (author, text, ip) => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/chats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({author, text, ip})
    })
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(err => {
        console.warn(err);
        resolve(false);
      })
  })
};

export const saveImages = files => {
  return new Promise(resolve => {
    const bodyFormData = new FormData();
    files.forEach(file => {
      bodyFormData.append('img', file);
    });
    fetch(`${BASE_URI}/files`, {
      method: 'POST',
      body: bodyFormData
    })
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(err => {
        console.warn(err);
        resolve(false);
      })
  });
};