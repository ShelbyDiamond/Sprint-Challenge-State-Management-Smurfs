import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllTheSmurfs, addNewSmurf } from "../actions"
import styled from "styled-components"

const ContainerDiv = styled.div`
  width: 800px;
  margin: auto;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Input = styled.input`
  margin-top: 20px;
  font-size: 1.6rem;
  width: 50%;
  padding: 4px;
`

const Button = styled.button`
  padding: 13px 25px;
  background-color: #bffc66;
  border-radius: 15px;
  border: unset;
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 2rem;
  color: #f2f7ff;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.3);
`

class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  }

  componentDidMount() {
    this.props.getAllTheSmurfs()
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.addNewSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    this.setState({ name: "", age: "", height: "" })
  }

  render() {
    return (
      <ContainerDiv>
        <Form onSubmit={this.submitHandler}>
          <Input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <Input
            type="text"
            placeholder="Enter Age"
            name="age"
            value={this.state.age}
            onChange={this.changeHandler}
          />

          <Input
            type="text"
            placeholder="Enter Height"
            name="height"
            value={this.state.height}
            onChange={this.changeHandler}
          />
          <Button>
            ADD NEWEST <br /> SMURF
          </Button>
        </Form>
      </ContainerDiv>
    )
  }
}
const mapStateToProps = state => ({
  smurf: state.smurf,
  loading: state.loading,
  error: state.error
})

export default connect(
  mapStateToProps,
  { getAllTheSmurfs, addNewSmurf }
)(App)
