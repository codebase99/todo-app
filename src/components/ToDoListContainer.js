import React from 'react';
import ToDoListHeader from './TodoListHeader'
import ListContainer from './ListContainer';
import AddListItem from './AddListItem';
import ListInput from './ListInput';

const ToDoListContainer = () => {


    return(
        <div>
            <p>ToDoListContainer</p>
            <ToDoListHeader/>
            <ListContainer/>
            <AddListItem/>
            <ListInput/>
        </div>
    )
}

export default ToDoListContainer;