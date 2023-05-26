import axios from 'axios';


const api = axios.create({
  baseURL: "http://localhost:3001",
});


export const fetcher = (url) => fetch(url).then((res) => res.json());


export function postRegisterDatetime(data) {
  return api.post('/timeLine', data)
    .then(response => {
      return response.data;

    })
    .catch(error => {
      return error
    });
}
