import { useState } from 'react'
import { DOMAIN_API } from '../Constants'
import fetchAPI from '../API'


const useAuth = () => {

  const [dataAuth, setAuth] = useState({})
  const [loading, setLoading] = useState(false)

  const postAuth = (param) => {
    setLoading(true)
    const apiURL = `${DOMAIN_API}/customer/auth/login`
    fetchAPI(param, apiURL).then((result) => {
      setAuth(result)
      setLoading(false)
      if (result.access_token) {
        const accessToken = result.access_token
        document.cookie = `uidTokenBinarApp=${accessToken};max-age=600`
      }
    }).catch((error) => {
      setLoading(false)
      console.log('error nih bos' + error)
    })
  }

  return [
    postAuth,
    {
      loading,
      dataAuth
    }
  ]
}

export default useAuth