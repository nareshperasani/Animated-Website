import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import card from "../img/creditcard.svg";
import active from "../img/active.svg";
import inactive from "../img/inactive.svg";
import check from "../img/check.svg";
import checkDisabled from "../img/check-disabled.svg";
import Card from "./Card";

const PaymentStyle = styled.section`

.card-con{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 3rem;
    padding-top: 3rem;
}
  h3 {
    font-size: 2.5rem;
    text-align: center;
    color: var(--purple-primary);
    margin-top: 4rem;
  }

  span {
    color: var(--accent-pink);
  }

  .c-text {
    font-size: 1.3rem;
    text-align: center;
    color: var(--lavender-secondary);
  }
`;

function PaymentSection() {
  return (
    <PaymentStyle>
      <InnerLayout>
        <h3>
          An exceptional service, <span>at the right price</span>
        </h3>
        <p className="c-text">Start with our free plan and switch to premium as you grow.</p>
        <div className="card-con">
          <Card
            account={"Free"}
            amount={"$0"}
            text={
              "Manage your business with a simple and efficient account."
            }
            button={"Free"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDisable={checkDisabled}
            text1={"10 free local transfers"}
            text2={"Free ATM withdrawals in Dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid debit cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />
          <Card
            account={"Premium"}
            amount={"$10"}
            text={
              "Manage your business with a simple and efficient account."
            }
            button={"Buy Now"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDisable={check}
            text1={"10 free local transfers"}
            text2={"Free ATM withdrawals in Dollar up to $250 per month"}
            text3={"Free payments to other Draft accounts"}
            text4={"Prepaid debit cards"}
            text5={"Virtual cards"}
            text6={"Priority 24/7 support"}
            text7={"Exchange 24 currencies"}
            text8={"Multi-user access"}
          />
        </div>
      </InnerLayout>
    </PaymentStyle>
  );
}

export default PaymentSection;
