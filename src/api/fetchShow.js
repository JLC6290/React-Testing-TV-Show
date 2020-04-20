import axios from 'axios';

export const fetchShow = () => {
    return axios
        .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(response => {
            console.log("axios response", response);
            return response;
        })
        .catch(error => {
            console.log("Error fetching data: ", error);
            return error;
        });
};