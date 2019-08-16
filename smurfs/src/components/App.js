import React from "react"
import "./App.css"
import { connect } from "react-redux"
import SmurfForm from "../components/SmurfForm"
import SmurfCard from "../components/SmurfCard"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  justify-content: center;
`

const App = props => {
  console.log("here", props.smurf)
  return (
    <Div className="App">
      <SmurfCard smurf={props.smurf} />
      <SmurfForm />
    </Div>
  )
}

const mapStateToProps = state => ({
  smurf: state.smurf,
  loading: state.loading,
  error: state.error
})

export default connect(
  mapStateToProps,
  {}
)(App)
