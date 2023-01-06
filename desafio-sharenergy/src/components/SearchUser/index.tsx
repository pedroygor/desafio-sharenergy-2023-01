import { style } from "@mui/system";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import styles from './style.module.css';

interface IProps {
  inputText: string,
  setInputText: Dispatch<SetStateAction<string>>,
  optionsSearch: string,
  setOptionsSearch: Dispatch<SetStateAction<string>>
}

export default function SearchUser(
  { inputText, setInputText, optionsSearch, setOptionsSearch }: IProps) {

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const handleOptionsSearch = (e: ChangeEvent<HTMLSelectElement>) => {
    setOptionsSearch(e.target.value);
  }

  return (
    <div className={styles.containerInputs}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquisar"
        value={inputText}
        onChange={handleInput}
      />
      <div>
        <select
          name="optionSearch"
          id="optionSearch"
          value={optionsSearch}
          onChange={handleOptionsSearch}
        >
          <option value="name">nome</option>
          <option value="username">username</option>
          <option value="email">email</option>
        </select>
      </div>
    </div>
  )
}