export const getUsersBuilder = ({ axios }, params) => {
  const { nationality, size } = params || {}
  if (!nationality || !size) {
    return Promise.reject(new Error('missing parameters'))
  }

  return axios.get(`${process.env.API_URL}?nat=${nationality}&results=${size}`)
}
