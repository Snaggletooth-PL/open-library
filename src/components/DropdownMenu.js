import React from 'react';
import { Link } from 'react-router-dom';
import { isValid } from '../Utils';

function DropdownMenu(props)
{
    let items = [];

    if (isValid(props.items))
    {
        let array = Array.isArray(props.items) ? props.items : Array.from(props.items);

        for (let i = 0; i < array.length; ++i)
        {
            items.push(<Link key={ i } className="dropdown-item" to="#" onClick={ props.onItemClick }>{ array[i] }</Link>);
        }
    }

    return (
        <div id={ props.id } className={ "dropdown-menu " + (props.isRight ? "dropdown-menu-right text-right" : "dropdown-menu-left text-left") }>
            { items }
        </div>
    );
}

export default DropdownMenu;