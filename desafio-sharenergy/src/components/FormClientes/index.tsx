import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { clienteAtom } from "../../pages/Clientes";
import { fetchPostCliente, fetchUpdateCliente, IClient } from "../../services/APIClientes";
import styles from './style.module.css';

interface IFormInput {
  nomeCompleto: string;
  idade: number;
  rua: string;
  bairro: string;
  numero: number;
  cidade: string;
  estado: string;
  cpf: string;
  email: string;
  telefone: string;
}

export default function FormClientes() {
  const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm<IFormInput>();
  const [infoCliente, setInfoClient] = useState<IClient>({} as IClient);
  const [cliente, setCliente] = useAtom(clienteAtom);

  useEffect(() => {
    const updateCliente = () => {
      if (Object.keys(cliente).length > 0) {
        setInfoClient(cliente)
        setValue('nomeCompleto', cliente.name);
        setValue('idade', cliente.age);
        setValue('telefone', cliente.phone);
        setValue('email', cliente.email);
        setValue('cpf', cliente.cpf);
        setValue('rua', cliente.address.rua);
        setValue('numero', cliente.address.numero);
        setValue('bairro', cliente.address.bairro);
        setValue('cidade', cliente.address.cidade);
        setValue('estado', cliente.address.estado);
      }
    }

    updateCliente();
  }, []);

  useEffect(() => {
    return () => {
      setCliente({} as IClient);
    };
  }, []);

  const handle: SubmitHandler<IFormInput> = async (data) => {
    const payload = {
      name: data.nomeCompleto,
      age: data.idade,
      phone: data.telefone,
      email: data.email,
      cpf: data.cpf,
      address: {
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado
      }
    }

    if (infoCliente._id) {
      await fetchUpdateCliente(infoCliente._id, payload).then(() => reset());
    } else {
      await fetchPostCliente(payload).then(() => reset());
    }

  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(handle)}>
      <div className={styles.containerContentInputs}>
        <input
          placeholder="Nome Completo"
          {...register("nomeCompleto", {
            required: "Nome Completo is required",
            maxLength: {
              value: 250,
              message: "Nome excedeu o máximo de caracteres"
            }
          })}
          aria-invalid={errors.nomeCompleto ? "true" : "false"}
        />
        {errors.nomeCompleto && <p className={styles.alert} role="alert">{errors.nomeCompleto?.message}</p>}

        <input
          className={styles.inputAge}
          placeholder="Idade"
          type="number"
          {...register("idade", {
            required: 'Idade is required',
            min: {
              value: 18,
              message: 'Idade mínima é 18 anos'
            }
          })}
        />
        {errors.idade && <p className={styles.alert} role="alert">{errors.idade?.message}</p>}

        <input
          className={styles.inputAge}
          type="tel"
          placeholder="(00) 99999-9999"
          {...register("telefone", {
            required: 'Telefone is required',
          })}
        />
        {errors.telefone && <p className={styles.alert} role="alert">{errors.telefone?.message}</p>}
      </div>

      <div className={styles.containerContentInputs}>
        <input
          placeholder="Email"
          type="email"
          {...register("email", { required: "Email is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className={styles.alert} role="alert">{errors.email?.message}</p>}

        <div className={styles.cpfAndAge}>
          <input
            placeholder="CPF"
            {...register("cpf", { required: "CPF is required" })}
            aria-invalid={errors.cpf ? "true" : "false"}
          />
          {errors.cpf && <p className={styles.alert} role="alert">{errors.cpf?.message}</p>}
        </div>
      </div>

      <div className={styles.containerContentInputs}>
        <input
          placeholder="Rua"
          {...register("rua", { required: "Rua is required" })}
          aria-invalid={errors.rua ? "true" : "false"}
        />
        {errors.rua && <p className={styles.alert} role="alert">{errors.rua?.message}</p>}

        <input
          placeholder="Número"
          type="number"
          {...register("numero", { required: "Número is required" })}
          aria-invalid={errors.numero ? "true" : "false"}
        />
        {errors.numero && <p className={styles.alert} role="alert">{errors.numero?.message}</p>}

        <input
          placeholder="Bairro"
          {...register("bairro", { required: "Bairro is required" })}
          aria-invalid={errors.bairro ? "true" : "false"}
        />
        {errors.bairro && <p className={styles.alert} role="alert">{errors.bairro?.message}</p>}

        <input
          placeholder="Cidade"
          {...register("cidade", { required: "cidade is required" })}
          aria-invalid={errors.cidade ? "true" : "false"}
        />
        {errors.cidade && <p className={styles.alert} role="alert">{errors.cidade?.message}</p>}

        <input
          placeholder="Estado"
          {...register("estado", { required: "Estado is required" })}
          aria-invalid={errors.estado ? "true" : "false"}
        />
        {errors.estado && <p className={styles.alert} role="alert">{errors.estado?.message}</p>}
      </div>
      <input type="submit" value="Enviar" className={styles.inputSubmit} />

    </form >
  )
}