import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";
import chart from '../img/chart.svg';
import AnimatedButton from "./AnimatedButton";
import { Bounce, Roll } from "react-reveal";

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        margin-top:2rem;
        @media screen and (max-width:1347px){
          grid-template-columns: repeat(1, 1fr);
      }
    }

    .chart-left{
        position: relative;
            right: 3rem;
            @media screen and (max-width:1347px){
              grid-template-columns: repeat(1, 1fr);
          }
        .stats{
            img{
                box-shadow:0px 25px 50px rgba(22, 25, 79, 0.05);
                border-radius: 55px;
                width: 100%;
            }
            .stats-money{
                display: flex;
                padding-bottom: 1.3rem;
                justify-content: space-between;
            }
        }
    }

    .chart-right{
        position: relative;
            left: 3rem;

            @media screen and (max-width:1347px){
              margin-right: 2rem;
            }
        p
        {
            padding: 1.3rem 0;
            line-height: 1.8rem;
            font-size: 1.04rem;
            color: var(--lavender-secondary);
        }

        h2{
            font-size: 3rem;
            color: var(--purple-primary);
        }
    }
`;

function ChartSection() {
  return (
    <ChartStyled>
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name={"Balance"} amount={"$250"} />
                <ChartStats name={"Last Transaction"} amount={"$1000"} />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="chart-right">
              <h2>Manage your finances like a pro in to time</h2>
              <Roll right>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita voluptas at doloremque ad ullam quod quo, quisquam id reiciendis assumenda. Impedit, quod vitae aspernatur quo porro debitis natus repudiandae.</p>
              </Roll>
              <Bounce right>
                <AnimatedButton name= {"Learn More"} />
              </Bounce>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
}

export default ChartSection;
