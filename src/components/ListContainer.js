import React from 'react';
import ListItemContainer from './ListItemContainer';
import '../css/ListContainerCSS.css'

const ListContainer = (props) => {
    

    console.log(props)

    return(
        <div className="ListContainer" >
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>
           <ListItemContainer/>

        </div>
    )
}

export default ListContainer;