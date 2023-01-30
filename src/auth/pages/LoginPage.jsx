import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'
import { types } from '../types/types'

export const LoginPage = () => {

  const {login, logout} = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {
    login('Miguel Martin');
    navigate('/',{
        replace: true
    })
  }
  return (
    <div className="container mt-5">
        <h1>LoginPage</h1>
        <hr />
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
    </div>
  )
}
