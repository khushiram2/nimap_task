import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import ProductsPage from './Pages/Products'
import AddProductFrom from './Pages/AddProductFrom'
import AddCategories from './Pages/AddCategories'

function App() {

  return (
    <>
    <Layout>
      <Routes>
      <Route path='/' element={<ProductsPage/>}/>
      <Route path='/new-product' element={<AddProductFrom Mode="add" />}/>
      <Route path='/edit-product/:id' element={<AddProductFrom Mode="edit" />}/>

      <Route path='/new-category' element={<AddCategories Mode="add" />}/>
      <Route path='/edit-category/:id' element={<AddCategories Mode="edit" />}/>
      </Routes>
    </Layout>

    </>
  )
}

export default App
