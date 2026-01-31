
import React from 'react'
import { getAllUsers } from '@/lib/user.service';

const UserPage = async () => {
  const users = await getAllUsers();
  

    
  return (
    <div>
{users.map((user) => (
  <div key={user.id}>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>  
))}
    </div>
  )
}

export default UserPage