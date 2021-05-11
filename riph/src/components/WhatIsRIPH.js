import React from 'react'
import styled from 'styled-components'

export default function WhatIsRIPH() {
    return (
        <Container>
            <Content>
                <h1>WHAT IS RIPH?</h1>
                <p>The RIPH token is what will fuel the RIPH
                    ecosystem, acting as a transfer of the value between
                    all of our upcoming RIPH projects.
                </p>
                <p>RIPH will draw it's value from our expanding
                    network of ventures, each successful projects
                    gives RIPH a new use and new value.
                </p>
                <p>
                    All whilst raising funds for gorilla conservation,
                    helping to protact these majestic creatures import 
                    honor of the king, Harambe.
                </p>
            </Content>
            <Pic>
                <img src="/images/Rocket Ship.png"/>
            </Pic>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    height: 33vw;
`
const Content = styled.div`
    padding: 5vw;
    width: 50%;
    padding-left: 15vw;
    p{
        letter-spacing: 1.4px;
        font-size: 1.1vw;
    }
    h1{
        letter-spacing: 1.4px;
        padding-bottom:1vw;
        font-size: 2.5vw;
    }
`
const Pic = styled.div`
    width: 50%;
    padding: 5vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img{
        height: 20vw;
        width: 25vw;
    }
`