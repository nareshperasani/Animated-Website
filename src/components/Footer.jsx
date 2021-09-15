import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import logo from "../img/logo.svg";

const FooterStyle = styled.footer`
  padding: 1rem 18rem;
  background-color: #dce2f0;
  margin-top: 5rem;
  margin-bottom: -5rem;
  margin-left: -10rem;
  margin-right: -10rem;

  .footer-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .logo-con {
    display: flex;
    align-items: center;

    img {
      margin-left: -10rem;
      align-items: center;
      cursor: pointer;
    }

  }

  .bottom-nav {
    display: flex;
    margin-left: -15rem;
    margin-right: 8rem;
    justify-content: space-between;

    li {
      padding: .8rem 0;

      a {
        color: #000;

        &: hover {
          text-decoration: underline;
          color: var(--accent-pink);
        }
      }
    }
  }

  .para-p{
      position: absolute;
      margin-left: 12rem;
      margin-top: 10rem;
    p {
        font-size: 1rem;
        color: var(--lavender-secondary);
      }

      span{
        color: var(--accent-pink);
        cursor: pointer;
      }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <InnerLayout>
        <div className="footer-con">
          <div className="logo-con">
            <div className="logo-items">
              <img src={logo} alt="" />
            </div>
          </div>
          <ul className="bottom-nav">
            <div className="links1">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
            </div>
            <div className="links2">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
            </div>
            <div className="links3">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </div>
          </ul>
          <div className="para-p">
          <p>All rights reserved by <span>Naresh Chowdary</span> 2021.</p>
          </div>
        </div>
      </InnerLayout>
    </FooterStyle>
  );
}

export default Footer;
