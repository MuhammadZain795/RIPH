import React from 'react'
import styled from 'styled-components'

export default function Roadmap() {
    return (
        <Container>
            <h1>Roadmap v2.0</h1>
            <img src="/images/RIPH Coin.png"/>
            <InsideDiv>
                <h1>Roadmap v1.0</h1>
                <img src="/images/RIPH Coin.png"/>
                <TextLogo><img src="/images/RIPH Text Logo.png"/></TextLogo>
                <FirstLineOfText>
                    <Text1>
                        <p>'RIPH' Development
                            Begins
                        </p>
                        <p>Initial Team
                            Recruitment
                        </p>
                        <p>Market Research</p>
                    </Text1>
                    <Text2>
                        <p>ICO Registrations Open</p>
                        <p>Public Completitions &
                            Giveways Begin
                        </p>
                        <p>NFT Launch
                            *Founder's Edition*
                        </p>
                        <p>'RIPH' Platform
                            Announcment
                        </p>
                    </Text2>
                    <Text3>
                        <p>Recruitment of
                            'Project H&F' Team
                        </p>
                        <p>NFT Release
                            (Third wave)
                        </p>
                        <p>Third Wave of
                            Marketing
                        </p>
                    </Text3>
                    <Text4>
                        <p>'Project H&F' Team
                            Expansion
                        </p>
                        <p>Seek 'Project H&F'
                            Partnerships
                        </p>
                        <p>'Project H&F'
                            Adversitsing Begins
                        </p>
                        <p>
                            NFT Release
                            (Fifth Wave)
                        </p>
                    </Text4>
                    <Text5>
                        <p>Recruitment of
                            'Project x' Team
                        </p>
                        <p>'Project H&F' Partners
                            Announced
                        </p>
                        <p>'Project H&F'
                            Officialy launches
                        </p>
                        <p>
                            'RIPH' Token burn
                        </p>
                        <p>
                            Roadmap v1.3 update
                        </p>
                    </Text5>
                </FirstLineOfText>
                <hr/>
                <SecLineOfText>
                    <Text6>
                        <p>Launch of social media
                            accounts
                        </p>
                        <p>first wave of
                            marketing
                        </p>
                        <p>continued recruitment</p>
                        
                        <p>'RIPH' Platform
                            locked in
                        </p>
                        <p>'Roadmap v1.0' release
                        </p>
                    </Text6>
                    <Text7>
                        <p>'RIPH' white paper
                        release</p>
                        <p>NFT release
                            (second wave)
                        </p>
                        <p>Roadmap v1.1 update</p>
                        <p>second wave of
                            marketing
                        </p>
                    </Text7>
                    <Text8>
                        <p>
                            'Project H&F'
                            Development begins
                        </p>
                        <p>
                            Roadmap v1.2 update
                        </p>
                        <p>NFT release
                            (Fourth wave)
                        </p>
                    </Text8>
                    <Text9>
                        <p>NFT release
                            (sixth wave)
                        </p>
                        <p>'Project X' is decoded
                            Based on market
                            research and funnel
                            system
                        </p>
                        <p> Seek 'Project H&F'
                            Partnerships
                        </p>
                    </Text9>
                </SecLineOfText>
            </InsideDiv>
        </Container>
    )
}

const Container = styled.div`
    background-color: #DCDCDC;
    height: 55vw;
    h1{
        font-size: 2vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 5vw;
        text-transform: uppercase;
        letter-spacing: 1.4px;
        margin-bottom: 4vw;
    }
    img{
        position: absolute;
        z-index: 1;
        height: 20vw;
        width: 20vw;
        margin-top: 20vw;
    }
`
const InsideDiv = styled.div`
    height: 35vw;
    margin: 0 10vw;
    background-image: linear-gradient(black, green);
    h1{
        position: absolute;
        padding-top: 1.5vw;
        padding-left: 2vw;
        color: white;
        font-size: 1.5vw;
        letter-spacing: 2px;
    }
    img{
        position: absolute;
        height: 4vw;
        width: 4vw;
        margin-top: 2vw;
        margin-left: 30vw;
    }
    hr{
        color: green;
        width: 80%;
        padding-top:0vw;
    }
`
const TextLogo = styled.div`
    img{
        position: absolute;
        height: 9vw;
        width: 6vw;
        margin-top: 0vw;
        margin-left: 35vw;
    }
`
const FirstLineOfText = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    padding-top: 8vw;
    padding-left: 6vw;
    p{
        font-size: 0.6vw;
    }
`
const Text1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%
`
const Text2 = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
`
const Text3 = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
`
const Text4 = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Text5 = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const SecLineOfText = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    padding-top: 2vw;
    padding-left: 12vw;
    p{
        font-size: 0.6vw;
    }
`
const Text6 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%
`
const Text7 = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
`
const Text8 = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
`
const Text9 = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`