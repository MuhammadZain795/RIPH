import React from 'react'
import styled from 'styled-components'

export default function RIPH() {
    return (
        <Container>
            <Header>
                <Logo src="/images/RIPH ICO Logo.png"/>
                <Links>
                    <a>
                        <span>Home</span>
                    </a>
                    <a>
                        <span>About</span>
                    </a>
                    <a>
                        <span>ICO</span>
                    </a>
                    <a>
                        <span>INFO</span>
                    </a>
                    <a>
                        <span>Roadmap</span>
                    </a>
                    <a>
                        <span>Q&A</span>
                    </a>
                    <a>
                        <span>Contact Us</span>
                    </a>
                    <a>
                        <span>Facebook</span>
                    </a>
                    <a>
                        <span>Twitter</span>
                    </a>
                </Links>
            </Header>
            <Circle>

            </Circle>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    /* padding: 0 calc(3.5vw + 5px); */
    position: relative;
    /* overflow-x: hidden; */

    &:before{
        min-height: 70vh;
        background: url("/images/Galaxy.jpg") center center / cover;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Logo = styled.img`
    height: 20hv;
    width: 20vw;
    padding-left: 10vw;
`
const Links = styled.div`
    color: white;
    position: absolute;
    right:0;
    a{
        text-transform: uppercase;
        letter-spacing: 1.4px;
        padding: 0 10px;
        cursor: pointer;
    }
`
const Circle = styled.div`
    
`