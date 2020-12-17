import axios from 'axios';

export const olApi = axios.create({ baseURL: 'http://openlibrary.org/' });

export const getPage = (path) => {
    let substrings = path.split('/');

    return '/' + substrings[substrings.length - 1];
}

export const isValid = (value) => {
    return Boolean(value);
}

export const isNumber = (value) => {
    return isValid(value) && isFinite(String(value));
}

export const isUnsignedNumber = (value) => {
    return isNumber(value) && value > -1;
}