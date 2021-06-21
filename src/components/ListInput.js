import React from 'react';
import '../css/ListInputCSS.css'

const ListInput = (props) => {
    
    const onTrigger = (e)=>{    
        props.handleChange(e)
    }
    return(
        <div class="ListInputContainer">
            <input 
            type="text" 
            name="ListInput" 
            id="ListInput" 
            class="ListInput" 
            onChange={(e)=>onTrigger(e.target.value) } />
        </div>
    )
}

export default ListInput;