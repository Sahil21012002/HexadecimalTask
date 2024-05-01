import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Fetchdata() {
  
  const [data,setData] = useState([]);
  const [Search,setSerach] = useState('');
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res=>setData(res.data)).catch(err=>console.log(err));

  },[]) 
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (id) => {
    setClickedId(id);
  };
  
  return (
    <div className='container table'>
      <h3  className='my-50 .caption'>Table using API and Clickable ID</h3>
      <div className='mt-3 w-100'>

        
       <form action="" className='form-control display-grid' >
        <input type="text"  placeholder='Search Here' onChange={(e)=>setSerach(e.target.value)}/>
       </form>

        <table className='table'>
          
          <thead>
            <tr>
              <th>ID </th>
              <th>Address</th>
              <th>TITTLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
        {
        data.filter((user)=>{
          return Search.toLowerCase() === ''? user :user.email.toLowerCase().includes(Search);
        }).map(item => (
          <tr key={item.id}>
            <td>
              {clickedId === item.id ? (
                <a href={`http://localhost:3000/api/data/id/${item.id}`}>{item.id}</a>
              ) : (
                <span onClick={() => handleClick(item.id)} style={{ cursor: 'pointer' }}>{item.id}</span>
              )}
            </td>
           
           <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fetchdata
