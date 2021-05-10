import React from 'react'
import styled from 'styled-components'

export default function ICO() {
    return (
        <Container>
            <h1>ICO Structure</h1>
            <Blocks>
                <Block1>
                    <h3>First Release</h3>
                    <Circle1>
                        <h4>66,000,000 RIPH</h4>
                        <h3>90%</h3>
                        <h2>Discount</h2>
                        <h1>WEEK 1</h1>
                    </Circle1>
                </Block1>
                <Block2>
                    <h3>Second Release</h3>
                    <Circle2>
                        <h4>66,000,000 RIPH</h4>
                        <h3>75%</h3>
                        <h2>Discount</h2>
                        <h1>WEEK 2</h1>
                    </Circle2>
                </Block2>
                <Block3>
                    <h3>Third Release</h3>
                    <Circle3>
                        <h4>66,000,000 RIPH</h4>
                        <h3>50%</h3>
                        <h2>Discount</h2>
                        <h1>WEEK 3</h1>
                    </Circle3>
                </Block3>
            </Blocks>
            <Button>BUY RIPH</Button>
        </Container>
    )
}

const Container = styled.div`
    padding: 4vw 17vw;
    h1{
        display: flex;
        flex-direction: row;
        justify-content: center;
        letter-spacing: 1.4px;
        font-size: 2vw;
    }
`
const Blocks = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2vw;
    h3{
        font-size: 1.5vw;
        font-weight: inherit;
        letter-spacing: 1.4px;
        text-transform: uppercase;
    }
`
const Block1 = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Block2 = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Block3 = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Circle1 = styled.div`
    background-color: #2c3968;
    height: 12vw;
    width: 12vw;
    border-radius: 50%;
    margin: 1vw 0;
    color: white;
    h4{
        position: absolute;
        margin-left: 2.4vw;
        font-size: 1vw;
        font-weight: lighter;
    }
    h3{
        position: absolute;
        margin-left: 2vw;
        font-size: 4vw;
        font-weight: bold;
        margin-top: 2.6vw;
    }
    h2{
        position: absolute;
        font-size: 1vw;
        margin-top: 8vw;
        margin-left: 4vw;
    }
    h1{
        position: absolute;
        font-size: 1vw;
        margin-top: 9.5vw;
        margin-left: 4vw;
    }
`
const Circle2 = styled.div`
    background-color: #2c3968;
    height: 12vw;
    width: 12vw;
    border-radius: 50%;
    margin: 1vw 0;
    color: white;
    h4{
        position: absolute;
        margin-left: 2.4vw;
        font-size: 1vw;
        font-weight: lighter;
    }
    h3{
        position: absolute;
        margin-left: 2vw;
        font-size: 4vw;
        font-weight: bold;
        margin-top: 2.6vw;
    }
    h2{
        position: absolute;
        font-size: 1vw;
        margin-top: 8vw;
        margin-left: 4vw;
    }
    h1{
        position: absolute;
        font-size: 1vw;
        margin-top: 9.5vw;
        margin-left: 4vw;
    }
`
const Circle3 = styled.div`
    background-color: #2c3968;
    height: 12vw;
    width: 12vw;
    border-radius: 50%;
    margin: 1vw 0;
    color: white;
    h4{
        position: absolute;
        margin-left: 2.4vw;
        font-size: 1vw;
        font-weight: lighter;
    }
    h3{
        position: absolute;
        margin-left: 2vw;
        font-size: 4vw;
        font-weight: bold;
        margin-top: 2.6vw;
    }
    h2{
        position: absolute;
        font-size: 1vw;
        margin-top: 8vw;
        margin-left: 4vw;
    }
    h1{
        position: absolute;
        font-size: 1vw;
        margin-top: 9.5vw;
        margin-left: 4vw;
    }
`
const Button = styled.button`
    margin-left: 25vw;
    font-size: 1vw;
    height: 3vw;
    width: 7vw;
    border-radius: 20%;
    background-color: rgb(153,50,204);
    color: white;
    letter-spacing: 1.4px;
`