import React, {useState} from 'react';
import ToDoListHeader from './TodoListHeader'
import ListContainer from './ListContainer';
// import AddListItem from './AddListItem';
import ListInput from './ListInput';
import '../css/ToDoListContainerCSS.css'
import { v4 as uuidv4 } from 'uuid';


const ToDoListContainer = () => {
    const [input, setInput]=useState('')
    // const [clicked, setClicked]= useState(false);
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
        
        // setClicked(true)
        }
    }
    // console.log(listItems)
    // console.log(input)
    
    
    
    return(
        <div className="BodyContainer">
            <div className="ToDoListContainer">
                <div className="ToDoListHeader"><ToDoListHeader/></div>
                <div className="ListContainer"  ><ListContainer updatedListItems={listItems}/></div>
                <div className="ListInputContainer">
                    <div className="ListInput" ><ListInput onkeyDown={()=>{console.log("key pressed")}} handleChange={(input)=>storeInput(input)}/></div>
                    <div className="AddListItemContainer">
                        <button className="AddListItem" onClick={()=>handleClick()}>Add Item</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ToDoListContainer;