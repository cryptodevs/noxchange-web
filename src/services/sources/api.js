import apisauce from 'apisauce'

const token = 'eyJhbGciOiJIUzI1NiIsImlhdCI6MTUyOTAwODYxNywiZXhwIjoxNTMxNjAwNjE3fQ.eyJ1c2VybmFtZSI6ImpvYWNvIiwidXNlcmlkIjoxfQ.exx8AGNQvomXGtMoV_aeh6bO0enwA9jFS6UpPli3M1k'

const create = () => {
  const baseURL = process.env.REACT_APP_API_URI || "http://localhost:5000/api/0.1"

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Authorization': `Token ${token}`,
    },
    timeout: 10000
  })

  const market = (market) => api.get(`/market/${market}`)
  const saveAsk = (ask) => api.post(`/ask`, ask)
  const myAsks = () => api.get(`/user/asks`)

  return {
    market,
    saveAsk,
    myAsks,
  }
}

export default {
  create
}
