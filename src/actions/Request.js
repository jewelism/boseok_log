import {BASE_URI} from '../constants';
import {objToQuerystring} from '../utils';

export class Request {
  get(uriParams, query) {
    return new Promise((resolve, reject) => {
      const URL = query ? `${BASE_URI}/${uriParams}` : `${BASE_URI}/${uriParams}${objToQuerystring(query)}`;
      fetch(URL)
        .then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => reject(err));
    });
  }

  post(uriParams, body) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URI}/${uriParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }).then(res => res.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => reject(err));
    });
  }
}
