import axios from 'axios';

export const olApi = axios.create({ baseURL: 'https://openlibrary.org/' });

export const getPage = (path) =>
{
    let substrings = path.split('/');

    return substrings[substrings.length - 1];
};

export const isValid = (value) =>
{
    return Boolean(value);
};

export const isNumber = (value) =>
{
    return isValid(value) && isFinite(String(value));
};

export const isUnsignedNumber = (value) =>
{
    return isNumber(value) && value >= 0;
};

export const isBoolean = (value) =>
{
    return typeof value === 'boolean';
}

export const setActive = (object, condition) =>
{
    if (object instanceof Element)
    {
        object.classList.toggle('active', condition);
    }
};