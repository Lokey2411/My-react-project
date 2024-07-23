import { ROOT } from '@/routes/constant'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      {/* Page Not Found! */}
      <Link to={ROOT}>
        <h1>Home</h1>
      </Link>
      <p>404: page not found!</p>
    </div>
  )
}

export default NotFound