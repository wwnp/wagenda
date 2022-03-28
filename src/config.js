import react from './assets/images/react.png'
import rboot from './assets/images/rboot.png'
import stack from './assets/images/stack.png'
import axios from './assets/images/axios.png'
import framer from './assets/images/framer.png'
import gmaps from './assets/images/gmaps.png'
import ricons from './assets/images/ricons.svg'
import github from './assets/images/github.png'

import france from './assets/images/france.png'
import russia from './assets/images/russia.png'
import usa from './assets/images/usa.png'
import uk from './assets/images/uk.png'
import belgium from './assets/images/belgium.png'
import ukraine from './assets/images/ukraine.png'
import norway from './assets/images/norway.png'

export const API_KEY = process.env.REACT_APP_API_KEY // NOT MY API
export const homeImages = {
  react: [react, 'https://reactjs.org/'],
  rboot: [rboot, 'https://react-bootstrap.netlify.app/'],
  stack: [stack, 'https://stackoverflow.com/'],
  axios: [axios, 'https://github.com/axios/axios'],
  framer: [framer, 'https://www.framer.com/'],
  gmaps: [gmaps, 'https://maps.google.com/'],
  ricons: [ricons, 'https://react-icons.github.io/react-icons/'],
  github: [github, 'https://github.com/'],
}
export const countriesFlags = {
  'france': france,
  'russia': russia,
  'usa': usa,
  'uk': uk,
  'belgium': belgium,
  'ukraine': ukraine,
  'norway': norway,
}
export const urlYoutube = {
  'france': 'https://www.youtube.com/embed/4K1q9Ntcr5g',
  'russia': 'https://www.youtube.com/embed/AOAtz8xWM0w',
  'usa': 'https://www.youtube.com/embed/eqgQ3rKX6QY',
  'uk': 'https://www.youtube.com/embed/I8KSAtos-dk',
  'belgium': 'https://www.youtube.com/embed/d9u_Ituu2Q8',
  'ukraine': 'https://www.youtube.com/embed/nybtOIxlku8',
  'norway': 'https://www.youtube.com/embed/VRS6cbLOrPQ',
  'draw': 'https://www.youtube.com/embed/tH2w6Oxx0kQ',
}
export const adminUid = [process.env.REACT_APP_ADMIN_UID, ['1']]
export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const passwordPattern = /.{6,}/
export const API_RECAPCHA = process.env.REACT_APP_API_RECAPCHA
export const LIMIT = 3
export const AMOUNT_TIMER = 300
export const WINDOW_SIZE = 965
export const CAPITAL = 'Capital'
export const PROVINCE = 'Province'
export const LAT_LNG_PATTERN = /^(\()([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?(\)))$/
export const HTTP_PATTERN = /https?:\/\//