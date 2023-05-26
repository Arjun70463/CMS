import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../context/Context';
import React from 'react';

const Navbar = () => {
  const { MLogo, navbarSubR, navbarSubL, navbarName, navbarNameColor, navbarColor } = useMyContext();

  const Header = styled(AppBar)`
    background: ${navbarColor};
  `;

  const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: ${navbarNameColor ? navbarNameColor : 'white'};
    text-decoration: none;

    &:hover {
      color: ${navbarNameColor ? navbarNameColor : 'white'};
    }

    @media (max-width: 768px) {
      margin-right: 10px;
    }
  `;

  const Tab = styled(NavLink)`
    font-size: 20px;
    margin: 20px;
    color: ${navbarNameColor ? navbarNameColor : 'white'};
    text-decoration: none;

    &:hover {
      color: ${navbarNameColor ? navbarNameColor : 'white'};
    }

    @media (max-width: 768px) {
      margin: 10px;
    }
  `;

  const Logo = styled('img')`
    height: 40px;
    margin-right: 10px;
  `;

  const logoURL = `${MLogo}`; // Replace with your logo URL or keep it as an empty string for no logo

  return (
    <Header position='static'>
      <Toolbar>
        {logoURL ? (
          <Logo src={logoURL} alt='Logo' />
        ) : (
          <span></span>
        )}
        <Tabs to='/'>{navbarName ? navbarName : 'Generic CMS'}</Tabs>
        <Tab to='/add'>{navbarSubL ? navbarSubL : 'Create Post'}</Tab>
        <Tab to='/all'>{navbarSubR ? navbarSubR : 'Edit Posts'}</Tab>
        <Tab to='/settings'>Settings</Tab>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
