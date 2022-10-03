import { useEffect,useState } from 'react';

import UserListItem from './UserListItem';

const List =()=>{
  const [users, setUsers]= useState([])

    useEffect(()=>{//cuando cambie algo
    //usetate = guardar los estados

   const fetchContent = async()=>{
    try{
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
     const result = await response.json(); 
     console.log(result)
    }catch(error){
     console.error(error)
    }
   }
   fetchContent().catch(null)
    },[]);
    return(
        <div>
            <h1>List</h1>
            {users.map(user=><UserListItem key={`user-list-item-${user.name} {...user}`}/>)}
        </div>
    )
}
export default List;