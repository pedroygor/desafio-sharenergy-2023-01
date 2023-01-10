import { Outlet } from "react-router-dom";
import { atom } from "jotai";
import Header from "../../components/Header";
import OptionsClient from "../../components/OptionsClient";

import styles from './style.module.css';
import { IClient } from "../../services/APIClientes";

export const clienteAtom = atom<IClient>({} as IClient);

export default function Clientes() {
  return (
    <div className={styles.container}>
      <Header />
      <OptionsClient />
      <Outlet />
    </div>
  )
}