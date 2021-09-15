import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg';
import blob1 from '../img/blob_top.svg';
import blob2 from '../img/blob_bottom.svg';

const AnimatedButtonStyled = styled.button`
    background-color: var(--dark-primary);
    display: flex;
    border: none;
    padding: .9rem 2rem;
    border-radius: 25px;
    font-family: inherit;
    font-size: 1.1rem;
    align-items: center;
    color: inherit;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    

    .arrow{
        padding-left: 0.9rem;
    }

    &:hover{
        color: var(--accent-pink);
        .blob1{
            transform: translateX(-100px);
            transition: all .8s ease-in-out;
        }

        .blob2{
            transform: translateX(100px);
            transition: all .8s ease-in-out;
        }

        .arrow{
            padding-left: 1.4rem;
            transition: all .3s ease-in-out;
        }
    }

    .blob1, .blob2{
        position: absolute;
        pointer-event: none;
    }

    .blob1{
        top: 0;
        right: 0;
    }

    .blob2{
        bottom: 0;
    }
`;

function AnimatedButton({name}) {
    return (
        <AnimatedButtonStyled>
            {name}
            <img src={arrow} alt="" className="arrow" />
            <img src={blob1} alt="" className="blob1" />
            <img src={blob2} alt="" className="blob2" />
        </AnimatedButtonStyled>
    )
}

export default AnimatedButton;
