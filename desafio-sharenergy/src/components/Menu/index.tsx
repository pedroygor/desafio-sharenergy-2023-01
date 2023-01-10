import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { List } from "phosphor-react";

import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.menu}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <List size={25} color="#f0f0e0" weight="duotone" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/generator">User Generator</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/statusCode">HTTP Cat</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/randomDog">Random Dogs</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/clientes">Clientes</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}