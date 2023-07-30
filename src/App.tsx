import {createBrowserRouter , RouterProvider } from 'react-router-dom' ;
import RootLayout from './pages/RootLayout' ;
import ContactPage from './pages/Contact' ;
import ShopPage from './pages/Shop' ;
import ErrorPage from './pages/ErrorPage' ;
import Store from './pages/Store' ;
import About from './pages/About' ;
import ShoppingCartProvider from './context/shoppingCartContext' ;

//-------------------------------


function App() {
  //--------------------------------------------/ my routes
  const router = createBrowserRouter([
    {path: '/' , element : <RootLayout/>  , errorElement : <ErrorPage/> ,children:[
      {index : true , element : <Store/> },
      {path : 'about' , element : <About/> },
      {path : 'contact' , element : <ContactPage/> },
      {path : 'shop' , element : <ShopPage/> },
        ]
      }
    ]
  )
  //----------------------------------------------------/
  return (
    <ShoppingCartProvider>
        <RouterProvider router={router}/>
    </ShoppingCartProvider>
  );
}

export default App;
