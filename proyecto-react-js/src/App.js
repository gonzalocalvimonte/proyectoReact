import Who from './components/who'
import Header from './components/Header' 
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import ProductCreate from './components/ProductCreate'
import ProductEdit from './components/ProductEdit'
import Login from  './components/Login'
import Register from './components/Register'
import { Route,  Routes} from 'react-router-dom'

function App() {
  return (
    
      <div className="App">

        <Header/> 
        
        <Routes>
          
          <Route exact path="/"/>

          <Route exact path='/who' element={<Who/>}/>      
        
          <Route exact path="/products" element={<Products/>}/>
          
          <Route exact path='/products/detail/:id' element={<ProductDetail/>}/>
            
          <Route exact path='/products/create' element={ <ProductCreate/>}/>

          <Route exact path='/products/edit/:id' element ={<ProductEdit/>}/>

          <Route exact path='/user/login' element={<Login/>}/>
          
          <Route exact path='/user/register' element={<Register/>}/>
          
          <Route component={NotFound}/>

        </Routes>

        <Footer/>    
      </div>
  
  );
}

export default App;
