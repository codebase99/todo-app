import React from 'react'
import ListItemContent from './ListItemContent';
import RemoveListItemButton from './RemoveListItemButton';
import Checkbox from './Checkbox';
import '../css/ListItemContainerCSS.css'


const ListItemContainer = (props) => {
    const removeListItem = (itemId) =>{
        console.log("at list item container")
        props.removeListItem(itemId)
    }
    
    return (
        <div class="ListItemContainer">
            <div className="ListItemContent">
                <ListItemContent content={props.content}/>
            </div>
            <div className="Checkbox" >
                <Checkbox done={props.done}/>
            </div>
            <div className="RemoveListItemButton">
                <RemoveListItemButton removeListItem={(itemId)=>{removeListItem(itemId)}}id={props.id}/>
            </div>
        </div>
    )
}

export default ListItemContainer;