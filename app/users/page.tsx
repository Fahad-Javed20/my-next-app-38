
import React from 'react'
import prisma from '@/lib/prisma'

const UserPage = async () => {
  const users = await prisma.user.findMany()
  

    
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