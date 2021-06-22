import React from 'react'


const RemoveListItemButton = (props) => {
    const handleClick = ()=>{
        props.removeListItem(props.id)
    }
    return (
        <div>
            <button onClick={()=>{handleClick()}}>Remove</button>
        </div>
    )
}

export default RemoveListItemButton
