
import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    const link = 'about-us'
return (
    <div style={{display:'flex'}}>
        <Link to={link}>O HAC </Link>
        <Link style={{marginLeft:'20px'}} to='/'> Oбратно</Link>
    </div>

    )
    }

export default Header