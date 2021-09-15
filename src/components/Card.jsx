import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    background-color: #fff;
    padding: 3.5rem 2rem;
    border-radius: 50px;
    box-shadow:0px 25px 50px rgba(22, 25, 79, 0.05);

    h4{
        font-size: 2.1rem;
        color: var(--dark-primary);
        text-align: center;

        span{
            font-size: 1.5rem;
        }
    }

    .p-text{
        padding: 1rem 0;
        font-size: 1.2rem;
        color: var(--lavender-secondary);
        text-align: center;
    }

    .card-img{
        text-align: center;
        
        img{
            width: 70%;
        }
    }

    .plan-con{
        display: flex;
        justify-content: center;
        padding: 1rem 0;
        img{
            padding: 0 0.3rem;
        }
    }

    .text-check{
        display: flex;
        align-items: center;
        color: #000;
        padding: .5rem 0;

        img{
            padding-right: 0.3rem;
            width: 25px;
        }
    }

    .button-con{
        text-align: center;
        padding: 1.5rem 0;

        button{
            border: 2px solid #6A6D9E;
            padding: .6rem 1.8rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 25px;
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--dark-primary);
            transition: all .5s ease-in-out;

            &:hover{
                color: #fff;
                background-color: var(--accent-pink);
                border-color: var(--border-colour);
            }
        }
    }

`;

function Card({account, amount, text, button, card, active, inactive,
     check, checkDisable, text1, text2, text3, text4, text5, text6, text7, text8}) {
    return (
        <CardStyle>
            <h4>{account}</h4>
            <h4>{amount} <span>/m</span></h4>
            <p className="p-text">{text}</p>
            <div className="card-img">
                <img src={card} alt="" />
            </div>
            <div className="plan-con">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="list-c">
                <p className="text-check">
                    <img src={check} alt="" />{text1}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />{text2}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />{text3}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />{text4}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />{text5}
                </p>
                <p className="text-check">
                    <img src={checkDisable} alt="" />{text6}
                </p>
                <p className="text-check">
                    <img src={checkDisable} alt="" />{text7}
                </p>
                <p className="text-check">
                    <img src={checkDisable} alt="" />{text8}
                </p>
            </div>
            <div className="button-con">
                <button>{button}</button>
            </div>
        </CardStyle>
    )
}

export default Card;
