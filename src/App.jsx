import { useState } from 'react'
import './App.css'
import ProductList from './ShoppingCartComponenets/ProductList'
import Nav from './ShoppingCartComponenets/Nav'
import ProductDetail from './ShoppingCartComponenets/ProductDetail'
import { Route, Routes } from 'react-router-dom'


function App() {
  const cartObject = localStorage.getItem('my-cart') || "{}"
  const savedCart = JSON.parse(cartObject)
  const[cart, setCart] = useState(savedCart)


  function handleCart (productId , cartCount) {
      const oldCount = cart[productId] || 0 ;
      const newCount = {...cart , [productId] : oldCount + cartCount}
      console.log(newCount)
      setCart(newCount)
      console.log(" cart value is " , cart)
      const string = JSON.stringify(newCount)
      localStorage.setItem('my-cart' , string)
  }

    const totalCount = Object.keys(cart).reduce(function(output,current){
      return output + cart[current]
    },0)

  return (
    <>

    <div
    className=' min-h-screen w-full bg-gray-200 '
    >
        <Nav cartCount={totalCount}/>
        <Routes>
          <Route index element={<ProductList />}></Route>
          <Route path='/productdetail/:id' element={<ProductDetail CartCount = {handleCart} />}></Route>

        </Routes>


       
   

    </div>

    </>
  )
}

export default App
