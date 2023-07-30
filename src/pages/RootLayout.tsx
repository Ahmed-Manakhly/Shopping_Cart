import {Outlet } from 'react-router-dom' ;
import NavBar from '../components/NavBar' ;
import {Footer} from '../pages/Footer' ; 
import TopNav from '../components/TopNav' ;


const RootLayout = () => {
    //-------------------------------------------------
    return <>
        <TopNav/>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
} ;
export default RootLayout ;