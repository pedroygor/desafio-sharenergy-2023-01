import { useEffect, useState } from "react"
import getRandomDogs from "../services/APIRandomDog";

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
    <div>
      <h1>Random Dog</h1>
      <section>
        <div>
          <img
            src={`https://random.dog/${currentImage}`}
            alt="dog-img"
            style={{ width: '400px', height: '400px' }}
          />
        </div>
        <button type="button" onClick={handleClick} >Refresh</button>
      </section>
    </div>
  )
}