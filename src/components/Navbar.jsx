import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/logo.svg";
import { Fade } from "react-reveal";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;

  .logo {
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }

  a {
    color: inherit;

    &:hover {
      color: var(--accent-pink);
      transition: all 0.4s ease-in-out;
    }
  }
`;

function Navbar() {
  return (
    
      <NavbarStyled>
        <Fade top>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
        </ul>
        <PrimaryButton name={"Sign Up"} />
        </Fade>
      </NavbarStyled>
  );
}

export default Navbar;
