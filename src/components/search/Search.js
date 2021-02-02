import React from 'react';
import { Dropdown, Form, FormControl, InputGroup } from 'react-bootstrap';
import { DropdownMenu } from '../../components';
import { searchCategories } from '../../utils';

function Search(props)
{
    return (
        <Form onSubmit={ props.onSubmit }>

            <h3 className="text-center mb-3">Search books</h3>

            <InputGroup size="lg">

                <FormControl type="text" placeholder="Search" value={ props.searchPhrase } onChange={ props.onSearchInputChange } />

                <InputGroup.Append>

                    <Dropdown>

                        <Dropdown.Toggle variant="" block className="rounded-0 h-100 caret-off">
                            <span className="d-none d-md-inline">Search by</span> <span className="font-weight-bold">{ props.searchCategory }</span>
                        </Dropdown.Toggle>

                        <DropdownMenu isRight={ true } onDropdownMenuItemClick={ props.onSearchCategoryDropdownMenuItemClick } items={ searchCategories } />

                    </Dropdown>

                    <InputGroup.Text><i className="fas fa-search fa-flip-horizontal"></i></InputGroup.Text>

                </InputGroup.Append>

            </InputGroup>

        </Form>
    );
}

export default Search;