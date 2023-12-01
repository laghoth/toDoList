import React, { Fragment } from 'react'
import './Listitems.css'
const Listitems = (props) => {
    
    const {items, deleteItem} = props;
    let length = items.length;
    const ListItems = length ?(
    items.map(item => {
        return(
            <Fragment key={item.id} className={item.id}>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>                
                        <button onClick={ ()=>deleteItem(item.id)} >Delete</button>
                    </td>
                </tr>
            </Fragment>
        )
    })
    )
    : (
        
    <tr>
        <td colspan="3">There is no item to show</td>
    </tr>

        
    )

   
  return (
    <div className='Listitems'>
        <div class="container mt-3">
            <h2>ToDoList Application</h2>
            <p>Created By Othmane Laghlimi</p>            
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {ListItems}
                </tbody>
            </table>
            </div>
        
    </div>
  )
}

export default Listitems;
