import React from 'react';
import ListItemContainer from './ListItemContainer';
import '../css/ListContainerCSS.css'

const ListContainer = (props) => {
    
    const renderList=()=>{
        var list = props.updatedListItems.map((obj)=>{
            return <ListItemContainer key={obj.id} id={obj.id} content={obj.content} done={obj.done} />
            
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