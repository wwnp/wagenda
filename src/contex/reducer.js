export const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: 'test' }
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload }
    case 'SET_ONE_COUNTRY':
      return { ...state, oneCountry: action.payload }
    case 'SET_TWO_COUNTRY':
      return { ...state, twoCountry: action.payload }
    case 'STOP_LOADING':
      return { ...state, loading: false }
    case 'RESET_COUNTRIES':
      return { ...state, oneCountry: null, twoCountry: null }
    case 'CHANGE_RADIO_TYPE':
      return { ...state, radioType: action.payload }
    case 'TEST2':
      return { ...state, test: action.payload }
    default:
      return state
  }
}