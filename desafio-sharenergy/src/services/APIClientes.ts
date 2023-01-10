import  axios  from 'axios';



export interface IPostClient {
  name: string,
  age: number,
  address: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string
  }
  email: string;
  cpf: string;
  phone: string;
}

export interface IClient {
  _id: string,
  name: string,
  age: number,
  address: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string
  }
  email: string;
  cpf: string;
  phone: string;
}

export async function fetchClientes(): Promise<IClient[]> {
  
  const response = await axios({
    method: 'get',
    url: 'http://localhost:3000/users',
  });
  
  const data = await response.data;
  return data;
}


export async function fetchDeleteClientes(id: string): Promise<void> {
   await axios({
    method: 'delete',
    url: `http://localhost:3000/users/${id}`,
  });
}


export async function fetchPostCliente(cliente: IPostClient): Promise<void> {
  await axios.post('http://localhost:3000/users', cliente);
}


export async function fetchUpdateCliente(id: string, cliente: IPostClient): Promise<void> {
  await axios.put(`http://localhost:3000/users/${id}`, cliente);
}