import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
import { Fade } from 'react-reveal';

const QuestionStyle = styled.div`
    background-color: #fff;
    margin: 1rem 3rem;
    padding: .9rem 1rem;
    border-radius: 5px;

    .toggle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        h4{
            color: #16194F;
            font-size: 1.4rem;
        }

        button{
            background: transparent;
            border: none;
            cursor: pointer;
        }
    }

    p{
        line-height: 1.8rem;
        font-size: 1.04rem;
        color: var(--lavender-secondary);
        transition: all .8s ease-in-out;
    }
`;

function Question({title, description}) {

    const [toggle, setToggle] = useState(false);

    const btnToggle = ()=>{
        setToggle(!toggle);
    }
    return (
        <Fade left cascade>
        <QuestionStyle>
            <div className="q-con">
                <div onClick={btnToggle} className="toggle-title">
                <h4>{title}</h4>
                <button>
                    {!toggle ? <img src={plus} alt="" /> : <img src={minus} alt="" /> }
                </button>
                </div>
                {toggle && <p>{description}</p>}
            </div>
        </QuestionStyle>
        </Fade>
    )
}

export default Question;
