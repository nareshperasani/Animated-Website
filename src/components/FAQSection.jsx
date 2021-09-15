import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import lines from '../img/lines.svg';
import questions from '../questions';
import Question from './Question';

const FaqStyle = styled.section`
    h3 {
        font-size: 2.5rem;
        text-align: center;
        color: var(--purple-primary);
        margin-top: 4rem;
    }

    span {
        color: var(--accent-pink);
    }

    .questions-con{
        padding-top: 1rem;
    }
`;

function FAQSection() {
    return (
        <FaqStyle>
            <InnerLayout>
                <h3>Frequently <span>asked questions</span></h3>
                <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
            </InnerLayout>
        </FaqStyle>
    )
}

export default FAQSection;
