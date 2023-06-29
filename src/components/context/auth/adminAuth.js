import React, { createContext } from 'react'
import adminAuth from '../../../Hooks/adminAuth'
import { node } from 'prop-types'

export const AuthAdminContext = createContext(null) //= > state

const AuthAdminProvider = ({ children }) => {
  const [postAuth, data] = adminAuth() //= > custom hooks;

  const val = [postAuth, { ...data }]

  return <AuthAdminContext.Provider value={val}>{children}</AuthAdminContext.Provider>
}

AuthAdminProvider.propTypes = {
  children: node.isRequired
}

export default AuthAdminProvider