import { combineReducers } from 'redux';
import { bookList } from './bookList';
import { bookListFilters } from './bookListFilters';

export default combineReducers({ bookList, bookListFilters });