import {useContext , createContext , ReactNode, useState} from 'react' ;
import ShoppingCart from '../components/ShoppingCart' ;
//----------------------------------------- for localstorage
import { useLocalStorage } from "../hooks/useLocalStorage"
//------------------------------------------------------------------------------------------------------------ types
export type StoreItemProps = {
    cat : string;
    id: string ;
    name:string ;
    price: number ;
    imgUrl: string ;
}
//----------------------------------
type cartItem = {
    id : string;
    quantity : number
}
//---------------------------------
type providerProp  ={
    children : ReactNode
}
//--------------------------------------
type shoppingCartContext = {
    getItemQuantity : (id:string) => number;
    increaseCartQuantity : (id:string) => void;
    decreaseCartQuantity : (id:string) => void;
    removeFromCart : (id:string) => void;
    openCart: () => void ;
    closeCart: () => void;
    cartQuantity: number ;
    cartItems: cartItem[] ;
    storeItems : StoreItemProps[] ;
    getStoreItems: (data:StoreItemProps[]) => void ;
}
// --------------------------------------------------------------------------------------------------------------- context

const ShoppingCartContext = createContext({} as shoppingCartContext) ;

//---------------------------------------------------------------------------------------------------------------- customer hook

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext) ;
}

//----------------------------------------------------------------------------------------------------------- context provider

const ShoppingCartProvider =  ({children} : providerProp ) => {

    //---------------------------- update with local storage

    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>( "shopping-cart", [] ) ;
    //-----------------------------------------------------
    const [storeItems , setStoreItems] = useState<StoreItemProps[]>([]) ;
    const [isOpen, setIsOpen] = useState(false) ;
    //------------------------------------------------------ get storeItems
    const getStoreItems = (data : StoreItemProps[]) => {
        setStoreItems(data)
    }
    //--------------------------------------------------------- total cartQuantity
    const cartQuantity = cartItems.reduce(
        (quantity , item) => item.quantity + quantity 
        ,0) ;
    //------------------------------------------ showing the cart 
    const openCart = () => setIsOpen(true) ;
    const closeCart = () => setIsOpen(false) ;
    //----------------------------------------- getItemQuantity
    function getItemQuantity (id:string) {
        return cartItems.find(item => item.id === id)?.quantity || 0 ;
    }
    //--------------------------------------- increaseCartQuantity
    function increaseCartQuantity(id : string){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems , { id , quantity : 1}]
            } else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity :item.quantity + 1}
                    }else {
                        return item;
                    }
                })
            }
        })
    }
    //------------------------------------------------- decreaseCartQuantity
    function decreaseCartQuantity(id : string){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id) ;
            } else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity :item.quantity - 1}
                    }else {
                        return item;
                    }
                })
            }
        })
    }
    //-----------------------------------------------------removeFromCart
    function removeFromCart(id : string){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id) ;
        })
    }
    //---------------------------------------------------------
    return (
        <ShoppingCartContext.Provider value={
            {
                getItemQuantity , 
                increaseCartQuantity ,
                decreaseCartQuantity ,
                removeFromCart ,
                cartItems ,
                cartQuantity,
                openCart,
                closeCart,
                storeItems,
                getStoreItems
            }}> {children} <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider