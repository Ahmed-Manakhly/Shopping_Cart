import { Button , Navbar , Form } from 'react-bootstrap';
import style from './NavBar.module.scss' ;
import {useShoppingCart} from '../context/shoppingCartContext' ;
import brand from '../Assets/text-1689461214515.png' ;

//---------------------------------------------------------------------
const NavBar = () => {
    //---------------------
    const { openCart, cartQuantity } = useShoppingCart() ;
    //---------------------------------
    return (
      <Navbar expand="lg" sticky={'top'} className='bg-white  d-flex justify-content-around mainNav'>
        <Navbar.Brand href="/" className={'brand text-center p-3'}  >
          <img src={brand} alt="brand" className='img-fluid w-75 h-100'/>
        </Navbar.Brand>
        <Form className="d-flex m-3 fs-1 gap-3">
          <Form.Control
            type="search"
            placeholder="Search Product, Brands, and categories"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Navbar.Brand  className='cart text-center m-0'>
          <Button variant ='outline-primary' className={`${style.btn} rounded-circle m-auto`}  onClick={openCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className='m-auto'>
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8
              288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75
              48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5
              512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            {cartQuantity > 0 && ( <div className={`rounded-circle bg-danger d-flex justify-content-center align-items-center `}>{cartQuantity}</div> )}
          </Button>
        </Navbar.Brand>
      </Navbar>
    )
}
export default NavBar ;