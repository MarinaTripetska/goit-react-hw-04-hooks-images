import axios from 'axios'
const PATH = 'https://pixabay.com/api/'
const API_KEY = '23596764-fc841aad9a4a9806cf99f02b3'

export default async function fetchImages(currentName, page = 1) {
  const resp = await axios.get(
    `${PATH}?q=${currentName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=9`,
  )

  return resp.data.hits
}
