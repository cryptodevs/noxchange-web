const api = process.env.REACT_APP_API_URI || "http://localhost:5000/api/0.1"


const headers = {
  'Accept': 'application/json'
}

export async function registerUser(user) {
    const response = await fetch(`${api}/user/register`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    
    const data = await response.json()
    return data
}

export async function  getToken(user) {
    const response = await fetch(`${api}/user/token`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    console.log('DEBUG1', response.ok)
    if(response.ok === true){
        const data = await response    
        return data.json()
    }
    else{
        throw new Error("get token error")
    }

    
}

export async function getUser(id, token) {
    const response = await fetch(`${api}/user/${id}`, {
            ...headers,
            'Authorization': `token ${token}`
        })
    const data = await response.json()
    return data
}

//TODO: Recovery pass, edit user