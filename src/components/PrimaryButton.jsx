import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: var(--accent-pink);
    border: none;
    padding: .55rem 1.8rem;
    border-radius: 20px;
    font-family: inherit;
    font-size: 1.04rem;
    color: inherit;
    cursor: pointer;
`;

function PrimaryButton({name}) {
    return (
        <Button>
            {name}
        </Button>
    )
}

export default PrimaryButton;
