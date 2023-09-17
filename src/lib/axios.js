import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://poostock.theteksol.com',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
