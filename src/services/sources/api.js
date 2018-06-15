import apisauce from 'apisauce'

const create = () => {
  const baseURL = process.env.REACT_APP_API_URI || "http://localhost:5000/api/0.1"

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const market = (market) => api.get(`/market/${market}`)

  return {
    market,
  }
}

export default {
  create
}
