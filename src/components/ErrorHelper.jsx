import React from 'react'

export const ErrorHelper = ({ type }) => {
  return type
    ? (
      <small id="emailHelp" className="form-text invalid invalid">
        {type.message}
      </small>
    )
    : (
      <small id="emailHelp" className="form-text system-text">
        [system_text]
      </small>
    )
}
