import axios from 'axios';


const api = axios.create({
  baseURL: "http://localhost:3001",
});


export function postRegisterDatetime(data) {
  return api.post('/timeLine', data)
    .then(response => {
      return response.data;

    })
    .catch(error => {
      return error
    });
}