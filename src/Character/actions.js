import md5 from 'crypto-js/md5';
import { apiUrl, apiPublicKey, apiPrivateKey, apiRoutes } from 'App/config';

export const REQUEST_HEROES = 'REQUEST_HEROES';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';

export const requestHeroes = () => ({
    type: REQUEST_HEROES,
});

export const requestFailed = (error) => ({
    type: REQUEST_FAILED,
    error,
});

export const receiveHeroes = data => ({
    type: RECEIVE_HEROES,
    data,
});

export const fetchHeroesList = () => (dispatch) => {
    dispatch(requestHeroes());

    const timeStamp = Date.now();
    const hash = md5(timeStamp + apiPrivateKey + apiPublicKey);

    const parameters = new URLSearchParams({
        apikey: apiPublicKey,
        ts: timeStamp,
        hash: hash,
    });
    const url = apiUrl + apiRoutes.charactersList + '?' + parameters.toString();

    return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receiveHeroes(json.data)))
        .catch(error => dispatch(requestFailed(error)));
};