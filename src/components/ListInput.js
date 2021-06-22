import React from 'react';
import '../css/ListInputCSS.css'

const ListInput = (props) => {
    
    const onTrigger = (e)=>{    
        props.handleChange(e)
    }
    const handleKeyPress = (e) => {
        if(e.code === "Enter"){
            props.handleEnterKey()
        }
        
    }

    return(
        <div className="ListInputContainer">
            <input 
            type="text" 
            name="ListInput" 
            id="ListInput" 
            className="ListInput" 
            value={props.value}
            onKeyPress={(e)=>{handleKeyPress(e)}}
            onChange={(e)=>onTrigger(e.target.value) } />
        </div>
    )
}

export default ListInput;