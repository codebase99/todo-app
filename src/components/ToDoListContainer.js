import React, {useState} from 'react';
import ToDoListHeader from './TodoListHeader'
import ListContainer from './ListContainer';
// import AddListItem from './AddListItem';
import ListInput from './ListInput';
import '../css/ToDoListContainerCSS.css'
import { v4 as uuidv4 } from 'uuid';


const ToDoListContainer = () => {
    const [input, setInput]=useState('')
    const [listItems, setListItems]=useState([])
    const storeInput = (input) =>{
        setInput(input)
    }
    const handleClick = ()=>{
        if(input!==""){
            var temp=[...listItems, 
                {
                    id:uuidv4(),
                    content:input,
                    done:false
                }]
            
        setListItems(temp)
        setInput("")
        console.log(input)
        }
    }

    const handleEnterKey = () => {
        handleClick()
    }

    const removeListItem = (itemId)=>{
        console.log("reached todolist container")
        const temp = [...listItems]
        const temp2=temp.filter((obj)=>{
            if(obj.id!==itemId){
                return true;
            }
            else{
                return false;
            }
        })
        setListItems(temp2)

    }
    
    return(
        <div className="BodyContainer">
            <div className="ToDoListContainer">
                <div className="ToDoListHeader"><ToDoListHeader/></div>
                <div className="ListContainer"><ListContainer removeListItem={(itemId)=>{removeListItem(itemId)}} updatedListItems={listItems}/></div>
                <div className="ListInputContainer">
                    <div className="ListInput" >
                        <ListInput 
                        handleEnterKey={()=>{handleEnterKey()}} 
                        handleChange={(input)=>storeInput(input)}
                        value={input}
                        />
                    </div>
                    <div className="AddListItemContainer">
                        <button className="AddListItem" onClick={()=>handleClick()}>Add Item</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ToDoListContainer;