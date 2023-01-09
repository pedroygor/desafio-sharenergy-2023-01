import { useForm, SubmitHandler } from "react-hook-form";
import styles from './style.module.css';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  district: string;
  state: string;
  cpf: string;
  email: string;
}

export default function FormClientes() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = () => {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.containerContentInputs}>
        <input
          placeholder="Primeiro Nome"
          {...register("firstName", { required: "Primeiro Nome is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.firstName && <p className={styles.alert} role="alert">{errors.firstName?.message}</p>}

        <input
          placeholder="Sobrenome"
          {...register("lastName", { required: "Sobrenome is required" })}
        />
        {errors.lastName && <p className={styles.alert} role="alert">{errors.lastName?.message}</p>}
      </div>

      <div className={styles.containerContentInputs}>
        <input
          placeholder="Email"
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

          <input
            className={styles.inputAge}
            placeholder="Idade"
            type="number"
            {...register("age", { min: 18, max: 99 })}
          />
        </div>

      </div>

      <div className={styles.containerContentInputs}>
        <input
          placeholder="Rua"
          {...register("street", { required: "Rua is required" })}
          aria-invalid={errors.street ? "true" : "false"}
        />
        {errors.street && <p className={styles.alert} role="alert">{errors.street?.message}</p>}

        <input
          placeholder="Bairro"
          {...register("district", { required: "Bairro is required" })}
          aria-invalid={errors.district ? "true" : "false"}
        />
        {errors.district && <p className={styles.alert} role="alert">{errors.district?.message}</p>}

        <input
          placeholder="Estado"
          {...register("state", { required: "Estado is required" })}
          aria-invalid={errors.state ? "true" : "false"}
        />
        {errors.state && <p className={styles.alert} role="alert">{errors.state?.message}</p>}
      </div>


      <input type="submit" className={styles.inputSubmit} />
    </form>
  )
}