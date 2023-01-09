import { Outlet } from "react-router-dom";
import FormClientes from "../../components/FormClientes";
import Header from "../../components/Header";
import OptionsClient from "../../components/OptionsClient";
import { fetchClientes } from "../../services/APIClientes";

import styles from './style.module.css';

export default function Clientes() {
  return (
    <div className={styles.container}>
      <Header />
      <OptionsClient />
      <Outlet />
    </div>
  )
}