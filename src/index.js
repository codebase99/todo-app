import React from 'react'
import ReactDOM from 'react-dom'
import ToDoListContainer from './components/ToDoListContainer'

// const App = () =>{
//     return(
//         <div>
//             Hello World!
//         </div>
//     )
// }

ReactDOM.render(
    <ToDoListContainer/>,
    document.querySelector('#root')
)