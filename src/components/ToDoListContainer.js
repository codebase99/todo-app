import React from 'react';
import ToDoListHeader from './TodoListHeader'
import ListContainer from './ListContainer';
import AddListItem from './AddListItem';
import ListInput from './ListInput';
import '../css/ToDoListContainerCSS.css'

const ToDoListContainer = () => {


    return(
        <div className="BodyContainer">
            <div className="ToDoListContainer">
                <div className="ToDoListHeader"><ToDoListHeader/></div>
                <div className="ListContainer"><ListContainer/></div>
                <div className="ListInputContainer">
                    <div className="ListInput"><ListInput/></div>
                    <div className="AddListItem"><AddListItem/></div>
                </div>
            </div>
        </div>
        
    )
}

export default ToDoListContainer;