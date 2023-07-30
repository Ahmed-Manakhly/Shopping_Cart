import {NavLink} from 'react-router-dom'
import { Container ,Nav,Button , Navbar  } from 'react-bootstrap';


//---------------------------------------------------------------------
const TopNav = () => {
    return (
    <Navbar expand="lg"  className='bg-primary shadow-sm topNav'>
      <Container   className='d-flex justify-content-between fs-5'>
        <Button variant="outline-light" className={'  fs-6'}href="/">Getting the best offers is just right here</Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link to='/' as={NavLink} className={'text-center'}>HOME</Nav.Link>
            <Nav.Link to='/shop' as={NavLink} className={'text-center'} >SHOP</Nav.Link>
            <Nav.Link to='/about' as={NavLink}  className={'text-center'}>ABOUT US</Nav.Link>
            <Nav.Link to='/contact' as={NavLink}  className={'text-center'}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
    )
}
export default TopNav ;