import React from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu(props)
{
    let items = [];

    for (let i = 0; i < props.items.length; ++i)
    {
        items.push(<Link key={ i } className="dropdown-item" to="#" onClick={ props.onItemClick }>{ props.items[i] }</Link>);
    }

    return (
        <div id={ props.id } className={ "dropdown-menu " + (props.isRight ? "dropdown-menu-right text-right" : "dropdown-menu-left text-left") }>
            { items }
        </div>
    );
}

export default DropdownMenu;