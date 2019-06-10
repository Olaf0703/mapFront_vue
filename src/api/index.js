import axios from 'axios'
const APIurl = 'https://jsonplaceholder.typicode.com/posts'

export default async function fetchFaqs() {
  const response = await axios.get(APIurl)
  return response.data
}