import classes from './OffersSlider.module.scss' ;
import React , {useState} from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faAnglesRight , faAnglesLeft} from '@fortawesome/free-solid-svg-icons' ;
import Beauty from '../Assets/Beauty & Personal Care.jpg' ;
import Baby from '../Assets/Baby Products.jpg' ;
import Fashion from '../Assets/Fashion.jpg' ;
import Home from '../Assets/Home.jpg' ;
import Supermarket from '../Assets/Supermarket.jpg' ;

const OffersSlider = (props) => {
    //---------------------------------------------------
    const [next , setIndex] = useState({index : 0 , after : false, before : true}) ;
    const menus = [{name : 'Beauty & Personal Care' , img : Beauty} , {name : 'Supermarket' , img : Supermarket} ,  {name : 'Baby Products' , img :Baby },
    {name : 'Home' , img : Home} ,{name : 'Fashion' , img : Fashion}] ;
    //---------------------------------------------
    const increaseIndexHandler = () => {
        setIndex((prev=> {
            if(prev.index + 1 === menus.length -1) {
                return {index : prev.index + 1 ,after : true , before : false};
            }else if(prev.index  === menus.length  -1){  
                return 
            }else {
                return { index : prev.index + 1 ,after : false , before : false};
            }
        }))
    }
    //------------------------
    const decreaseIndexHandler = () => {
        setIndex((prev=> {
            if(prev.index - 1 === 0 ) {
                return {index : prev.index - 1 , after : false , before : true};
            }else if(prev.index === 0){   return
            }else { 
                return { index : prev.index - 1 ,after : false , before : false};
            }
        }))
    }
    props.onChangeCategory(menus[next.index].name) ;
    //------------------------
    return <section className={classes.summary}>
        <section className={classes.menus}>

            <button className={`${classes.beforeC} btn `}onClick={decreaseIndexHandler} disabled={next.before}> <FontAwesomeIcon className={`${classes.before} text-success fs-1 w-100`}  icon={faAnglesLeft} /></button>
            <div className={classes.menue}> 
                <h1 className='text-success'>FLASH SALE</h1>
                <p className='text-primary'>Daily Offers For Limited Time </p>
                <h2 className='text-warning'>{menus[next.index].name}</h2>
                <img src={menus[next.index].img} alt="Cat" />
            </div>
            <button className= {`${classes.afterC} btn `} onClick={increaseIndexHandler} disabled={next.after}><FontAwesomeIcon className={`${classes.after} text-success  fs-1 w-100`}  icon={faAnglesRight}/> </button>
        </section>
    </section>
};
export default OffersSlider;