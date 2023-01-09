import { Link } from "react-router-dom";

import styles from './style.module.css';
import BasicMenu from "../Menu";


export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Desafio sharenergy</h1>
      <nav className={styles.navbar}>
        <div>
          <Link to="/generator">User Generator</Link>
          <Link to="/statusCode">HTTP Cat</Link>
          <Link to="/randomDog">Random Dogs</Link>
          <Link to="/clientes">Clientes</Link>
        </div>

      </nav>

      <BasicMenu />

    </header >
  )
}