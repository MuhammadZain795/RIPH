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
            <MonkeyandCircle>
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
                        <Amount>
                            $340,000
                        </Amount>
                        <Raised>Raised</Raised>
                        <Raised>Phase 1</Raised>
                        <Button>Get RIPH</Button>
                    </Content>
                </Circle>
                <Monkey src="/images/riphofficial.png"/>
            </MonkeyandCircle>
        </Container>
    )
}

const Container = styled.div`
    min-height: 42vw;
    position: relative;
    &:before{
        min-height: 42vw;
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
        padding: 0 1vw;
        cursor: pointer;
        font-size: 1vw;
    }
`
const MonkeyandCircle = styled.div`
    display: flex;
`
const Circle = styled.div`
    height:45vw;
    width: 40vw;
    /* border-radius: 80%; */
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 15vw;
    /* background-color: pink; */
    z-index: 0;
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
    height:8vw;
    width: 12vw;
    padding-top:5vw;
    padding-left: 6vw;
`
const Text = styled.div`
    font-size: 1vw;
    letter-spacing: 1.4px;
    padding-bottom: 2vw;
`
const Amount = styled.div`
    font-size: 2.5vw;
    letter-spacing: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Raised = styled(Amount)`
    font-size: 1vw;
    text-transform: uppercase;
    padding-top: 1vw;
`
const Button = styled.button`
    font-size: 1vw;
    letter-spacing: 4px;
    text-transform: uppercase;
    width:9vw;
    background-color: rgb(153,50,204);
    color: white;
    font-weight: bold;
    border-radius: 10%;
    padding: 0.9vw;
    margin-top: 1vw;
    margin-left: 7.5vw;
`
const Monkey = styled.img`
    height: 35vw;
    margin-bottom:0vw;
    position: absolute;
    z-index: 1;
    margin-left: 43vw;
    margin-top: 8vw;

`