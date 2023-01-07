import { ChangeEvent, useState } from "react"
import Header from "../../components/Header";
import { allStatusCode } from "../../utils/statusCode";

import catImg from '../../assets/imgs/cat.svg';
import catCrying from '../../assets/imgs/crying.svg';
import styles from './style.module.css';

export default function StatusCodeCat() {
  const [image, setImage] = useState(catImg);
  const [statusCode, setStatusCode] = useState('0');
  const [title, setTitle] = useState('');
  const [whichColor, setWhichColor] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusCode(e.target.value);
  }

  const handleClick = async () => {
    if (allStatusCode.includes(Number(statusCode))) {
      setTitle('');
      setWhichColor(false);
      setImage(`https://http.cat/${statusCode}.jpg`);
    } else {
      setTitle('status code not found');
      setWhichColor(true);
      setImage(catCrying);
    }
    setStatusCode('0')
  }

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.containerInputs}>
        <input
          type="number"
          name="statusCode"
          id="statusCode"
          placeholder="Digite o status code"
          value={statusCode}
          onChange={handleInput}
        />

        <button type="button" onClick={handleClick}>Buscar</button>
      </section>
      <main className={styles.mainContainer}>
        <h2 className={styles.title}>HTTP CATS</h2>
        <p className={whichColor ? styles.colorDanger : styles.colorPrimary}>{title}</p>
        <img src={image} />
      </main>
    </div>
  )
}