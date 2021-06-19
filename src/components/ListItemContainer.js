import React from 'react'
import ListItemContent from './ListItemContent';
import RemoveListItemButton from './RemoveListItemButton';
import Checkbox from './Checkbox';
import '../css/ListItemContainerCSS.css'


const ListItemContainer = () => {
    return (
        <div class="ListItemContainer">
            <div className="ListItemContent"><ListItemContent/></div>
            <div className="Checkbox"><Checkbox/></div>
            <div className="RemoveListItemButton"><RemoveListItemButton/></div>
        </div>
    )
}

export default ListItemContainer;