import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Fetchanother() {
    const [data,setData] = useState([]);
  const [search,setSearch]= useState('')
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setData(res.data)).catch(err=>console.log(err));

  },[])
  return (
    <div>
      <div className='container table'>
      <div className='mt-3'>
        <h3  className='my-50'>This table using APi</h3>
       

        <table className='table'>
          
          <thead>
            <tr>
              <th>id </th>
              <th>Name</th>
              <th>Email</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user)=>{
                return(
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.body}</td>

                  </tr>
                )

              })
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Fetchanother
