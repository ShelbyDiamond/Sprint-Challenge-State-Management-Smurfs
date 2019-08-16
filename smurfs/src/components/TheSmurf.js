import React from "react"
import styled from "styled-components"

const SmurfContainer = styled.div`
  display: flex;
  background-color: #d291bc;
  color: white;
  margin: 20px;
  width: 300px;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
`
const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`

const BigDiv = styled.div`
  width: 70%;
`
const HeightAndAge = styled.p`
  font-size: 1.2rem;
  margin-top: 6%;
`
const TheSmurf = props => {
  return (
    <SmurfContainer>
      <BigDiv>
        <Heading>{props.name}</Heading>
        <HeightAndAge>{props.height} tall</HeightAndAge>
        <HeightAndAge>{props.age} smurf years old</HeightAndAge>
      </BigDiv>
    </SmurfContainer>
  )
}

export default TheSmurf
