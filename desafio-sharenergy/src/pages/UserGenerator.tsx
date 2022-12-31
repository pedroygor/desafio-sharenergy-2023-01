import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Pagination,
  PaginationItem,
  Typography
} from "@mui/material";
import usePagination from "../hooks/pagination";
import { useEffect, useState } from "react"
import getUserGenerator from "../services/APIUserGenerator";

export interface Users {
  email: string
  picture: {
    large: string
  },
  name: {
    title: string,
    first: string,
    last: string
  },
  login: {
    uuid: string,
    username: string
  },
  registered: {
    age: number
  }

}

export default function UserGenerator() {
  const PER_PAGE = 10;
  const IUsers: Users[] = [];
  const [users, setUsers] = useState(IUsers);
  const [page, setPage] = useState(1);
  const _DATA = usePagination(users, PER_PAGE);
  const count = Math.ceil(users.length / PER_PAGE);

  useEffect(() => {
    const fetchUserGenerator = async () => {
      const userGenerator = await getUserGenerator();
      setUsers(userGenerator);
      console.log(userGenerator);

    }
    fetchUserGenerator();
  }, []);

  const handleChange = (_e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
    </div >
  )
}