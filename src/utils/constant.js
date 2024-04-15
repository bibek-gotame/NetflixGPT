export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const backGroundImageURL = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/bea608a8-2fe7-4605-8b60-f3a48ae50720/NP-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer' + process.env.REACT_APP_OPENAI_KEY,
      }
};

export const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const popularMoviesURL = 'https://api.themoviedb.org/3/movie/popular'
export const topRatedMoviesURL = 'https://api.themoviedb.org/3/movie/top_rated'
export const upComingMoviesURL = 'https://api.themoviedb.org/3/movie/upcoming'
export const searchAPI = 'https://api.themoviedb.org/3/search/movie?query='

export const IMG_URL = 'https://image.tmdb.org/t/p/w300/'

export const OPENAI_KEY = process.env.REACT_APP_TMMDB_KEY
