import React from 'react'
import ListItemContent from './ListItemContent';
import RemoveListItemButton from './RemoveListItemButton';
import Checkbox from './Checkbox';
import '../css/ListItemContainerCSS.css'


const ListItemContainer = (props) => {
    const removeListItem = (itemId) =>{
        props.removeListItem(itemId)
    }
    const handleCheckbox=()=>{
        const itemId=props.id;
        props.handleCheckbox(itemId)
    }
    
    return (
        <div className="ListItemContainer">
            <div className="ListItemContent">
                <ListItemContent content={props.content}/>
            </div>
            <div className="Checkbox" >
                <Checkbox handleCheckbox={()=>{handleCheckbox()}}done={props.done} />
            </div>
            <div className="RemoveListItemButton">
                <RemoveListItemButton removeListItem={(itemId)=>{removeListItem(itemId)}}id={props.id}/>
            </div>
        </div>
    )
}

export default ListItemContainer;