import { combineReducers } from 'redux';
import { bookList } from './bookList';
import { bookListFilter } from './bookListFilter';
import { bookListSort } from './bookListSort';
import { bookListPagination } from './bookListPagination';
import { bookSearch } from './bookSearch';

export default combineReducers({ bookList, bookListFilter, bookListSort, bookListPagination, bookSearch });