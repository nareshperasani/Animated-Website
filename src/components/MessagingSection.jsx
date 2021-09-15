import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import message1 from '../img/conversation.svg';
import bgCircle from '../img/circleBg.svg';

const MessageStyle = styled.section`

    .message-con{
        display: flex;
        margin-top: 1rem;
        align-items: center;

        @media screen and (max-width:1347px){
            display: grid;
            grid-template-columns: repeat(1, 1fr);
          }
    }

.left-section{
    position: relative;
    right: 2.5rem;

    .bgCircle{
        position: absolute;
        top: -9%;
        left: -9%;
        z-index: -1;
    }

    h2{
        font-size: 3rem;
        color: var(--purple-primary);
    }

    p{
        padding: 1.5rem 0;
        line-height: 1.8rem;
        font-size: 1.04rem;
        color: var(--lavender-secondary);
    }

        .image-con{
            display: flex;
            align-items: center;

            
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -.8rem;
            }
        }
}

.right-section{
    position: relative;

    img{
        position: relative;
        left: 1rem;
    }

    .bg-circle{
        position: absolute;
        bottom: -7%;
        left: 91%;
    }
}

`

function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-section">
                        <h2>We support you in 5 different languages</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum porro doloribus quia aperiam quae hic magnam illum natus perspiciatis incidunt soluta harum cupiditate eum maxime sint, aspernatur quasi quidem animi!</p>
                        <div className="image-con">
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                        </div>
                        <img src={bgCircle} alt="" className="bgCircle" />
                    </div>
                    <div className="right-section">
                        <img src={bgCircle} alt="" className="bg-circle" />
                        <img src={message1} alt="" />
                    </div>
                </div>
            </InnerLayout>
            
        </MessageStyle>
    )
}

export default MessagingSection;
