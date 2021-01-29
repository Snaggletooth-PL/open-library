import axios from 'axios';

export const bookProperty =
{
    key: 'key',
    coverId: 'cover_i',
    title: 'title',
    author: 'author_name',
    year: 'first_publish_year',
    subjects: 'subject',
    description: 'description',
    publishers: 'publisher',
    links: 'links'
};

export const coverSize =
{
    small: 'S',
    medium: 'M',
    large: 'L'
};

export const sortKey =
{
    title: 'title',
    author: 'author',
    year: 'year'
};

export const sortOrder =
{
    ascending: true,
    descending: false
};

export const pagination =
{
    previousPage: '<',
    nextPage: '>',
    firstPage: 1,
    pageSizes: [10, 25, 50, 100]
};

export const searchCategories = ['title', 'author', 'publisher', 'subject'];

export const olApi = axios.create({ baseURL: 'https://openlibrary.org/' });