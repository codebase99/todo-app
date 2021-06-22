import React from 'react';
import ListItemContainer from './ListItemContainer';
import '../css/ListContainerCSS.css'

const ListContainer = (props) => {
    const removeListItem= (itemId)=>{
        props.removeListItem(itemId)
    }
    const handleCheckbox=(itemId)=>{
        props.handleCheckbox(itemId)
    }
    
    const renderList=()=>{
        var list = props.updatedListItems.map((obj)=>{
            return <ListItemContainer 
            removeListItem={(itemId)=>{removeListItem(itemId)}}
            handleCheckbox={(itemId)=>{handleCheckbox(itemId)}} 
            key={obj.id} 
            id={obj.id} 
            content={obj.content} 
            done={obj.done} 
            />
            
        })
        return list
    }
    

    return(
        <div className="ListContainer" >
            {renderList()}
        </div>
    )
}

export default ListContainer;