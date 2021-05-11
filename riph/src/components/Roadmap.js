import React from 'react'
import styled from 'styled-components'

export default function Roadmap() {
    return (
        <Container>
            <h1>Roadmap v2.0</h1>
        </Container>
    )
}

const Container = styled.div`
    background-color: #DCDCDC;
    height: 45vw;
    h1{
        font-size: 2vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 5vw;
        text-transform: uppercase;
        letter-spacing: 1.4px;
    }
`