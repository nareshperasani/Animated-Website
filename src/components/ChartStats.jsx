import React from 'react';
import styled from 'styled-components';

const ChartStatsStyled = styled.div`
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid var(--border-colour);
    height: 10rem;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    

    p{
        color: #000;
    }

    h4{
        font-size: 2.5rem;
        color: var(--purple-primary)
    }
    
`;

function ChartStats({name, amount}) {
    return (
        <ChartStatsStyled>
            <p><b>{name}</b></p>
            <h4>{amount}</h4>
        </ChartStatsStyled>
    )
}

export default ChartStats;
