import React from "react";
import styled from "styled-components";
import bg from "../img/bg.svg";
import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;

    .header-content{
        padding: 0 7.5rem;
        @media screen and (max-width:1347px){
            padding: 5rem 6rem;
            margin-top: -4rem;
        
        @media screen and (max-width:1186x){
            padding: 5rem 5rem;
        
        @media screen and (max-width:990px){
            padding: 5rem 3rem;
    }
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="header-content">
        <Navbar />
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
}

export default Header;
