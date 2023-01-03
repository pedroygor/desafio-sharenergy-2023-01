import { ChangeEvent, useState } from "react"
import imageQuestionMark from '../assets/imgs/question_mark.jpg';
import { allStatusCode } from "../utils/statusCode";

export default function StatusCodeCat() {
  const [image, setImage] = useState(imageQuestionMark);
  const [statusCode, setStatusCode] = useState('0');
  const [title, setTitle] = useState('http Cats');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusCode(e.target.value);
  }

  const handleClick = async () => {
    if (allStatusCode.includes(Number(statusCode))) {
      setTitle('http cats');
      setImage(`https://http.cat/${statusCode}.jpg`);
    } else {
      setTitle('status code not found');
      setImage(imageQuestionMark);
    }
    setStatusCode('0')
  }

  return (
    <div>
      <div>
        <input
          type="number"
          name="statusCode"
          id="statusCode"
          placeholder="Digite o status code"
          value={statusCode}
          onChange={handleInput}
        />

        <button type="button" onClick={handleClick}>Buscar</button>
      </div>
      <div>
        <h2>{title}</h2>
        <img src={image} alt="" style={{ width: '400px' }} />
      </div>
    </div>
  )
}