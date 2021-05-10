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
                <Content>
                    <LogoII src="/images/RIPH Text Logo.png"/>
                    <Text>
                        RIPH is a digitall currency developed in honor of
                        the internet's most beloved gorilla, Harambe.
                    </Text>
                    <Text>
                        1% of the every transaction is automatically donated
                        towards a gorilla conservation fund.
                    </Text>
                </Content>
            </Circle>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    position: relative;

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
    position: relative;
    height: 18vh;
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
        font-size: 1vw;
    }
`
const Circle = styled.div`
    height:45vw;
    width: 40vw;
    border-radius: 80%;
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 15vw;
    /* background-color: pink; */
    &:before{
        height: 100%;
        width:100%;
        background: url("/images/Blank Gold Circle.png") center center / cover;
        background-size: 100% 100%;
        content: "";
        position: absolute;
        z-index: -1;
    }
`
const Content = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 25vw;
`
const LogoII = styled.img`
    height:12vw;
    width: 15vw;
    padding-top:5vw;
    padding-left: 5vw;
`
const Text = styled.div`
    font-size: 1vw;
    letter-spacing: 1.4px;
    padding-bottom: 2vw;
`