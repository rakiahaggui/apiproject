import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import  Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function UserList() {
  const[listOfUsers,setlistOfUsers]=useState([]);
  useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then (res=>{
  setlistOfUsers(res.data);
  })
.catch(err =>{
  console.log(err);
   });
  },[]);
  return ( 
    <div style={{display:'flex',justifyContent:'space-around', flexWrap:'Wrap',padding:'30px', margin:'40px',color:'green'}}>
{listOfUsers.map((user)=>(
<div key={user.id}>
<Card style={{ width:'20rem'}}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>
          {user.address.street}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
      ))}
      </div>
  );
}
export default UserList;
