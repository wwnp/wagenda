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
    case 'ADD_EL':
      return { ...state, countriesDOM: [...state.countriesDOM, action.payload] }
    case 'RESET_EL_DOM':
      return { ...state, countriesDOM: [] }
    case 'CHANGE_MENU':
      return { ...state, menu: action.payload }
    case 'SET_ESTIMATES':
      return { ...state, estimates: action.payload }
    case 'CHANGE_MODAL':
      return { ...state, modal: action.payload }
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload }
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_TOKEN':
      return { ...state, token: action.payload }
    default:
      return state
  }
}