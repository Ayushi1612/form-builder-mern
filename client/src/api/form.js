import axios from 'axios'

const url = 'http://localhost:4000'

export const fetchList = () => axios.get(url)

export const createForm = (newForm) => axios.post(url, newForm)