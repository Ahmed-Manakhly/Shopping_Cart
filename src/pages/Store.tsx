import {products} from '../data/data' ;
import {Row , Col} from 'react-bootstrap' ;
import StoreItem from '../components/StoreItem' ;
import {useState }  from 'react' ;
import {useShoppingCart } from '../context/shoppingCartContext' ;
import {Container} from 'react-bootstrap' ;
import OffersSlider from '../components/OffersSlider' ;

const Store = () => {
    //-----------------------------------------
    const [category , Setcategory] = useState<string>() ;
    const {getStoreItems } = useShoppingCart() ;

    //-----------------------------------------
    const ChangeCategoryHandler = (category:string)=>{
        Setcategory(category) ;
    }

    const filteredData = products.filter(pro => pro.cat === category );
    const specialOffers = products.filter(pro => pro.cat === 'specialOffers' );
    getStoreItems(products) ;
    return <>

        <section className={`bg-white  mb-3 col  mainPage`}>
            <Container className='h-100 w-100'>
                <h1 className={'row justify-content-center text-primary'} >CHOOSE YOUR CATEGORY</h1>
                <OffersSlider onChangeCategory={ChangeCategoryHandler}/>
            </Container>
        </section>

        <Container className='sec2'>
            <h1 className='d-block mt-5 mb-5 text-secondary text-center'>Your Filtered Category!</h1>
            <Row md={2} xs={1} lg={3} className={`g-2 shadow p-3 mb-5 bg-body rounded` }>
                {filteredData.map(item => (<Col key={item.id}> <StoreItem {...item}  /> </Col>))}
            </Row>
        </Container>

        <Container className='sec1'>
            <h1  className='d-block mt-5 mb-5 text-danger text-danger-emphasis text-center' >Special Offers Recommended For You :D</h1>
            <Row md={2} xs={1} lg={3} className={`g-2 shadow p-5 mb-5 bg-body rounded`}>
                {specialOffers.map(item => (<Col key={item.id}> <StoreItem {...item}  /> </Col>))}
            </Row>
        </Container>
    </>
} ;
export default Store ;