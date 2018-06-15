import React from 'react';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { Link } from "react-router-dom";


const UpperMenu = (
    <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/buy" style={{ textDecoration: 'none'}}><MenuItem primaryText="Comprar" /></Link>
    <Link to="/sell" style={{ textDecoration: 'none'}}><MenuItem primaryText="Vender"/></Link>
    <Link to="/balance" style={{ textDecoration: 'none'}}><MenuItem primaryText="Saldos" /></Link>
    <Link to="/methods" style={{ textDecoration: 'none'}}><MenuItem primaryText="Formas de pago" /></Link>
    <Link to="/operations" style={{ textDecoration: 'none'}}><MenuItem primaryText="Operaciones" /></Link>
    <MenuItem primaryText="Salir" />
  </IconMenu>    
)

export default UpperMenu;