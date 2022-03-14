import { useState } from 'react'

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('123456')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  return (
    <div style={{
      width: 400,
      margin: '0 auto'
    }}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <br />
      <button
        onClick={e => handleClick(email, password)}
      >
        {title}
      </button>
    </div>
  )
}

export { Form }