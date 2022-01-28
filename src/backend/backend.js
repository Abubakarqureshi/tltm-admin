export const db_url = "http://tlts-back.maqware.com/api/admin/"

export const fetchDbPost = async (url, token, payload) => {
  try {
    return fetch(`${db_url}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + token,
        mode: 'no-cors',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error)
  }
}

export const fetchDbGet = async (url, token) => {
  try {
    return fetch(`${db_url}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + token,
        mode: 'no-cors',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error)
  }
}