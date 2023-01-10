import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useAtom } from "jotai";
import { PencilLine, Trash } from "phosphor-react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { clienteAtom } from "../../pages/Clientes";
import { fetchClientes, fetchDeleteClientes } from "../../services/APIClientes"
import { IClient } from "../../services/APIClientes";

import styles from './style.module.css';

export default function ListClients() {
  const [listClients, setListClients] = useState<IClient[]>([]);
  const [_cliente, setCliente] = useAtom(clienteAtom);

  const navigation = useNavigate();

  useEffect(() => {
    const fetchListClient = async () => {
      const listClients = await fetchClientes();
      setListClients(listClients);
    }

    fetchListClient();
  }, []);

  const handleEdit = (cliente: IClient) => {
    navigation('/clientes/form')
    setCliente(cliente);
  }

  const handleDelete = async (id: string) => {
    await fetchDeleteClientes(id);
    const clientes = await fetchClientes();
    setListClients(clientes);
  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {listClients.map((client) => (
          <div className={styles.listItem} key={client._id}>
            <div className={styles.groupsAttr}>
              <p className={styles.clientName}>{client.name},</p>
              <p className={styles.clientAge}>{client.age} anos</p>
            </div>

            <div className={styles.groupsAttr}>
              <p className={styles.clientEmail}>{client.email}</p>
              <p className={styles.clientCpf}>cpf: {client.cpf}</p>
            </div>

            <div className={styles.groupsAttr}>
              <button
                onClick={() => handleEdit(client)}
              >
                <PencilLine size={22} weight="fill" className={styles.iconEdit} />
              </button>

              <button
                onClick={() => handleDelete(client._id)}
              >
                <Trash size={22} weight="fill" className={styles.iconDelete} />
              </button>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div >
  )
}