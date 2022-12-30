import { ChangeEvent, useState } from "react"
import { RememberMeLogin } from "../components/RememberMeLogin";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={handleInputUsername}
          value={username}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="senha"
          onChange={handleInputPassword}
          value={password}
        />
        <button
          type="submit"
          disabled={isDisabled}
        >
          Entrar
        </button>
      </form>
      <RememberMeLogin />
    </div >
  )

}