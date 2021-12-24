export const API_KEY = 'AIzaSyA8zlguZvshGclLLgePtXJrO7z3LDq8xl8'

export const delay = (ms) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, ms );
  })
}