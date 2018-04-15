const BASE_URI = 'https://boseok.me:3443';

export const getArticles = () => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/articles/all`)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson.data))
      .catch(err => {
        console.warn(err)
        resolve(false)
      })
  })
}

export const saveArticles = (body, isUpdate) => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/articles`, {
      method: isUpdate ? 'PUT' : 'POST',
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
}

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
}

export const saveChats = (author, text) => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/chats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, text })
    })
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(err => {
        console.warn(err);
        resolve(false);
      })
  })
}