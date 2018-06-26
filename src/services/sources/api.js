import apisauce from 'apisauce'

const create = () => {
  const baseURL = process.env.REACT_APP_API_URI || "http://localhost:5000/api/0.1"

  const api = apisauce.create({
    baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3600
  })

  const market = (market) => api.get(`/market/${market}`)
  const saveAsk = (ask) => api.post('/ask', ask)
  const myAsks = () => api.get('/user/asks')
  //User API
  const registerUser = (user) => api.post(`/user/register`, user)
  const getToken = (user) => api.post(`/user/token`, user)
  const getUser = (id) => api.get(`/user/${id}`)
  const saveBid = (bid) => api.post('/bid', bid)
  const myBids = (bid) => api.get('/user/bids')
  const acceptBid = (bidId) => api.post('/bid/accept', {bid_id: bidId})
  const rejectBid = (bidId) => api.post('/bid/reject', {bid_id: bidId})

  return {
    internal: api,
    market,
    saveAsk,
    myAsks,
    registerUser,
    getToken,
    getUser,
    saveBid,
    myBids,
    acceptBid,
    rejectBid,
  }
}

export default {
  create
}
