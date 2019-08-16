import React from "react"
import styled from "styled-components"
import TheSmurf from "./TheSmurf"

const Div = styled.div`
  width: 750px;
  margin: auto;
`
const BackgroundImg = styled.img`
  width: 1000px;
`
const H1Tag = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: chocolate;
`
const Section = styled.section`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  background: purple;
  justify-content: center;
`

const Smurfs = props => {
  return (
    <Div>
      <H1Tag>Smurf Village</H1Tag>
      <BackgroundImg
        src={
          "https://vignette.wikia.nocookie.net/smurfs/images/f/f9/STLV_Smurf_Village.jpg/revision/latest?cb=20170208104106"
        }
        alt="Image of a knock off of the Smurf village"
      />
      <Section>
        {props.smurf.map(smurf => {
          return (
            <TheSmurf name={smurf.name} age={smurf.age} height={smurf.height} />
          )
        })}
      </Section>
    </Div>
  )
}

export default Smurfs
