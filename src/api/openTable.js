import axios from 'axios'

export default axios.create({
    baseUrl: 'https://opentable.herokuapp.com/api'
})