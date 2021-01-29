import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { isValid } from '../utils';
import '../styles/DropdownMenu.scss';

function DropdownMenu(props)
{
    let items = [];

    if (isValid(props.items))
    {
        let _items = Array.isArray(props.items) ? props.items : [];

        for (let i = 0; i < _items.length; ++i)
        {
            items.push(<Dropdown.Item key={ 'dropdownMenuItem' + i } to="#" onClick={ props.onDropdownMenuItemClick }>{ _items[i] }</Dropdown.Item>);
        }
    }

    return (
        <Dropdown.Menu align={ props.isRight ? 'right' : 'left' } className={ props.isRight ? 'text-right' : 'text-left' }>
            { items }
        </Dropdown.Menu>
    );
}

export default DropdownMenu;