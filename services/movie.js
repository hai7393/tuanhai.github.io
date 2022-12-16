import { api } from '.'
const MovieService = {
    getMovie({
        api_key='97fec3b200e130af67f0875b4fb27618',
        page = 1,
        ...restParam
    } = {}) {
        return api.call().get('/movie/top_rated', {
            params: {
                api_key,
                page,
                ...restParam
            }
        })
    },
    getMoviePopular({
        api_key='97fec3b200e130af67f0875b4fb27618',
        page = 1,
        ...restParam
    } = {}) {
        return api.call().get('/movie/popular', {
            params: {
                api_key,
                page,
                ...restParam
            }
        })
    },
    getMovieDetail({
        api_key='97fec3b200e130af67f0875b4fb27618',
        ...restParam
    } = {}) {
        return api.call().get(`/movie/${$movieId}`, {
            params: {
                api_key,
                ...restParam
            }
        })
    }
}
export default MovieService