import { UserList, UserPlus } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import styles from './style.module.css';

export default function OptionsClient() {
  const navigate = useNavigate();
  const handleCreateButton = () => {
    navigate('/clientes/form')
  }

  const handleListButton = () => {
    navigate('/clientes/list')
  }

  return (
    <div className={styles.container}>
      <h1>Bem vindo à página de Clientes</h1>

      <div className={styles.containerOptions}>
        <h2>Opções</h2>
        <div className={styles.options}>
          <div className={styles.contentOption}>
            <button
              type='button'
              onClick={handleCreateButton}
            >
              <UserPlus size={40} weight='fill' color="#fff" />
              Criar
            </button>
          </div>
          <div className={styles.contentOption}>
            <button
              type='button'
              onClick={handleListButton}
            >
              <UserList size={40} weight='fill' color="#fff" />
              Listar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}