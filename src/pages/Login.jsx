import { useCallback } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), [])
  const handleSetPassword = useCallback(
    (e) => setPassword(e.target.value),
    []
  )
  const handleLogin = useCallback(
    () => localStorage.setItem('user', JSON.stringify({ email, password })),
    [email, password]
  )
  return (
    <div className="flex flex-col items-center gap-1">
      <input
        placeholder="email"
        value={email}
        onChange={handleSetEmail}
      ></input>
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={handleSetPassword}
      ></input>
      <div> {email + ' ' + password} </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export { Login }
