import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import styles from './style.module.css';
import loginImage from '../../assets/imgs/login.svg';

type Login = {
  username: string,
  password: string
};

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const json = localStorage.getItem('login');
    let login: Login = json && JSON.parse(json);

    if (login) {
      const { username, password } = login;
      setUsername(username);
      setPassword(password);
    }
  }, [])


  const handleInputUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleInput = () => {
    setIsChecked(!isChecked);
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()

    const isLoginValid = validateUsername() && validatePassword();
    if (isLoginValid && isChecked) {
      const login: Login = {
        username,
        password
      }
      localStorage.setItem('login', JSON.stringify(login));
    }

    if (isLoginValid) {
      navigate('/generator');
    } else {
      setIsLoginInvalid(true);
    }


  }

  const validateUsername = (): boolean => username === 'desafiosharenergy';

  const validatePassword = (): boolean => password === 'sh@r3n3rgy';

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <div>
          <h2>Desafio Sharenergy</h2>
          <div className={styles.formLogin}>
            <form action="#">
              <div>
                <div className={styles.containerInputs}>
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
                </div>
                {isLoginInvalid && <p>username e/ou senha inválidos</p>}
              </div>

              <button
                type="submit"
                disabled={!username || !password}
                onClick={handleClick}
              >
                Entrar
              </button>
            </form>

            <label htmlFor="rememberMe" className={styles.rememberMe}>
              <span>Lembrar de mim</span>
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                onChange={handleInput}
                checked={isChecked}
              />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.containerSecondary}>
        <img src={loginImage} alt="" />
      </div>
    </div>
  )

}