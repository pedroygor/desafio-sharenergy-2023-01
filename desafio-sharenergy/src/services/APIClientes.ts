import  axios  from 'axios';
export async function fetchClientes() {
  const URL = 'http:localhost:3000/users';

  axios({
    method: 'get',
    url: 'http://localhost:3000/users',
  }).then((response) => {
    console.log(response.data); 
  });
  
}