import React from 'react'
import styled from 'styled-components'
import { PieChart } from 'react-minimal-pie-chart';

export default function Footer() {
    return (
        <Container>
            <FAQ>
                <h1>Frequently Asked Questions</h1>
                <h3>Question 1?</h3>
                <p>Answer...</p>
                <h3>Question 2?</h3>
                <p>Answer...</p>
                <h3>Question 3?</h3>
                <p>Answer...</p>
                <h3>Question 4?</h3>
                <p>Answer...</p>
                <h3>Question 5?</h3>
                <p>Answer...</p>
            </FAQ>
            <Chart>
                <ChartDiv>
                    <PieChart
                        data={[
                            { title: 'Teams and Founders', value: 45, color: '#00308F' },
                            { title: 'Contributors and Advisors', value: 25, color: '#C13C37' },
                            { title: 'Market Development', value: 20, color: '#6A2135' },
                            { title: 'Reserved Funding', value: 10, color: '#E38627' },
                        ]}
                    />
                </ChartDiv>
            </Chart>
        </Container>
    )
}

const Container = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
`
const FAQ = styled.div`
    width: 50%;
    padding: 5vw;
    padding-left: 10vw;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    h1{
        font-size: 2vw;
    }
    h3{
        font-size: 1vw;
        margin-top: 2vw;
    }
    p{
        font-size: 0.8vw;
    }
`
const Chart = styled.div`
    width: 50%;
`
const ChartDiv = styled.div`
    margin: 10vw;
`