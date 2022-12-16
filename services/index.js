import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3'
export const api = {
    call:() =>{
        return axios.create({
            baseURL
        })

    }
}