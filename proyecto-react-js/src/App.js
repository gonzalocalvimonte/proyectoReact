import Who from './components/who'
import Header from './components/Header' 
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import { Route,  Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">

  <Header/>
      <Switch>
      <Route exact path="/">
      
      </Route>

      <Route exact path='/who'>      
        <Who/>      
      </Route>

      <Route exact path='/products'>
        <Products/>
      </Route>

      <Route exact path='/products/detail/:id'>
      <ProductDetail/>
      </Route>

      <Route component={NotFound}/>

      </Switch>
     
  <Footer/>    
    </div>
  );
}

export default App;
