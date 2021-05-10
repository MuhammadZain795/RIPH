import React from 'react'
import styled from 'styled-components'

export default function Ecosystem() {
    return (
        <Container>
            <MonkeySide>
                <Monkey src="/images/RIPH Coin.png"/>
                <CGaming src="/images/Blank Gold Circle.png"/>
                <CStaking src="/images/Blank Gold Circle.png"/>
                <CNFTs src="/images/Blank Gold Circle.png"/>
                <CPayments src="/images/Blank Gold Circle.png"/>
                <CStreaming src="/images/Blank Gold Circle.png"/>
            </MonkeySide>
            <TextSide>
                Text
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
    color: white;
    /* display: flex;
    justify-content: center; */
`
const TextSide = styled.div`
    color: white;
    width: 50%;
`
const Monkey = styled.img`
    width: 13vw;
    height: 13vw;
    position: absolute;
    padding-top: 10vw;
    padding-left: 18vw;
    z-index:1;
`
const CPayments = styled.img`
    width: 6vw;
    height: 6vw;
    position: absolute;
    z-index:2;
    padding-top: 14vw;
    padding-left: 35vw;
`
const CGaming = styled.img`
    width: 6vw;
    height: 6vw;
    position: absolute;
    z-index:3;
    padding-top: 8vw;
    padding-left: 10vw;
`
const CStaking = styled.img`
    width: 7vw;
    height: 7vw;
    position: absolute;
    z-index:4;
    padding-top: 4vw;
    padding-left: 30vw;
`
const CStreaming = styled.img`
    width: 5vw;
    height: 5vw;
    position: absolute;
    z-index:5;
    padding-top: 25vw;
    padding-left: 28vw;
`
const CNFTs = styled.img`
    width: 7vw;
    height: 7vw;
    position: absolute;
    z-index:6;
    padding-top: 20vw;
    padding-left: 10vw;
`