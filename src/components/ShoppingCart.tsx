import { Offcanvas, Stack } from "react-bootstrap" ;
import { useShoppingCart ,} from '../context/shoppingCartContext' ;
import { formatCurrency } from "../utilities/currencyFormat";
import { CartItem } from "./CartItem"

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems , storeItems } = useShoppingCart()
    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-primary">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-success">
        <Stack gap={3}>
            {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5 text-danger">
            Total{" "}
            {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
                }, 0)
            )}
            </div>
        </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}

export default ShoppingCart ;