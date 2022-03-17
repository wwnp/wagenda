import { useState } from 'react'
import { motion } from 'framer-motion';
// import ReCAPTCHA from 'react-google-recaptcha';
import { API_RECAPCHA } from './../config';
const Form = ({ title, handleClick, error, success }) => {
  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('123456')
  const [capcha, setCapcha] = useState(null)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  return (
    <form className='form-login'>
      <h3>Login</h3>

      <label className='login-label' htmlFor="username">Username</label>
      <input
        className='login-input'
        id="username"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />

      <label className='login-label' htmlFor="password">Password</label>
      <input
        className='login-input'
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* <ReCAPTCHA
        className='mt-1'
        sitekey={API_RECAPCHA}
        onChange={(value) => {
          setCapcha(!!value)
        }}
      /> */}

      <motion.button
        whileHover={{
          scale: 1.05
        }}
        className='login-button mb-1'
        onClick={event => handleClick(event, { email, password, capcha })}
      >
        Log In
      </motion.button>
      {error && <p className='country-invalid mt-1'>{error}</p>}
      {success && <p className='country-valid'>{success}</p>}
    </form>

  )
}
function onChange(value) {
  console.log("Captcha value:", value);
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