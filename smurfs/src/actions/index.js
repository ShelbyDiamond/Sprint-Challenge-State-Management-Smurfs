import axios from "axios"

export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_WORKED = "FETCH_WORKED"
export const FETCH_FAILED = "FETCH_FAILED"

export const getAllTheSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS })
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => dispatch({ type: FETCH_WORKED, payload: response.data }))
    .catch(error => {
      dispatch({ type: FETCH_FAILED, payload: error })
    })
}
export const addNewSmurf = newSmurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => dispatch({ type: FETCH_WORKED, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILED, payload: error }))
}
