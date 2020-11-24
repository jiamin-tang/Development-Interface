import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';


// import images as components
import Adils from './images/Adils Table.png';
import Alex from './images/Alex Table.png';
import Balkarp from './images/Balkarp Bed.png';
import Ektorp from './images/Ektorp Sofa.png';
import Friheten from './images/Friheten Sofa.png';
import Gerton from './images/Gerton Table.png';
import Kallax from './images/Kallax Table.png';
import Karlstad from './images/Karlstad Sofa.png';
import Kivik from './images/Kivik Sofa.png';
import Klippan from './images/Klippan Table.png';
import Linnmon from './images/Linnmon Table.png';
import Morabo from './images/Morabo Bed.png';


// product list with properties
const productList = [
  {name: "Adils Table", color: "Beige", category: "Table", price: 59, src: Adils, quantity: 1},
  {name: "Alex Table", color: "Black", category: "Table", price: 89, src: Alex, quantity: 1},
  {name: "Balkarp Bed", color: "Black", category: "Bed", price: 199, src: Balkarp, quantity: 1},
  {name: "Ektorp Sofa", color: "Black", category: "Sofa", price: 399, src: Ektorp, quantity: 1},
  {name: "Friheten Sofa", color: "White", category: "Sofa", price: 299, src: Friheten, quantity: 1},
  {name: "Gerton Table", color: "White", category: "Table", price: 149, src: Gerton, quantity: 1},
  {name: "Kallax Table", color: "Blue", category: "Table", price: 49, src: Kallax, quantity: 1},
  {name: "Karlstad Sofa", color: "Blue", category: "Sofa", price: 259, src: Karlstad, quantity: 1},
  {name: "Kivik Sofa", color: "Beige", category: "Sofa", price: 329, src: Kivik, quantity: 1},
  {name: "Klippan Table", color: "White", category: "Table", price: 189, src: Klippan, quantity: 1},
  {name: "Linnmon Table", color: "Black", category: "Table", price: 129, src: Linnmon, quantity: 1},
  {name: "Morabo Bed", color: "White", category: "Bed", price: 169, src: Morabo, quantity: 1}
]

class App extends React.Component {

  render() {
    return (
      <div class="App">
        <FilteredList list={productList} />
      </div>
    )
  }

}

export default App;
