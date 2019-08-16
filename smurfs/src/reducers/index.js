import { FETCH_SMURFS, FETCH_WORKED, FETCH_FAILED } from "../actions"

const initialState = {
  smurf: [],
  loading: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        loading: false
      }
    case FETCH_WORKED:
      return {
        ...state,
        loading: false,
        smurf: action.payload
      }
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
