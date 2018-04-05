const BASE_URI = 'https://boseok.me:3443'

export const getArticles = () => {
  return new Promise((resolve) => {
    fetch(`${BASE_URI}/articles/all`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        resolve(responseJson.data)
      })
      .catch((err) => {
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
    }).then((response) => {
      return response.json()
    }).then((responseJson) => {
      resolve(responseJson)
    }).catch((err) => {
      console.warn(err)
      resolve(false)
    })
  })
}