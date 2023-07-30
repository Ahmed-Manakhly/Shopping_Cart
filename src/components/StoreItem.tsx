import style from './StoreItem.module.scss' ;
import {Card , Button} from 'react-bootstrap' ;
import { formatCurrency } from '../utilities/currencyFormat';
import {useShoppingCart , StoreItemProps} from '../context/shoppingCartContext' ;
// -----------------------------------

// ----------------------------
const StoreItem : React.FC <StoreItemProps> = (props)=> {
    //---------------------------------------------------------
    const {getItemQuantity , increaseCartQuantity , decreaseCartQuantity ,removeFromCart} = useShoppingCart() ;
    const quantity:number = getItemQuantity(props.id) ;
    //----------------------------------------------------------
    const onIncreaseHandler = ()=>{increaseCartQuantity(props.id)}
    const onDecreaseHandler = ()=>{decreaseCartQuantity(props.id)}
    const onRemoveHandler = ()=>{removeFromCart(props.id)}
    
    //----------------------------------------------------------
    return (
        <Card className='h-100 shadow-sm p-3 mb-5 bg-light border-end rounded'>
            <Card.Img variant='top' src={props.imgUrl} className={style.img}></Card.Img>

            <Card.Body className={`d-flex flex-column`}>

                <Card.Title className={`d-flex justify-content-between align-items-baseline mb-4`}>
                    <span className="fs-3">{props.name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(props.price)}</span>
                </Card.Title>
                
                <div className="mt-auto">
                    {quantity === 0 ? <Button className='w-100' onClick={onIncreaseHandler} >+ Add To Cart</Button> :
                    <div className={`${style.cardActions} d-flex flex-column align-items-center`}>
                        <div className={`${style.cardActions} d-flex justify-content-center  align-items-center`}>
                            <Button onClick={onDecreaseHandler}>-</Button>
                            <div>
                                <span className='fs-3'>{quantity}</span> In Cart
                            </div>
                            <Button onClick={onIncreaseHandler} >+</Button>
                        </div>
                        <Button variant='danger' size='lg' onClick={onRemoveHandler} >
                            Remove
                        </Button>
                    </div>}
                </div>
                
            </Card.Body>
        </Card>
    )
} ;

export default StoreItem ;