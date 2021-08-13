import nodeFetch from 'node-fetch'
import { createApi } from 'unsplash-js'

export {
    index
}

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

const unsplash = createApi({
    accessKey: UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch
})

function index(req, res){
    unsplash.photos.getRandom({query: 'Italy'})
    .then(response => {
        console.log(response)
        return res.status(200).json(response)
    })
    .catch(error => {
        return res.status(500).json(error)
    })    
}