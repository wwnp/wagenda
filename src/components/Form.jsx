import { useState } from 'react'
import { motion } from 'framer-motion';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('123456')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  return (
    <form className='form-login'>
      <h3>Login</h3>

      <label className='login-label' for="username">Username</label>
      <input
        className='login-input'
        id="username"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />

      <label className='login-label' for="password">Password</label>
      <input
        className='login-input'
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <motion.button
        whileHover={{
          scale: 1.05
        }}
        className='login-button'
        onClick={event => handleClick(event, email, password)}
      >
        Log In
      </motion.button>
    </form>

  )
}

export { Form }



/* <div style={{
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
    </div> */