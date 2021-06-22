import React from 'react';

const Checkbox= (props) => {

    const handleCheckbox = ()=>{
        props.handleCheckbox()
    }
    return(
        <div>
            <input type="checkbox" name="checkbox" id="checkbox" checked={props.done?true:false} onChange={()=>{}} onClick={()=>{handleCheckbox()}} />
        </div>
    )
}

export default Checkbox;