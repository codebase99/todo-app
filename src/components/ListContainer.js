import React from 'react';
import ListItemContainer from './ListItemContainer';
import '../css/ListContainerCSS.css'

const ListContainer = (props) => {
    const removeListItem= (itemId)=>{
        console.log("reached List container");
        props.removeListItem(itemId)
    }
    
    const renderList=()=>{
        var list = props.updatedListItems.map((obj)=>{
            return <ListItemContainer removeListItem={(itemId)=>{removeListItem(itemId)}} key={obj.id} id={obj.id} content={obj.content} done={obj.done} />
            
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