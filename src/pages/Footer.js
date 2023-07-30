import {NavLink} from 'react-router-dom'
import { Container ,Nav,Button   } from 'react-bootstrap';
import facebook from '../Assets/facebook.svg'
import linkedin from '../Assets/linkedin.svg'
import twitter from '../Assets/square-twitter.svg'
import youtube from '../Assets/youtube.svg'
import brand from '../Assets/text-1689461214515.png' ;


export const Footer = () => {
  const curYear = new Date().getFullYear().toString()  ;
  return (
    <footer className="footer pt-5 pb-0 text-white-50 text-center text-md-start bg-primary">
    <Container className="container text-uppercase">
        <div className="row">
            <div className="col-md-6 col-lg-4">
                <div className="info mb-5">
                    <img src={brand} alt="footer" className="mb-4"/>
                    <p className="mb-5">Get Deals on Popular Items on MANAKHLY. Browse & Discover Thousands of Brands. Read Customer Reviews and Find Best Sellers.
                      Low prices. 30 days free returns. 1-click payment. Fast shipping. Pay in installments—package tracking.</p>
                    <div className="copyright">
                    Powered by <span className='text-warning fst-italic'>Manakhly Tech</span>
                        <div>&copy; {curYear} - <span className='text-warning fst-italic'>MANAKHLY</span></div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-2">
                <div className="links">
                  <Nav className="ms-auto footrtNav lh-lg flex-column align-items-md-start align-items-center">
                    <h5 className="text-light ms-3 fs-4">Links</h5>
                    <Nav.Link to='/' as={NavLink} className="fs-s">HOME</Nav.Link>
                    <Nav.Link to='/shop' as={NavLink}  >SHOP</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}  >ABOUT US</Nav.Link>
                    <Nav.Link to='/contact' as={NavLink}  >CONTACT US</Nav.Link>
                  </Nav>
                </div>
            </div>
            <div className="col-md-6 col-lg-2">
            <div className="links">
                    <h5 className="text-light ms-0 fs-6">Let Us Help You</h5>
                  <ul className="list-unstyled lh-lg ms-auto">
                            <li>Help</li>
                            <li>Shipping & Delivery</li>
                            <li>Portfolio</li>
                            <li>Returns & Replacements</li>
                            <li>Support</li>
                            <li>Terms And Conditions</li>
                        </ul>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="contact">
                    <h5 className="text-light">Contact Us</h5>
                    <p className="lh-lg mt-3 mb-5">keep constantly updated with our latest offers and and do not miss our big deals!</p>
                    <Button variant="outline-light w-100 rounded-pill overflow-hidden" >
                      <Nav.Link to='/' as={NavLink} >AELMANAKHLY@GMAIL.COM</Nav.Link>
                    </Button>
                    <ul className="d-flex mt-5 list-unstyled gap-5  w-100 justify-content-evenly">
                      <li>
                        <Nav.Link to='/' as={NavLink} className="d-block  fa-lg social rounded-circle p-2 bg-white ">
                          <img src={facebook} alt="facebook" className='w-100 h-100 img-fluid' />
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link to='/' as={NavLink}  className="d-block  fa-lg social rounded-circle p-2 bg-white ">
                          <img src={linkedin} alt="linkedin" className='w-100 h-100 img-fluid' />
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link to='/' as={NavLink} className="d-block fa-lg social rounded-circle p-2 bg-white ">
                          <img src={twitter} alt="twitter" className='w-100 h-100 img-fluid' />
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link to='/' as={NavLink}  className="d-block  fa-lg social rounded-circle p-2 bg-white ">
                          <img src={youtube} alt="youtube" className='w-100 h-100 img-fluid' />
                        </Nav.Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
    <div className='w-100 text-bg-secondary text-black-50 bg-primary p-3 text-center h-100 border-top '> Thanks For Your Time </div>
</footer>
  )
}