import './App.css';
import Home from './pages';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Details from './pages/Details/Details';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cocktail/:id' element={<Details />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
