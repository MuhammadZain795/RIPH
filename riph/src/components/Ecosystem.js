import React from 'react'
import styled from 'styled-components'

export default function Ecosystem() {
    return (
        <Container>
            <MonkeySide>
                <Monkey>
                    <img src="/images/RIPH Coin.png"/>
                </Monkey>
                <CGaming>
                    <img src="/images/Blank Gold Circle.png"/>
                    <h1>Gaming</h1>
                </CGaming>
                <CStaking>
                    <img src="/images/Blank Gold Circle.png"/>
                    <h1>Staking</h1>
                </CStaking>
                <CNFTs>
                    <img src="/images/Blank Gold Circle.png"/>
                    <h1>NFTs</h1>
                </CNFTs>
                <CPayments>
                    <img src="/images/Blank Gold Circle.png"/>
                    <h1>Payments</h1>
                </CPayments>
                <CStreaming>
                    <img src="/images/Blank Gold Circle.png"/>
                    <h1>Streaming</h1>
                </CStreaming>
            </MonkeySide>
            <TextSide>
                <h1>We' re Building an Ecosystem</h1>
                <p>As we grow, so does RIPH.</p>
                <p>As we expand into new field, developing new
                    projects, we provide RIPH with more utility which
                    in turns gives it more value.</p>
                <p>The utilisation of RIPH will also be helping in the
                    conservation of gorillas. Automatically donating
                    1% of all transactions of charity.
                </p>
                <p>We're at the beginning of an exciting journey with
                    an already incredibly supportive community.
                </p>
            </TextSide>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    height: 33vw;
    background-color: black;
`
const MonkeySide = styled.div`
    width: 50%;
    color: #D3D3D3;
`
const TextSide = styled.div`
    color: white;
    width: 50%;
    padding: 6vw;
    letter-spacing: 1.4px;
    p{
        font-size: 1vw;
        padding-top: 1vw;
    }
    h1{
        font-size: 2vw;
    }
`
const Monkey = styled.div`
    position: absolute;
    z-index:1;
    img{
        position: absolute;
        width: 13vw;
        height: 13vw;
        padding-top: 10vw;
        padding-left: 18vw;
    }
`
const CPayments = styled.div`
    position: absolute;
    z-index:1;
    img{
        position: absolute;
        width: 6vw;
        height: 6vw;
        padding-top: 14vw;
        padding-left: 34vw;
    }
    h1{
        position: absolute;
        padding-top: 15.7vw;
        padding-left: 34.9vw;
        font-size: 0.8vw;
        text-transform: uppercase;
    }
`
const CGaming = styled.div`
    position: absolute;
    z-index:1;
    img{
        position: absolute;
        width: 6vw;
        height: 6vw;
        padding-top: 5vw;
        padding-left: 12vw;
    }
    h1{
        position: absolute;
        padding-top: 6.5vw;
        padding-left: 13vw;
        font-size: 1vw;
        text-transform: uppercase;
    }
`
const CStaking = styled.div`
    position: absolute;
    z-index:1;
    img{
        position: absolute;
        width: 7vw;
        height: 7vw;
        padding-top: 3vw;
        padding-left: 33vw;
    }
    h1{
        position: absolute;
        padding-top: 4.8vw;
        padding-left: 34.7vw;
        font-size: 1vw;
        text-transform: uppercase;
    }
`
const CStreaming = styled.div`
    position: absolute;
    z-index:1;
    img{
        position: absolute;
        width: 6vw;
        height: 6vw;
        padding-top: 23vw;
        padding-left: 27vw;
    }
    h1{
        position: absolute;
        padding-top: 24.7vw;
        padding-left: 27.9vw;
        font-size: 0.7vw;
        text-transform: uppercase;
    }
`
const CNFTs = styled.div`
    position: absolute;
    z-index:1;
    img{
        position: absolute;
        width: 7vw;
        height: 7vw;
        padding-top: 23vw;
        padding-left: 10vw;
    }
    h1{
        position: absolute;
        padding-top: 25vw;
        padding-left: 12vw;
        font-size: 1vw;
        text-transform: uppercase;
    }
`