import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from '../context/shoppingCartContext' ;
import { formatCurrency } from "../utilities/currencyFormat";
import style from './CartItem.module.scss' ;
//-------------------------------------------------

type CartItemProps = {
    id: string
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart , storeItems} = useShoppingCart() ;
    const item = storeItems.find(i => i.id === id) ;
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} alt='product'/>
            <div className="me-auto">
                <div> {item.name}{" "} { quantity > 1 && ( <span className={`${style.fs65} text-muted `} >x{quantity} </span> ) } </div>
                <div className={`${style.fs75} text-muted `} > {formatCurrency(item.price)} </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)} > &times; </Button>
        </Stack>
    )
}