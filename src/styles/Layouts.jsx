import styled from "styled-components";

export const OuterLayout = styled.section`
    padding: 5rem 10rem;

    @media screen and (max-width:1347px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width:1186px){
        padding: 5rem 6rem;
    }
    @media screen and (max-width:990px){
        padding: 5rem 4rem;
    }
`;

export const InnerLayout = styled.section`
    padding: 1rem 0;
`;