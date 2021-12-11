const API_KEY = 'AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw'

export const delay = (ms) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, ms );
  })
}