import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = styled.nav`
  height: 60px;
  background: #000;
  padding: 0rem calc((100vw -1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavItems = styled.div``

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  font-size: 22px;
`

const Header = () => {
  return (
    <Navbar>
      <NavItems>
        <NavbarLink to='/'>Home</NavbarLink>
        <NavbarLink to='/about'>About</NavbarLink>
        <NavbarLink to='/services'>Services</NavbarLink>
        <NavbarLink to='/page'>Page</NavbarLink>
      </NavItems>
    </Navbar>
  )
}

export default Header
