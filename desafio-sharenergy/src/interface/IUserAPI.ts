export interface IUserAPI {
  email: string
  picture: {
    large: string
  },
  name: {
    title: string,
    first: string,
    last: string
  },
  login: {
    uuid: string,
    username: string
  },
  registered: {
    age: number
  }

}