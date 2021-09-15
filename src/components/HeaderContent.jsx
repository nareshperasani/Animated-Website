import React from 'react';
import styled from 'styled-components';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';
import AnimatedButton from './AnimatedButton';
import { Fade } from 'react-reveal';


const HeaderContentStyle = styled.div`
    display: flex;

    .left-content{
        display: flex;
        align-items: center;
        padding-bottom: 12rem;

        h1{
            font-size: 3rem;
            font-weight: 700;
        }

        p{
            padding: 1.5rem;
            margin-left: -1.5rem;
            line-height: 1.8rem;
            font-size: 1.04rem;
        }
    }

    .right-content{
        position: relative;
        display: flex;
        left: 40px;

        .phone{
            height: 90%;
            
        }

        .ring1{
            position: absolute;
            bottom: 22%;
            right: 45px;
            left: auto;
            width: 14%;
            animation: move2 5s infinite;
            transition: all 0.4s ease-in-out;
        }

        .message1{
            position: absolute;
            right: 4rem;
            top: 20px;
            left: auto;
            width: 14%;
            animation: move 20s infinite;
            transition: all 0.4s ease-in-out;
        }

        .message2{
            position: absolute;
            bottom: 26%;
            left: 0;
            width: 14%;
            animation: move 8s infinite;
            animation-delay: 0.5s;
            transition: all 0.4s ease-in-out;
        }
    }

    //Header Animations
    .message1{
        @keyframes move {
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0) scale(1) translateX(0);
            }
        }

        @keyframes move2 {
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0) scale(1) translateX(0);
            }
        }
    }
`;


function HeaderContent() {
    return (
        <HeaderContentStyle>
            <div className="left-content">
                <Fade left>
                <div className="text-content">
                <h1>Smart banking for freelancers</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis sit tenetur suscipit aut eos est, totam quam, laboriosam sequi officia, quaerat ipsum voluptatum.
                </p>
                <AnimatedButton name={"Register Now"} />
                </div>
                </Fade>
            </div>
            <Fade right>
            <div className="right-content">
                <img src={phone} alt="" className="phone" />
                <img src={ring1} alt="" className="ring1" />
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />
            </div>
            </Fade>
        </HeaderContentStyle>
    )
}

export default HeaderContent;
