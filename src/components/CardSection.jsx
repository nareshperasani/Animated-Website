import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";

const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        margin-top: 1rem;
        @media screen and (max-width:990px){
          grid-template-columns: repeat(1, 1fr);
      }

        .card-left {
          position: relative;
            right: 3rem;

            @media screen and (max-width:1347px){
              width: 100%;
            }
          
            h2 {
              color: var(--purple-primary);
              font-size: 2.7rem;
              font-weight: 700;
            }
        
            p {
              color: var(--lavender-secondary);
              padding: 1rem 0;
              line-height: 1.8rem;
              font-size: 1.04rem;
            }
        }

        .card-right{
            display: flex;
            justify-content: flex-end;
            margin-right: -2rem;

            img{
              @media screen and (max-width:1347px){
                margin-right: 2rem;
              }
            }
        }
    }
`;

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2>One card for all your payments</h2>
            <p>
              Get 3% back on everything you buy with the Draft card Register
              today and enjoy every aspect of your business. With Draft, book keeping, banking, and invoices are all in one place. You will always know where you stand.
            </p>
          </div>
          <div className="card-right">
            <img src={card} alt="" />
          </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

export default CardSection;
