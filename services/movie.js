import { api } from '.'
const MovieService = {
    getMovie({
        ...restParam
    } = {}) {
        return api.call().get('/movie/top_rated', {
            params: {
                ...restParam
            }
        })
    },
    getMoviePopular({
        ...restParam
    } = {}) {
        return api.call().get('/movie/popular', {
            params: {
                ...restParam
            }
        })
    },
    getMovieDetail({
        movieId,
        ...restParam
    } = {}) {
        return api.call().get(`/movie/${movieId}`, {
            params: {
                ...restParam
            }
        })
    },
    getSearchMovie({
        ...restParam
    } = {}) {
        return api.call().get('/search/movie', {
            params: {
                ...restParam
            }
        })
    }
}
export default MovieService