import { useEffect, useState } from "react"
import Header from "../../components/Header";
import getRandomDogs from "../../services/APIRandomDog";

import styles from './style.module.css';

export default function RandomDog() {
  const [imgDogs, setImgDogs] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const fetchRandomDogs = async () => {
      const randomDogs = await getRandomDogs();
      const imageDogs = randomDogs.filter((url) => url.includes('.jpg') || url.includes('.JPG'));

      setImgDogs(imageDogs);
      setCurrentImage(imageDogs[0]);
    }

    fetchRandomDogs();

  }, []);

  const randomNumberGenerator = (imgDogs: string[]) => {
    const randomNumber = Math.floor(Math.random() * imgDogs.length + 1);
    return randomNumber;
  }

  const handleClick = () => {
    const randomNumber = randomNumberGenerator(imgDogs);

    setCurrentImage(imgDogs[randomNumber]);
  }

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Random Dog</h1>
      <section className={styles.containerImage}>
        <div>
          <img
            src={`https://random.dog/${currentImage}`}
            alt="dog-img"
          />
        </div>
        <button type="button" onClick={handleClick} >Refresh</button>
      </section>
    </div>
  )
}