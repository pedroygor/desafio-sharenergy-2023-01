import { ChangeEvent, Dispatch, SetStateAction } from "react"

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
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquisar"
        value={inputText}
        onChange={handleInput}
      />

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
  )
}