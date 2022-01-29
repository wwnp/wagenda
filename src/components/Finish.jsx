import React from 'react'
export const Finish = props => {
  const {
    countryOne,
    countryTwo,
    counterFirst,
    counterSecond,
  } = props
  console.log(counterFirst,'counterFirst')
  console.log(counterSecond,'counterSecond')
  let result = null
  if(counterFirst > counterSecond){
    result = countryOne
  }
  if(counterSecond > counterFirst){
    result = countryTwo
  }
  if(counterSecond === counterFirst){
    result = 'Draw'
  }
  return (
    <div >
      winner is {result}
    </div>
  )
}