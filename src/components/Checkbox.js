import React from 'react';

const Checkbox= (props) => {


    return(
        <div>
            <input type="checkbox" name="checkbox" id="checkbox" checked={props.done?true:false}  />
        </div>
    )
}

export default Checkbox;