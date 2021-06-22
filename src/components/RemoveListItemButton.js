import React from 'react'


const RemoveListItemButton = (props) => {
    const handleClick = ()=>{
        console.log("at remove list item button",props.id)
        props.removeListItem(props.id)
        
    }
    return (
        <div>
            <button onClick={()=>{handleClick()}}>Remove</button>
        </div>
    )
}

export default RemoveListItemButton
