import { useState } from 'react'
import { DOMAIN_API } from '../Constants'
import fetchAPI from '../API'


const useAuth = () => {
  // const getLocalStorage = localStorage.getItem("dataAuth");

  const [dataAuth, setAuth] = useState({})
  const [loading, setLoading] = useState(false)

  // //  ketika local storage nya ada, maka update state dengan data dari local storage
  // useEffect(() => {
  //   if (getLocalStorage) {
  //     setAuth(JSON.parse(getLocalStorage));
  //   }
  // }, [getLocalStorage]);

  // hit API ketika klik submit button
  // ACTION
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

  // HIT POST USER LOGIN => ACCESS TOKEN, ||
  // HIT GET DATA USER LOGIN => EMAIL, USERNAME, PASSWORD
  // /admin/getCarList => authentikasi = >cookie access token dibawa ketika hit api nya , be melakukan pengecekan apakah user authenticated atau tidak

  // cookies dipakai utk
  // nyimpen data token authentication,
  // dark mode light mode.  document.cookie="dark=true";
  // bahasa, en indonesia . document.cookie="isEn=false";
  // tokped buka lewat hp atau tetap di browser,
  // dll

  // localStorage || sessionStorage
  // history of search;
  // todo app dan aplikasi sederhana lainnya.

  return [
    postAuth,
    {
      loading,
      dataAuth
    }
  ]
}

export default useAuth