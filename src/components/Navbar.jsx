import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavbarItem = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const pages = [
    {
      title: 'Dasboard',
      link: '/',
      display: true,
    },
    {
      title: 'Create New Post',
      link: '/post/create',
      display: true,
    },
    {
      title: 'My Profile',
      link: '/profile/',
      display: true,
    },
    {
      title: 'Login',
      link: '/auth/login',
      display: true,
    },
    {
      title: 'Register',
      link: '/auth/register',
      display: true,
    },
    {
      title: 'Logout',
      display: true,
      handler: () => {},
    },
  ];

  return (
    <div className="bg-secondary">
      <Navbar color="faded" className="container" light expand="md">
        <NavbarBrand href="/" className="me-auto fs-3 text text-white">
          Blog App
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 bg-white" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            {pages
              .filter((item) => item.display)
              .map((item, idx) => (
                <NavItem key={idx}>
                  <NavLink className="text-white" href={item.link}>
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarItem;
