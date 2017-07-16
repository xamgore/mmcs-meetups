import axios from 'axios'

let axio = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}/api/v17`
})

if (process.env.NODE_ENV === 'development') {
  axio = axios.create({
    baseURL: `${window.location.protocol}//${window.location.hostname}:3001/api/v17`,
    timeout: 400
  })
}

export default axio
