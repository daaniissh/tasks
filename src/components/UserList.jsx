import React, { Fragment, useState } from 'react'
const UserList = ({ user }) => {
  const [userData, setUserData] = useState(user)
  const deleteUser = (id) => {
    let FilteredValue = userData.filter((userList) => userList.id !== id)
    setUserData(FilteredValue)
  }
  return (
    <div className='flex justify-center'>
      <table className='table-auto rounded-lg'>
        <thead className='border rounded-lg' >
          <tr className=''>
            <th>name</th>
          </tr>
        </thead>
        {userData.map((data) => {
          return (

            <tbody className='border' >
              <tr>
                <td className='border p-2' >{data.name}</td>
                <button onClick={() => deleteUser(data.id)} className='bg-red-500 m-2' >✖</button>

              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default UserList