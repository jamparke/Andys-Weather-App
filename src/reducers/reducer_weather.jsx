import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // always return a new state, not a changed old state
      return [action.payload.data, ...state] // [city, city, city]
  }
  return state
}
