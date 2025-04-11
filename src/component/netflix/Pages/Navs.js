import React from 'react'
import {Link} from 'react-router-dom'


function Navs() {
  return (
    <div>
        <Link to='/'><button>Home</button></Link>
        <Link to='/faq'><button>FAQ</button></Link>
        <Link to='/jobs'><button>Jobs</button></Link>
        <Link to='/privacy'><button>Privacy</button></Link>
        <Link to='/my-list'><button>My List</button></Link>
    </div>
  )
}

export default Navs