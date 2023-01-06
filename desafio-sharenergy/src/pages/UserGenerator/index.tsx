import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Pagination,
  Typography
} from "@mui/material";
import usePagination from "../../hooks/pagination";
import { useEffect, useState } from "react"
import getUserGenerator from "../../services/APIUserGenerator";
import { IUserAPI } from "../../interface/IUserAPI";
import SearchUser from "../../components/SearchUser";
import Header from "../../components/Header";

import styles from './style.module.css';

export default function UserGenerator() {
  const PER_PAGE = 10;

  const [users, setUsers] = useState<IUserAPI[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<IUserAPI[]>([]);
  const [page, setPage] = useState(1);
  const [inputText, setInputText] = useState('');
  const [optionsSearch, setOptionsSearch] = useState('name');


  const _DATA = usePagination(usersFiltered, PER_PAGE);
  const count = Math.ceil(usersFiltered.length / PER_PAGE);


  useEffect(() => {
    const fetchUserGenerator = async () => {
      const userGenerator = await getUserGenerator();
      setUsers(userGenerator);
      setUsersFiltered(userGenerator);
    }
    fetchUserGenerator();
  }, []);

  useEffect(() => {
    const filteredUsers = () => {
      const inputTextLowerCase = inputText.toLocaleLowerCase();
      const userFilter = users;

      const newUsersFiltered = userFilter.filter(({ name, login, email }) => {
        if (optionsSearch === 'name') {
          const fullName = name.first.toLocaleLowerCase() + name.last.toLocaleLowerCase();
          return fullName.includes(inputTextLowerCase);
        }
        else if (optionsSearch === 'username') {
          const usernameLowerCase = login.username.toLocaleLowerCase();
          return usernameLowerCase.includes(inputTextLowerCase);
        }
        else if (optionsSearch === 'email') {
          const emailLowerCase = email.toLocaleLowerCase();
          return emailLowerCase.includes(inputTextLowerCase);
        }
        return users;
      });
      setUsersFiltered(newUsersFiltered);
    }

    filteredUsers()
  }, [inputText, optionsSearch])

  const handleChange = (_e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <SearchUser
          inputText={inputText}
          setInputText={setInputText}
          optionsSearch={optionsSearch}
          setOptionsSearch={setOptionsSearch}
        />

        <List className={styles.list} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {_DATA.currentData().map((user) => (
            <div key={user.login.uuid}>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar src={user.picture.large} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${user.name.first} ${user.name.last}`}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`username: ${user.login.username}`}

                      </Typography>
                      <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {`age: ${user.registered.age}`}
                      </Typography>
                      {user.email}

                    </>} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>

          ))}
        </List>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div >
  )
}