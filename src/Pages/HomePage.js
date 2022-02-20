import React from 'react'
import { useSelector } from 'react-redux'

function HomePage() {
  const users = useSelector(state =>state.userInfo)
  const adminUser = useSelector(state =>state.adminInfo)
  console.log('users:',users)
  console.log('admin:',adminUser)

  return (
    <div>HomePage</div>
  )
}

export default HomePage