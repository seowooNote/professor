import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <div>
            <div><Link to="/">Logo</Link></div>
            <div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/research">Research</Link></div>
                <div><Link to="/teaching">Teaching</Link></div>
                <div><Link to="/career">Career</Link></div>
            </div>
            <div><Link to="/auth">로그인</Link></div>
        </div>
    </div>
  )
}
