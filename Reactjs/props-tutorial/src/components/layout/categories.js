import React from 'react'
import { Nav } from 'react-bootstrap'

function Categories() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home" className='text-light'>Home</Nav.Link>
      <Nav.Link eventKey="link-1" className='text-light'>Technology news</Nav.Link>
      <Nav.Link eventKey="link-2" className='text-light'>Politics news</Nav.Link>
      <Nav.Link eventKey="link-1" className='text-light'>Science</Nav.Link>
      <Nav.Link eventKey="link-2" className='text-light'>Programming</Nav.Link>
      <Nav.Link eventKey="link-1" className='text-light'>Hardware</Nav.Link>
    </Nav>
  )
}

export default Categories