import React from 'react';
import { Link } from 'react-router-dom';
import { isValid } from '../utils';

function DropdownMenu(props)
{
    let items = [];

    if (isValid(props.items))
    {
        let itemArray = Array.from(props.items);

        for (let i = 0; i < itemArray.length; ++i)
        {
            items.push(<Link key={ 'dropdownMenuItem' + i } className="dropdown-item" to="#" onClick={ props.onDropdownMenuItemClick }>{ itemArray[i] }</Link>);
        }
    }

    return (
        <div className={ "dropdown-menu " + (props.isRight ? "dropdown-menu-right text-right" : "dropdown-menu-left text-left") }>
            { items }
        </div>
    );
}

export default DropdownMenu;