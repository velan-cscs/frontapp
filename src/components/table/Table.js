import React from 'react'
import './table.css' 
import { UseSelector,useSelector } from 'react-redux'
function Table() {

  const redux=useSelector((state)=>state);


  // const arr=[{name:"velan",mail:"m@gmail.com",phno:"9768672789",gender:"male",city:"Trichy"},
  // {name:"bala",mail:"m@gmail.com",phno:"9768672789",gender:"male",city:"Trichy"}]
  return (
    <div class="table"><table>
      <th>Name</th>
      <th>mail</th>
      <th>phone number</th>
      <th>Gender</th>
      <th>city</th>
      
      {/* {arr.map(element =>
       (
        <tr>
          <td>{element.name}</td>
          <td>{element.mail}</td>
          <td>{element.phno}</td>
          <td>{element.gender}</td>
          <td>{element.city}</td>
        </tr>
        
       ))
      } */}

{redux.table.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.mail}</td>
              <td>{user.phno}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
            </tr>
          ))}

      
      </table></div>
  )
}

export default Table