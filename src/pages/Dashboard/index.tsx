import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='flex bg-slate-500 '>Dashboard</div>
      <Link to="/">Dashboard</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/message">Message</Link>
    </>
  )
}

export default Dashboard