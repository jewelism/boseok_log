import {BASE_URI} from '../constants';
import {objToQuerystring} from '../utils';

class Request {
  get(uriParams, query) {
    return new Promise((resolve, reject) => {
      const URL = query ? `${BASE_URI}/${uriParams}` : `${BASE_URI}/${uriParams}${objToQuerystring(query)}`;
      fetch(URL)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }

  post(uriParams, body, isPut) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URI}/${uriParams}`, {
        method: isPut ? 'PUT' : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      }).then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }

  put(uriParams, body) {
    return this.post(uriParams, body, true, null);
  }

  postFile(uriParams, body) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URI}/${uriParams}`, {
        method: 'POST',
        body: body,
      }).then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}

export default new Request();
