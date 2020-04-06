import { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = searchTerm => {
        axios.get(`https://opentable.herokuapp.com/api/restaurants`, {
            params: {
                city: 'chicago',
                name: searchTerm
            }
        })
            .then(({ data }) => {
                setResults(data.restaurants)
            })
            .catch(err => {
                setErrorMessage('Something went wrong')
            })
    }

    useEffect(() => {
        searchApi()
    }, [])

    return [searchApi, results, errorMessage]
}