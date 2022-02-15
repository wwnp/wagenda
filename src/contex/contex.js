import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const CountryContex = createContext()
export const CAPITAL = 'capital'
export const PROVINCE = 'province'
const initialState = {
  countries: [],
  loading: true,
  oneCountry: null,
  twoCountry: null,
  radioType: CAPITAL,
  countriesDOM: [],
  menu: false,
  estimates: [],
  modal:false
}
export const ContexProvider = (props) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.fetchTest = () => {
    dispatch({ type: 'TEST' })
  }
  value.setCountries = (countries) => {
    dispatch({ type: 'SET_COUNTRIES', payload: countries })
  }
  value.stopLoading = () => {
    dispatch({ type: 'STOP_LOADING' })
  }
  value.setOneCountry = (country) => {
    dispatch({ type: 'SET_ONE_COUNTRY', payload: country })
  }
  value.setTwoCountry = (country) => {
    dispatch({ type: 'SET_TWO_COUNTRY', payload: country })
  }
  value.resetCountries = () => {
    dispatch({ type: 'RESET_COUNTRIES' })
  }
  value.changeRadioType = (type) => {
    dispatch({ type: 'CHANGE_RADIO_TYPE', payload: type })
  }
  value.addElToDom = (el) => {
    dispatch({ type: 'ADD_EL', payload: el })
  }
  value.resetElDom = (el) => {
    dispatch({ type: 'RESET_EL_DOM' })
  }
  value.changeMenu = (menu) => {
    dispatch({ type: 'CHANGE_MENU', payload: menu })
  }
  value.setEstimates = (estimates) => {
    dispatch({ type: 'SET_ESTIMATES', payload: estimates })
  }
  value.changeModal = (modal) => {
    dispatch({ type: 'CHANGE_MODAL', payload: modal })
  }
  return (
    <CountryContex.Provider value={value}>
      {props.children}
    </CountryContex.Provider>
  )
}

// make contex.js reducer.js
// contex.js:
// const initialState = {
//   test: 'sex',
// }
// export const ContexProvider = (props) => {
//   const [value, dispatch] = useReducer(reducer, initialState);
//   value.fetchTest = () => {
//     dispatch({ type: 'TEST' })
//   }
//    value.setCountries = (countries) => {
//      dispatch({ type: 'SET_COUNTRIES', payload: countries })
//    }
//   return (
//     <CountryContex.Provider value={value}>
//       {props.children}
//     </CountryContex.Provider>
//   )
// }
// reducer.js:
// export const reducer = (state, action) => {
//   switch (action.type) {
//     case 'TEST':
//       return { ...state, test: 'test' }
//     default:
//       return state
//   }
// }
// ---------------------
// wrap all app in ContexProvider:
// index.js:
// <ContexProvider>
// <BrowserRouter>
//   <App />
// </BrowserRouter>
// </ContexProvider>
// ---------------------
// In needed component use :
// Home.js:
// const { setCountries } = useContext(CountryContex)

// ---------------------
// MAKE NEW ACTION
// value.resetCountries= () => {
//   dispatch({ type: 'RESET_COUNTRIES'})
// }
// ---------------------

// ---------------------